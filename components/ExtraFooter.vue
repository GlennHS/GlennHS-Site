
<script setup>
  const verySmol = ref(false)

  onMounted(() => {
    if(screen.width < 400) verySmol.value = true
  })
</script>

<template>
  <div>
    <div class="fixed bottom-0 left-0 bg-navy-900 h-12 w-full flex justify-center items-center z-10">
      {{ !verySmol ? 'Made with ☕ b' : 'B' }}y Glenn Hamilton-Smith BSc - <i class="ml-1">&copy; {{ new Date(Date.now()).getFullYear() }}</i>
    </div>
    <div class="h-12 mt-2"><!-- Stops extrafooter overlap --></div>
  </div>
</template>