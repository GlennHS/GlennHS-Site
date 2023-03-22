<script setup>
  const props = defineProps({
    blogPost: Object
  })
</script>

<template>
  <div class="flex flex-col gap-x-4">
    <h1 class="text-2xl">{{ props.blogPost.title }}</h1>
    <div class="flex gap-y-4 items-center">
      <TagPill v-for="tag in props.blogPost.tags" :post-tag="tag" />
    </div>
    <p>{{ props.blogPost.excerpt }}</p>
    <span class="text-sm italic">Read More >></span>
  </div>
</template>

<style scoped>
  
</style>