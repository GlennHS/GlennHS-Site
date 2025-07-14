<script setup>
import { dateToString } from '~/src/utils';

  const props = defineProps({
    blogPost: Object
  })

  const cardSource = props.blogPost.image || `https://placekitten.com/${400+Math.floor(Math.random() * 16)}/200`
  const shortblurb = () => props.blogPost.blurb.length > 50 ? props.blogPost.blurb.slice(0, 80) + ' (...)' : props.blogPost.blurb
</script>

<template>
  <div class="blog-post-card">
    <NuxtLink :to="`blog/${blogPost.slug}`">
      <div class="flex flex-col border-4 border-white rounded-lg h-full transition hover:shadow-slate-300 hover:shadow-lg">
        <img :src='cardSource' alt='' class="max-h-52 object-cover hidden sm:block" />
        <div class="flex flex-col gap-y-4 p-6">
          <h1 class="text-lg md:text-xl lg:text-4xl">{{ props.blogPost.title }}</h1>
          <div class="hidden md:flex gap-x-4 gap-y-2 flex-wrap items-center">
            <TagPill v-for="tag in props.blogPost.tags" :post-tag="tag" />
          </div>
          <p class="md:block hidden">{{ props.blogPost.blurb }}</p>
          <p class="block md:hidden">{{ shortblurb() }}</p>
          <div class="flex justify-between">
            <span class="text-sm italic">Read More >></span>
            <span class="text-sm">{{ dateToString(props.blogPost.created) }}</span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
  img {
    object-position: 0 0;
    transition: max-height .6s ease-in-out;
  }

  .blog-post-card:hover img {
    max-height: 1000px;
  }

  @media (prefers-reduced-motion) {
    .blog-post-card:hover img {
      max-height: 13rem; /* TailwindCSS h-52 = 13rem */
    }
  }
</style>