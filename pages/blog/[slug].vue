<script setup>
  const route = useRoute()
  const postSlug = route.params.slug || ""
  const { path } = useRoute()
  const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    if(postSlug) {
      return queryContent().where({ slug: postSlug }).findOne()
    } else { return { "error" : true } }
  })

</script>

<template>
  <div class="flex flex-col gap-y-6 w-full px-2 md:px-12 lg:px-20 xl:px-40 py-8">
    <a class="text-slate-200 hover:text-slate-400 transition cursor-pointer font-bold text-md" onclick="window.history.go(-1)">&lt;&lt; Go Back</a>
    <div class="flex flex-col gap-y-4">
      <img v-if="blogPost.image" :src="blogPost.image"/>
      <h1 class="text-3xl font-bold">{{ blogPost.title }}</h1>
      <p class="italic">{{ blogPost.excerpt }}</p>
      <span class="text-sm">Posted: {{ blogPost.created }}</span>
      <em class="text-sm italic" v-if="blogPost.updated != blogPost.created">(Post updated: {{ blogPost.updated }})</em>
      <hr />
      <div class="blog-post-content">
        <ContentRenderer :value="blogPost" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  
</style>