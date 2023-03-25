<script setup>
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

    // There *must* be a CSS-only way of doing this...
    const setImageHeight = () => {
      const contentHeight = document.getElementById('s1-content').offsetHeight
      document.getElementById('s1-image').style.height = `${contentHeight}px`
    }

    // window.addEventListener('resize', setImageHeight)
  })
</script>

<template>
  <div>
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="slide-in-left backdrop-blur-sm bg-white bg-opacity-10 rounded-r-lg w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-4xl font-bold">Digital CV.</h1>
          <span class="text-lg italic font-semibold">In a hurry? Need a different format? 
            <a href="/files/cv.pdf" class="text-navy-900 underline">Download a .pdf copy of my CV here.</a>
          </span>
        </div>
      </div>
    </header>
    
    <section class="py-8 px-1 md:px-6 lg:px-12 xl:px-40 grid grid-cols-2 justify-center gap-x-8 xl:items-center">
      <div id="s1-content" class="flex flex-col items-end h-min">
        <h2 class="text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold text-right">Glenn Hamilton-Smith BSc</h2>
        <h3 class="text-base md:text-lg lg:text-xl xl:text-2xl py-4 text-right">
          <strong class="font-bold">Junior Developer</strong>
          at
          <a target="_blank" href="https://clever-touch.com" class="sky">Clevertouch Marketing</a>
        </h3>
        <span class="italic text-lg"><em class="font-bold">Email:</em> glenniumhs@gmail.com</span>
        <span class="italic text-lg"><em class="font-bold">Mobile:</em> +44 7572 354 460</span>
        <span class="italic text-lg"><a href="https://github.com/glennhs" class="sky"><em class="font-bold">Github:</em> glennhs</a></span>
        <span class="italic text-lg"><a href="https://linkedin.com/in/glennhs" class="sky"><em class="font-bold">LinkedIn:</em> glennhs</a></span>
        <p class="text-justify last-right mt-4">Dedicated, curious and passionate team player proficient in various Front End Web Development technologies as well as Agile, Git, and CI/CD. Fast learner with a passion for learning and self-improvement both within my professional and personal settings. Graduated with honours in Computer Science at University of Portsmouth. Entered the National Cipher Challenge twice, was awarded Resident Assistant of the Year 2017-18 and was Chair of the Staff Student Council Committee. Have self-taught Laravel, Nuxt and Vue and have a deep passion for both learning all things web development and helping others succeed.</p>
      </div>
      <div class="flex h-full">
        <img id="s1-image" src="/images/me-square/4.png" alt="Side-on portrait photo of my face, mouth slightly open smiling wearing glasses with brown hair in a light blue polo shirt" class="aspect-square self-stretch" />
      </div>
    </section>

    <section class="flex flex-col items-center">
      <h2>Qualifications</h2>
      <h3>University of Portsmouth 2017-2021</h3>
      <span>BSc Hons. Computer Science</span>
      <h4>Notable Achievements</h4>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi doloremque dolor totam nesciunt officiis, blanditiis illo sit accusamus sint.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi doloremque dolor totam nesciunt officiis, blanditiis illo sit accusamus sint.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi doloremque dolor totam nesciunt officiis, blanditiis illo sit accusamus sint.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi doloremque dolor totam nesciunt officiis, blanditiis illo sit accusamus sint.</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
  .parallax {
    /* The image used */
    /* background-image: url('/images/CodingVue.gif'); */
    background: url('/images/me-square/2.png');
    
    /* Set a specific height */
    min-height: 400px;
    
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: 50% -580px;
    background-repeat: no-repeat;
    background-size: cover;

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
</style>