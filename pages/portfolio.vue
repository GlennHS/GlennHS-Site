<script setup>
  // import Swiper JS
  import Swiper from 'swiper/bundle';
  // import Swiper styles
  import 'swiper/css/bundle';

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          // entry.target.classList.remove('active')
        }
      })
    })

    const slideInEls = document.querySelectorAll( ".slide-in-left");
    slideInEls.forEach((el) => observer.observe(el));

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  })
</script>

<template>
  <div>
    <header id="parallax-1" class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="slide-in-left backdrop-blur-md bg-gray-900 bg-opacity-50 rounded-r-lg w-full px-4 lg:px-20 py-4 lg:py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-lg lg:max-w-xl xl:max-w-3xl mt-32 md:mt-0">
          <h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Portfolio.</h1>
          <span class="text-base lg:text-lg italic font-semibold">All work here is my own unless otherwise specified.</span>
        </div>
      </div>
    </header>

    <section>
      <p>Coming soon! It'll be worth the wait &lt;3</p>
    </section>

    <section class="hidden">
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .parallax {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('/images/me-square/2.png');
    min-height: 300px;
    transition: background 0.33s ease-out;
  }

  .slide-in-left {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition-property: filter, transform;
    transition-duration: 1s;
  }

  .slide-in-left.active {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  .swiper {
    width: 600px;
    height: 300px;
  }
</style>