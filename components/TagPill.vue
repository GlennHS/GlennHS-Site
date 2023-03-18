<script setup>
  const props = defineProps({
    postTag: String
  })

  const tagColorMap = {
    'test': 'bg-pink-300',
    'testing': 'bg-orange-300',
    'nuxt/vue': 'bg-emerald-300',
    'ai': 'bg-teal-300',
    'learning': 'bg-yellow-300',
    'tailwind': 'bg-cyan-300',
    'coding': 'bg-slate-300',
  }

  const bgColor = () => tagColorMap[props.postTag] || 'slate'
</script>

<template>
  <div>
    <NuxtLink :to="`blog?tag=${encodeURIComponent(props.postTag)}`">
      <div class="text-center rounded-full py-0.5 px-4 text-sm text-slate-900 font-bold hover:shadow-lg hover:shadow-white transition hover:brightness-75" :class="bgColor()">
        {{ props.postTag }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
  
</style>