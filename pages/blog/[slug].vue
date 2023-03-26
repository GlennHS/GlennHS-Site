<script setup>
  const route = useRoute()
  const postSlug = route.params.slug || ""
  const { path } = useRoute()
  const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    if(postSlug) {
      return queryContent().where({ slug: postSlug }).findOne()
    } else { return { "error" : true } }
  })

  onMounted(() => {
    document.querySelector('')
  })
</script>

<template>
  <div class="blog-post flex flex-col gap-y-6 w-full px-2 md:px-12 lg:px-20 xl:px-40 py-8">
    <a class="text-slate-200 hover:text-slate-400 transition cursor-pointer font-bold text-md" onclick="window.history.go(-1)">&lt;&lt; Go Back</a>
    <div class="flex flex-col items-start gap-y-4">
      <NuxtLink v-if="blogPost.image" :to="blogPost.image" class="w-full flex items-center justify-center" target="_blank">
        <img :src="blogPost.image" class="object-cover w-full max-h-96"/>
        <span class="click-hint hidden lg:block absolute z-10 bg-slate-900 bg-opacity-20 px-2 py-5 rounded-2xl">Hover to expand | Click to see full image</span>
      </NuxtLink>
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
  img {
    transition: max-height 1.6s ease-in-out;
  }

  .blog-post img.hover {
    max-height: 10000px;
  }

  @media (prefers-reduced-motion) {
    .blog-post img.hover {
      max-height: 13rem; /* TailwindCSS h-52 = 13rem */
    }
  }
</style>