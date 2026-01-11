<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const swiperRef = ref()
const showLeftFade = ref(false)
const showRightFade = ref(false)

const tagArray = ['Vue', 'Nuxt', 'React', 'Tailwind', 'Vite', 'TypeScript', 'Git', 'Node.js', 'Storyblok', 'SCSS', 'Jest']

const updateFades = () => {
  const swiper = swiperRef.value?.swiper
  if (!swiper) return

  const atBeginning = swiper.isBeginning
  const atEnd = swiper.isEnd

  showLeftFade.value = !atBeginning
  showRightFade.value = !atEnd
}

const onSwiperInit = (swiper) => {
  updateFades()
}
</script>


<template>
  <div class="relative overflow-hidden">
    <!-- Left Gradient -->
    <div
      v-if="showLeftFade"
      class="pointer-events-none absolute left-0 top-0 h-full w-8 z-10 bg-gradient-to-r from-[#0a0a23]/80 to-transparent transition-opacity duration-300"
    ></div>

    <!-- Right Gradient -->
    <div
      v-if="showRightFade"
      class="pointer-events-none absolute right-0 top-0 h-full w-8 z-10 bg-gradient-to-l from-[#0a0a23]/80 to-transparent transition-opacity duration-300"
    ></div>

    <swiper
      ref="swiperRef"
      :slides-per-view="'auto'"
      :space-between="12"
      :free-mode="true"
      class="w-full px-4 py-2"
      @swiper="onSwiperInit"
      @slideChange="updateFades"
      @touchEnd="updateFades"
      @transitionEnd="updateFades"
    >
      <swiper-slide
        v-for="tech in tagArray"
        :key="tech"
        class="!w-auto !shrink-0"
      >
        <span class="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full font-mono whitespace-nowrap">
          {{ tech }}
        </span>
      </swiper-slide>
    </swiper>
  </div>
</template>

