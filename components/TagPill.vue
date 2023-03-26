<script setup>
  import tagColorMap from '~~/src/tagColorMap';
  const props = defineProps({
    postTag: String
  })

  const bgColor = () => tagColorMap[props.postTag] || 'bg-slate-300'
</script>

<template>
  <div>
    <div class="text-center rounded-full py-0.5 px-4 text-sm text-slate-900 font-bold" :class="bgColor()">
      <span class="text-sm md:text-base">{{ props.postTag }}</span>
    </div>
  </div>
</template>

<style scoped>
  
</style>