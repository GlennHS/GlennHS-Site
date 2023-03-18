<script setup>
  const props = defineProps({
    title: String,
    updatedDate: String,
    createdDate: String,
    excerpt: String,
    tags: Array,
  })
</script>

<template>
  <div>
    <div class="flex flex-col gap-y-4 justify-center bg-slate-700 hover:bg-slate-900 hover:-ml-4 rounded-l-xl transition-all cursor-pointer py-4 px-12 my-4">
      <div class="flex justify-between">
        <h3 class="col-span-2 font-bold text-xl">{{ title }}</h3>
        <span v-if="createdDate === updatedDate" class="text-sm italic">{{ createdDate }}</span>
        <span v-else class="text-sm italic">{{ createdDate }} (u. {{ updatedDate }})</span>
      </div>
      <div class="flex items-center gap-x-4">
        <TagPill v-for="tag in props.tags" :postTag="tag" />
        <!-- <p v-for="tag in props.tags">{{ tag }}</p> THIS WORKS FINE-->
      </div>
      <p class="col-span-full">{{ excerpt }}</p>
    </div>
  </div>
</template>