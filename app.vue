<script setup>
  useHead({
    title: 'GlennHS',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [{ name: 'description', content: 'Personal site of web developer Glenn Hamilton-Smith. Contains CV, Portfolio, Blog and Contact Details.' }],
  })

  const config = useRuntimeConfig()
  const isMaintenance = ref(config.public.isMaintenance ?? false)
</script>

<template>
  <div>
    <!-- <Head>
      <NoScript>
        <p>
          <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101408396ns.gif" />
        </p>
      </NoScript>
    </Head> -->
    <!-- <HireSticky /> -->
    <Navbar />
    <NuxtPage v-if="!isMaintenance"/>
    <div v-else class="flex flex-col items-center content-center">
      <p class="pb-4">Apologies, this site is currently undergoing maintenance. We'll be back shortly!</p>
      <img src="/images/hanginthere.jpg" class="w-32"/>
    </div>
    <Footer />
    <ExtraFooter />
  </div>
</template>

<style>
  html, body {
    scroll-behavior: smooth;
  }
</style>
