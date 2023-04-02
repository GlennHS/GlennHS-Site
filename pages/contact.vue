<template>
  <div>
    <header id="parallax-1" class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="backdrop-blur-md bg-gray-900 bg-opacity-50 rounded-r-lg w-full px-4 lg:px-20 py-4 lg:py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 class="text-lg sm:text-xl md:text-2xl xl:text-4xl font-bold">Contact Me.</h1>
          <span class="text-base md:text-lg italic font-semibold">Carrier pigeon has been discontinued, sorry.</span>
        </div>
      </div>
    </header>

    <section>
      <div class="flex flex-col gap-4">
        <div class="contact-row">
          <font-awesome-icon icon="fa-brands fa-github" class="text-2xl sm:text-5xl"/>
          <a href="https://github.com/glennhs" class="sky text-base sm:text-2xl">@GlennHS</a>
        </div>
        <div class="contact-row">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="text-2xl sm:text-5xl"/>
          <a href="https://www.linkedin.com/in/glennhs/" class="sky text-base sm:text-2xl">@GlennHS</a>
        </div>
        <div class="contact-row">
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-2xl sm:text-5xl"/>
          <a href="mailto:glenniumhs@gmail.com" class="sky text-base sm:text-2xl">glenniumhs@gmail.com</a>
        </div>
        <div class="contact-row">
          <font-awesome-icon icon="fa-solid fa-phone" class="text-2xl sm:text-5xl"/>
          <a href="tel:0757354460" class="sky text-base sm:text-2xl">+44 07572354460</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .parallax {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('/images/me-square/2.png');
    min-height: 300px;
    transition: background 0.33s ease-out;
  }
</style>
