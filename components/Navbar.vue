<script setup>
  const config = useRuntimeConfig()
  const forHire = config.public.availableForHire || false
  const navHeader = useTemplateRef("navHeader")
  const navSpacer = useTemplateRef("navSpacer")

  onMounted(() => {
    document.querySelectorAll('.nav-fadein').forEach(el => {
      el.closest('li').addEventListener('mouseenter', (ev) => {
        el.classList.add('active')
      })
      el.closest('li').addEventListener('mouseleave', (ev) => {
        el.classList.remove('active')
      })
    })

    const height = navHeader.value.offsetHeight;
    navSpacer.value.style.height = `${height}px`;
  })
</script>

<template>
  <div ref="navHeader" class="fixed top-0 left-0 w-full z-40">
    <HireSticky v-if="forHire" />
    <div class="flex justify-between items-center py-4 bg-slate-800 px-2">
      <a href="/" class="h-full hidden lg:flex justify-center items-center p-2 transition hover:brightness-75">
        <img src='/images/bannerLogo.png' alt='Logo' class="w-full" />
      </a>
      <ul class="list-none flex items-center justify-between w-full px-2 md:px-12 lg:px-20 xl:px-40 font-bold">
        <li class="text-sm md:text-base xl:text-lg cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
          <a href="/">Home</a>
          <font-awesome-icon icon="fa-solid fa-house" class="nav-fadein !hidden lg:inline" />
        </li>
        <li class="text-sm md:text-base xl:text-lg cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
          <a href="/blog">Blog</a>
          <font-awesome-icon icon="fa-solid fa-pen-nib" class="nav-fadein !hidden lg:inline" />
        </li>
        <li class="text-sm md:text-base xl:text-lg cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
          <a href="/cv">CV</a>
          <font-awesome-icon icon="fa-solid fa-book" class="nav-fadein !hidden lg:inline" />
        </li>
        <li class="text-sm md:text-base xl:text-lg cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
          <a href="/portfolio">Portfolio</a>
          <font-awesome-icon icon="fa-solid fa-briefcase" class="nav-fadein !hidden lg:inline" />
        </li>
        <li class="text-sm md:text-base xl:text-lg cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
          <a href="/contact">Contact</a>
          <font-awesome-icon icon="fa-solid fa-envelope" class="nav-fadein !hidden lg:inline" />
        </li>
      </ul>
      <div class="w-0.5 lg:w-1 h-6 lg:h-12 bg-white hidden md:inline"></div>
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
      </ul>
    </div>
  </div>
  <div ref="navSpacer" class="-z-10 w-full"></div>
</template>

<style scoped>
  .nav-fadein {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-20px);
    transition-property: transform opacity;
    transition-duration: 0.5s;
  }
  
  .nav-fadein.active {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
</style>