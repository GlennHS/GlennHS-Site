<script setup>
  import tagColorMap from '~/src/tagColorMap'

  const queryParams = ref(null)
  const allTags = ref([])
  const blogPosts = computed(() => blogPostsRaw.value || [])
  const tagsFilteringBy = ref([])
  const filterTypeOR = ref(true)
  const loadingPosts = ref(true)
  
  const config = useRuntimeConfig()
  const blogCollection = config.public.blogCollection

  const getAllTags = () => Object.keys(tagColorMap)

  const { data: blogPostsRaw } = await useAsyncData(blogCollection, () => {
  return queryCollection(blogCollection)
    .order('updated', 'DESC')
    .all()
  })
  .finally(() => {
    loadingPosts.value = false
  })

  // const setPostsByTag = async (tags) => {
  //   let allPosts = []
  //   tags.forEach((tag) => {
  //     allPosts.push(queryContent(contentRoot).where({ 'tags': { $contains: tag } }).find())
  //   })
  //   let posts = await Promise.all(allPosts);
  //   posts = [...new Set(posts.flat())]

  //   let IDs = []
  //   let uniquePosts = []
  //   posts.forEach(p => {
  //     if(!IDs.includes(p._id)) {
  //       IDs.push(p._id)
  //       uniquePosts.push(p)
  //     }
  //   })

  //   blogPosts.value = orderPostArrayByCreated(uniquePosts)
  // }

  // const setPostsByTagAND = async (tags) => {
  //   const posts = await queryContent(contentRoot).where({ 'tags': { $contains: tags } }).find()
  //   blogPosts.value = orderPostArrayByCreated(posts)
  // }

  // const setPostsALL = async () => {
  //   const posts = await queryContent(contentRoot).find()
  //   blogPosts.value = orderPostArrayByCreated(posts)
  // }

  // const getTagArrFromQueryParamString = (str) => {
  //   tagsFilteringBy.value = decodeURIComponent(str).split(/,\s?/g)
  // }

  // const changeTagsFilteringBy = (tag) => {
  //   if(tagsFilteringBy.value.includes(tag)) { tagsFilteringBy.value = tagsFilteringBy.value.filter(t=>t!==tag)}
  //   else { tagsFilteringBy.value.push(tag)}
  //   filterPosts()
  // }

  // const filterPosts = () => {
  //   loadingPosts.value = true
  //   if(tagsFilteringBy.value.length === 0) setPostsALL()
  //   else if(filterTypeOR.value) setPostsByTag(tagsFilteringBy.value)
  //   else setPostsByTagAND(tagsFilteringBy.value)
  //   loadingPosts.value = false
  // }

  // const toggleFilterMode = () => {
  //   filterTypeOR.value = !filterTypeOR.value
  //   filterPosts()
  // }

  // const setMyFavourites = () => {
  //   tagsFilteringBy.value = [ 'favourites' ]
  //   document.getElementById('posts-container').scrollIntoView({behavior: "smooth"})
  //   filterPosts()
  // }

  onMounted(async () => {
    getAllTags()

    /**
     * Grabs the query parameters from the URL and turns it into an object
     * where the keys are URL parameters and the values are the value of that
     * parameter
     */
    // const searchParams = new URLSearchParams(document.location.search);
    // const o = {}
    // for (const [key, value] of searchParams.entries()) {
    //   o[key] = value
    // }
    // queryParams.value = o

    // if(queryParams.value.tags) {
    //   getTagArrFromQueryParamString(queryParams.value.tags)
    // }

    // filterPosts()
  })
</script>

<template>
  <div>
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-20 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-4xl font-bold">Welcome to my blog.</h1>
          <p class="text-xl italic">Grab a drink and stay a while...</p>
          <!-- <button class="cta" @click="setMyFavourites()">My favourites</button> -->
        </div>
      </div>
    </header>

    <!-- <div class="w-full mt-24 bg-slate-500 flex gap-4 items-center px-12 py-4 flex-wrap">
      <div class="flex flex-col w-full md:w-fit">
        <h2 class="text-2xl font-bold">Filter by tag: </h2>
        <h3 class="text-base cursor-pointer" @click="toggleFilterMode()">Filter Type: <strong class="font-bold text-navy-500 underline">{{ filterTypeOR ? 'OR' : 'AND' }}</strong></h3>
      </div>
      <TagPill v-for="tag in allTags" :post-tag="tag"
        class="border-white rounded-full cursor-pointer"
        :class="{'border-4': tagsFilteringBy.includes(tag)}"
        @click="changeTagsFilteringBy(tag)"/>
    </div> -->

    <div id="posts-container" class="px-4 md:px-12 lg:px-24 mt-12">
      <div v-if="loadingPosts" class="flex flex-col items-center">
        <img src='/images/bannerLogo.png' alt='Logo' class="h-12 md:h-24" />
        <span class="fade-repeat mt-4">Posts loading. Please wait...</span>
      </div>
      <div v-else-if="!loadingPosts && blogPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogPostCard v-for="post in blogPosts" :key="post._id" :blog-post="post"/>
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
    background-image: url('/images/japan/me-hikone-mascot.jpg');
    
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: 20% center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .fade-repeat {
    animation: fade-repeat 1s infinite;
  }

  @keyframes fade-repeat {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>