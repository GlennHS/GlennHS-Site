<script setup>
  
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <header class="relative w-full h-full lg:h-auto flex items-center justify-center">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-7xl font-bold">404 - Not Found</h1>
          <h2 class="text-4xl font-bold">Oh no!</h2>
          <p class="text-xl italic">It looks like you tried to access a page that doesn't exist. If you believe this to be in error, please contact me via email using the button below. Thank you ♥</p>
          <div class="flex justify-evenly w-full">
            <NuxtLink to="/" class="cta">Homepage</NuxtLink>
            <a class="cta" href="mailto:glenniumhs@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
  header {
    background-image: url('https://placekitten.com/2000/1400');
    min-height: 600px;
  }

  @media (max-width:1023px) {
    header {
      background-image: none;
      background-color: #5555;
    }
  }
</style>