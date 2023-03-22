<script setup>
  const queryParams = ref(null)
  const blogPosts = ref([])
  const allTags = ref([])
  const tagsFilteringBy = ref([])
  const filterTypeOR = ref(true)

  const getAllTags = async () => {
    const allPostTags = await queryContent()
      .only(['tags'])
      .sort({ 'tags': 1 })
      .find()
      allTags.value = [...new Set(allPostTags.map(o=>o.tags).flat())]
  }

  const setPostsByTag = async (tags) => {
    let allPosts = []
    tags.forEach((tag) => {
      allPosts.push(queryContent().where({ 'tags': { $contains: tag } }).find())
    })
    const posts = await Promise.all(allPosts);
    blogPosts.value = [...new Set(posts.flat())];
  }

  const setPostsByTagAND = async (tags) => {
    blogPosts.value = await queryContent().where({ 'tags': { $contains: tags } }).find()
  }

  const setPostsALL = async (tags) => {
    blogPosts.value = await queryContent().find()
  }

  const getTagArrFromQueryParamString = (str) => {
    tagsFilteringBy.value = decodeURIComponent(str).split(/,\s?/g)
  }

  const changeTagsFilteringBy = (tag) => {
    if(tagsFilteringBy.value.includes(tag)) { tagsFilteringBy.value = tagsFilteringBy.value.filter(t=>t!==tag)}
    else { tagsFilteringBy.value.push(tag)}
    filterPosts()
  }

  const filterPosts = () => {
    if(tagsFilteringBy.value.length === 0) setPostsALL()
    else if(filterTypeOR.value) setPostsByTag(tagsFilteringBy.value)
    else setPostsByTagAND(tagsFilteringBy.value)
  }

  const toggleFilterMode = () => {
    filterTypeOR.value = !filterTypeOR.value
    filterPosts()
  }

  onMounted(async () => {
    getAllTags()

    /**
     * Grabs the query parameters from the URL and turns it into an object
     * where the keys are URL parameters and the values are the value of that
     * parameter
     */
    const searchParams = new URLSearchParams(document.location.search);
    const o = {}
    for (const [key, value] of searchParams.entries()) {
      o[key] = value
    }
    queryParams.value = o

    if(queryParams.value.tags) {
      getTagArrFromQueryParamString(queryParams.value.tags)
    }

    filterPosts()
  })
</script>

<template>
  <div>
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-4xl font-bold">Welcome to my blog.</h1>
          <p class="text-xl italic">Grab a drink and stay a while...</p>
        </div>
      </div>
    </header>

    <div class="w-full h-24 mt-24 bg-slate-500 flex gap-x-4 items-center px-12">
      <div class="flex flex-col">
        <h2 class="text-2xl font-bold">Filter by tag: </h2>
        <h3 class="text-base cursor-pointer" @click="toggleFilterMode()">Filter Type: <strong class="font-bold">{{ filterTypeOR ? 'OR' : 'AND' }}</strong></h3>
      </div>
      <TagPill v-for="tag in allTags" :post-tag="tag"
        class="border-white rounded-full cursor-pointer"
        :class="{'border-4': tagsFilteringBy.includes(tag)}"
        @click="changeTagsFilteringBy(tag)"/>
    </div>

    <div class="px-24 mt-12">
      <div v-if="blogPosts.length > 0" class="grid grid-cols-3 gap-10">
        <BlogPostCard v-for="post in blogPosts" :blog-post="post"/>
      </div>
      <div v-else>
        Nothing to show
      </div>
    </div>
  </div>
</template>

<style scoped>
  .parallax {
    /* The image used */
    background-image: url('/images/coffee-ambience.jpg');
    
    /* Set a specific height */
    min-height: 400px;
    
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: 80% center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>