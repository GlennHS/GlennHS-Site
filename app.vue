<script setup>
  useHead({
    title: 'GlennHS',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [{ name: 'description', content: 'Personal site of web developer Glenn Hamilton-Smith. Contains CV, Portfolio, Blog and Contact Details.' }],
    link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  })
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
    <ExtraFooter />
    <Footer />
  </div>
</template>

<style>
  html, body {
    scroll-behavior: smooth;
  }
</style>
