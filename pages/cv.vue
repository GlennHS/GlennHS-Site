<script setup>
  
</script>

<template>
  <div>
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-4xl font-bold">Glenn Hamilton-Smith BSc</h1>
          <p class="text-xl italic">Impressum? I hardly know 'em!</p>
          <a class="cta" href="/contact">Contact Me</a>
        </div>
      </div>
    </header>
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