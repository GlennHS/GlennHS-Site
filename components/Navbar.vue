<script setup>
  onMounted(() => {
    document.querySelectorAll('.nav-fadein').forEach(el => {
      el.closest('li').addEventListener('mouseenter', (ev) => {
        el.classList.add('active')
      })
      el.closest('li').addEventListener('mouseleave', (ev) => {
        el.classList.remove('active')
      })
    })
  })
</script>

<template>
  <div class="flex justify-between items-center h-24 bg-slate-800 px-4">
    <a href="/" class="h-full flex justify-center items-center p-2 transition hover:brightness-75">
      <img src='/images/bannerLogo.png' alt='Logo' class="w-full" />
    </a>
    <ul class="list-none flex items-center justify-between w-full px-40 text-sm md:text-base xl:text-xl font-bold">
      <li class="cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
        <a href="/">Home</a>
        <font-awesome-icon icon="fa-solid fa-house" class="nav-fadein" />
      </li>
      <li class="cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
        <a href="/">Blog</a>
        <font-awesome-icon icon="fa-solid fa-pen-nib" class="nav-fadein" />
      </li>
      <li class="cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
        <a href="/">CV</a>
        <font-awesome-icon icon="fa-solid fa-book" class="nav-fadein" />
      </li>
      <li class="cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
        <a href="/">Portfolio</a>
        <font-awesome-icon icon="fa-solid fa-briefcase" class="nav-fadein" />
      </li>
      <li class="cursor-pointer transition hover:underline hover:text-slate-500 flex gap-x-3 justify-center items-center">
        <a href="/">Contact</a>
        <font-awesome-icon icon="fa-solid fa-envelope" class="nav-fadein" />
      </li>
    </ul>
    <div class="w-1 h-12 bg-white"></div>
    <ul id="social-icons" class="list-none flex items-center justify-between gap-x-4 px-10 text-md md:text-xl xl:text-3xl">
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
        <a class="cursor-pointer transition hover:text-slate-600" onclick="alert('My telephone number is +44 75735446zero. Due to an excess of spam calls I do not answer unknown numbers but I do return calls provided a voicemail is left. Thank you for your understanding')">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </a>
      </li>
    </ul>
  </div>
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

  /* #social-icons li {
    transition: transform 0.3s ease-in-out;
  }

  #social-icons li:hover {
    transform: rotate(360deg);
  } */
</style>