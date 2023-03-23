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
  <div class="flex flex-col gap-y-4 justify-center bg-slate-700 hover:bg-slate-900 hover:-ml-4 rounded-l-xl transition-all cursor-pointer py-4 px-12 my-4">
    <div class="flex justify-between">
      <h3 class="col-span-2 font-bold text-xl">{{ title }}</h3>
      <span v-if="createdDate === updatedDate" class="text-sm italic">{{ createdDate }}</span>
      <span v-else class="text-sm italic">{{ createdDate }} (u. {{ updatedDate }})</span>
    </div>
    <div class="hidden md:flex items-center gap-x-4">
      <NuxtLink v-for="tag in props.tags"
        :to="`blog?tags=${encodeURIComponent(tag)}`"
        class="cursor-pointer hover:brightness-125 active:brightness-75 transition">
        <TagPill :postTag="tag" />
      </NuxtLink>
    </div>
    <p class="col-span-full">{{ excerpt }}</p>
  </div>
</template>
