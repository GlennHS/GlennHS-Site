<script setup>
  useHead({
    title: 'GlennHS',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [{ name: 'description', content: 'Personal site of web developer Glenn Hamilton-Smith. Contains CV, Portfolio, Blog and Contact Details.' }],
  })
</script>

<template>
  <div>
    <Head>
      <NoScript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101408396ns.gif" /></p></NoScript>
    </Head>
    <Navbar />
    <NuxtPage />
    <Footer />
    <ExtraFooter />
  </div>
</template>

<style>
  html, body {
    scroll-behavior: smooth;
  }
</style>
