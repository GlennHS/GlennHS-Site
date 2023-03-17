<script setup>
  const props = defineProps({
    title: String,
    updatedDate: String,
    excerpt: String,
  })
</script>

<template>
  <div>
    <div class="flex flex-col bg-slate-700 hover:bg-slate-900 hover:-ml-4 rounded-l-xl transition-all cursor-pointer py-4 px-12 my-4">
      <div class="flex justify-between pb-4">
        <h3 class="col-span-2 font-bold text-xl">{{ title }}</h3>
        <span class="text-sm italic">{{ updatedDate }}</span>
      </div>
      <p class="col-span-full">{{ excerpt }}</p>
    </div>
  </div>
</template>