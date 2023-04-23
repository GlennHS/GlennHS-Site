<script setup>
  const { path } = useRoute()
  const { data: recentBlogPosts } = await useAsyncData(`content-${path}`, () => {
    return queryContent('/live')
      .only(['title', 'excerpt', 'created', 'updated', 'slug', 'tags', '_id'])
      .limit(5)
      .sort({ 'updated': -1 })
      .find()
  })
</script>

<template>
  <div class="grid grid-cols-10 bg-slate-700 py-2 px-6 mt-8">
    <div class="col-span-3 flex flex-col items-center place-self-center gap-2">
      <NuxtLink to="/"><img src="/images/bannerLogo.png" alt="" class="w-fit px-20"></NuxtLink>
      <span>Glenn Hamilton-Smith BSc - &copy; {{ new Date(Date.now()).getFullYear() }}</span>
      <div class="flex gap-4">
        <ul id="social-icons" class="list-none hidden md:flex items-center justify-between gap-x-2 sm:gap-x-4 px-10 text-2xl xl:text-3xl">
          <li>
            <a class="cursor-pointer transition hover:text-slate-600" href="https://github.com/glennhs" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a class="cursor-pointer transition hover:text-slate-600" href="https://www.linkedin.com/in/glennhs/" target="_blank">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a class="cursor-pointer transition hover:text-slate-600" href="mailto:glenniumhs@gmail.com">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
          </li>
          <li>
            <a class="cursor-pointer transition hover:text-slate-600" href="tel:07572354460">
              <font-awesome-icon icon="fa-solid fa-phone" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-2">
      <span class="font-bold text-lg underline">Site Links</span>
      <ul class="flex flex-col gap-2 mt-4">
        <li><NuxtLink class="sky" to="/">Home.</NuxtLink></li>
        <li><NuxtLink class="sky" to="/blog">Blog.</NuxtLink></li>
        <li><NuxtLink class="sky" to="/cv">CV.</NuxtLink></li>
        <li><NuxtLink class="sky" to="/portfolio">Portfolio.</NuxtLink></li>
        <li><NuxtLink class="sky" to="/contact">Contact.</NuxtLink></li>
      </ul>
    </div>
    <div class="col-span-5 justify-self-center">
      <span class="font-bold text-lg underline">Recent Blog Posts</span>
      <div class="flex flex-col gap-2 mt-4">
        <NuxtLink :to="'/blog/'+bp.slug" v-for="bp in recentBlogPosts" class="sky"><span class='italic'>{{ bp.updated.replace(/\-/g, '.') }}</span> - {{ bp.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
