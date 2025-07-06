<script setup>
  const route = useRoute()
  const postSlug = route.params.slug || ""
  const { path } = useRoute()
  const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    if(postSlug) {
      return queryContent().where({ slug: postSlug }).findOne()
    } else { return { "error" : true } }
  })
  const hasHover = ref(true);

  onMounted(() => {
    if(window.matchMedia("(any-hover: none)").matches) {
        hasHover.value = false
        setTimeout(() => document.querySelector('.click-hint').style.opacity = 0, 3000)
    }

    let hoverTimer;
    const elImage = document.getElementById('post-image')
    elImage.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(()=> {
        elImage.classList.add('hover')
        document.querySelector('.click-hint').style.display = 'none'
      }, 1000)
    })
    elImage.addEventListener('mouseleave', () => {
      elImage.classList.remove('hover')
      if(hoverTimer) clearTimeout(hoverTimer)
    })
  })
</script>

<template>
  <div class="blog-post flex flex-col gap-y-6 w-full px-2 md:px-12 lg:px-20 xl:px-40 py-8">
    <a class="text-slate-200 hover:text-slate-400 transition cursor-pointer font-bold text-md" onclick="window.history.go(-1)">&lt;&lt; Go Back</a>
    <div class="flex flex-col items-start gap-y-4">
      <NuxtLink v-if="blogPost.image" :to="blogPost.image" class="w-full flex items-center justify-center" target="_blank">
        <img :src="blogPost.image" id="post-image" class="object-cover w-full max-h-96"/>
        <span class="click-hint absolute z-10 bg-slate-900 bg-opacity-40 px-2 py-5 rounded-2xl transition">{{ hasHover ? 'Hover to expand | ' : ''  }}Click to see full image</span>
      </NuxtLink>
      <h1 class="text-3xl font-bold">{{ blogPost.title }}</h1>
      <p class="italic">{{ blogPost.blurb }}</p>
      <span class="text-sm">Posted: {{ blogPost.created }}</span>
      <em class="text-sm italic" v-if="blogPost.updated != blogPost.created">(Post updated: {{ blogPost.updated }})</em>
      <hr class="w-full" />
      <div class="blog-post-content">
        <ContentRenderer :value="blogPost" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {
    transition: max-height 1.5s ease-out;
  }

  .blog-post img.hover {
    transition: max-height 3.5s ease-out; /* Basically, the hover delay gets real quirky. Don't think too hard */
    max-height: 10000px;
  }

  @media (prefers-reduced-motion) {
    .blog-post img.hover {
      max-height: 13rem; /* TailwindCSS h-52 = 13rem */
    }
  }
</style>