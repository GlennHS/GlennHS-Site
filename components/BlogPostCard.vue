<script setup>
  const props = defineProps({
    blogPost: Object
  })

  const cardSource = `https://placekitten.com/${400+Math.floor(Math.random() * 8)}/200`
</script>

<template>
  <div>
    <NuxtLink :to="`blog/${blogPost.slug}`">
      <div class="flex flex-col border-4 border-white rounded-lg h-full transition hover:shadow-slate-300 hover:shadow-lg">
        <img :src='cardSource' alt='' />
        <div class="flex flex-col gap-y-4 p-6">
          <h1 class="text-4xl">{{ props.blogPost.title }}</h1>
          <div class="flex gap-x-4 gap-y-2 flex-wrap items-center">
            <TagPill v-for="tag in props.blogPost.tags" :post-tag="tag" />
          </div>
          <p>{{ props.blogPost.excerpt }}</p>
          <div class="flex justify-between">
            <span class="text-sm italic">Read More >></span>
            <span class="text-sm">{{ props.blogPost.created }}</span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
  
</style>