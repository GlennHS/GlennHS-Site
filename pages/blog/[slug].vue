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
      <h1 class="text-3xl font-bold">{{ blogPost.title }}</h1>
      <hr />
      <p class="italic">{{ blogPost.excerpt }}</p>
      <ContentRenderer :value="blogPost" />
    </div>
  </div>
</template>

<style scoped>
  
</style>