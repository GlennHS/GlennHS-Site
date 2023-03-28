<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
  })
</script>

<template>
  <div>
    <header id="parallax-1" class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="slide-in-left backdrop-blur-md bg-gray-900 bg-opacity-50 rounded-r-lg w-full px-4 lg:px-20 py-4 lg:py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-lg lg:max-w-xl xl:max-w-3xl mt-32 md:mt-0">
          <h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Digital CV.</h1>
          <span class="text-base lg:text-lg italic font-semibold">In a hurry? Need a different format? 
            <a href="/files/cv.pdf" class="sky">Download a .pdf copy of my CV here.</a>
          </span>
        </div>
      </div>
    </header>
    
    <section id="details" class="py-8 px-4 md:px-6 lg:px-12 xl:px-40">
      <div id="content" class="flex flex-col items-center md:items-end h-min">
        <h2 class="text-lg md:text-xl xl:text-2xl font-bold text-right">Glenn Hamilton-Smith BSc</h2>
        <h3 class="text-base md:text-lg xl:text-xl text-right">
          <strong class="font-bold">Junior Developer</strong>
          at
          <a target="_blank" href="https://clever-touch.com" class="sky">Clevertouch Marketing</a>
        </h3>
        <span class="italic text-lg"><em class="font-bold">Email:</em> glenniumhs@gmail.com</span>
        <span class="italic text-lg"><em class="font-bold">Mobile:</em> +44 7572 354 460</span>
        <span class="italic text-lg"><a href="https://github.com/glennhs" target="_blank" class="sky"><em class="font-bold">Github:</em> glennhs</a></span>
        <span class="italic text-lg"><a href="https://linkedin.com/in/glennhs" target="_blank" class="sky"><em class="font-bold">LinkedIn:</em> glennhs</a></span>
      </div>
      <p id="statement" class="text-justify last-right mt-4">Dedicated, curious and passionate team player proficient in various Front End Web Development technologies as well as Agile, Git, and CI/CD. Fast learner with a passion for learning and self-improvement both within my professional and personal settings. Graduated with honours in Computer Science at University of Portsmouth. Entered the National Cipher Challenge twice, was awarded Resident Assistant of the Year 2017-18 and was Chair of the Staff Student Council Committee. Have self-taught Laravel, Nuxt and Vue and have a deep passion for both learning all things web development and helping others succeed.</p>
      <img src="/images/me-square/4.png" alt="Side-on portrait photo of my face, mouth slightly open smiling wearing glasses with brown hair in a light blue polo shirt" class="aspect-square w-64 md:w-96" />
    </section>

    <section class="flex flex-col p-0 pb-12">
      <div id="parallax-2" class="parallax w-full"></div>
      <div class="flex flex-col items-center py-8 px-4 md:px-6 lg:px-12 xl:px-40">
        <h2 class="text-lg md:text-xl xl:text-4xl font-bold pt-4 mb-0">Qualifications</h2>
        <h3 class="text-base md:text-lg xl:text-2xl font-semibold">University of Portsmouth 2017-2021</h3>
        <span class="text-base md:text-lg xl:text-2xl">BSc Hons. Computer Science</span>
        <h4 class="text-base md:text-lg xl:text-xl py-4">Notable Achievements</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 items-stretch justify-around gap-x-12">
          <div class="uni-card">
            <img class="uni-card-bg" src="/images/ResLife.png">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" class="text-6xl z-10" />
            <span class="z-10">As Chair of the Staff Student Council Committee and Student Representative, demonstrated strong communication skills and the ability to engage with diverse groups of individuals, resulting in successful initiatives that positively impacted the student body.</span>
          </div>
          <div class="uni-card">
            <img class="uni-card-bg" src="/images/agile.png">
            <font-awesome-icon :icon="['fas', 'person-chalkboard']" class="text-6xl z-10" />
            <span class="z-10">Led an Intermediate Software Engineering group as Scrum Master, championing Agile methodologies and Scrum/Kanban frameworks to ensure timely delivery of high-quality products.</span>
          </div>
          <div class="uni-card">
            <img class="uni-card-bg" src="/images/ResLife.png">
            <font-awesome-icon :icon="['fas', 'book']" class="text-6xl z-10" />
            <span class="z-10">Rapidly acquired proficiency in new programming languages, libraries, and frameworks, including Python and Java, demonstrating a strong ability to learn and adapt quickly.</span>
          </div>
          <div class="uni-card" id="reslife">
            <img class="uni-card-bg" src="/images/ResLife.png">
            <font-awesome-icon :icon="['fas', 'trophy']" class="text-6xl z-10" />
            <span class="z-10">Awarded Resident Assistant of the Year 2017/18 for commitment to peer support, mental health first aid knowledge, and going above and beyond to care for those around me.</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .parallax {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.33s ease-out;
  }

  #parallax-1 {
    background-image: url('/images/me-square/2.png');
    min-height: 400px;
    background-position: 50% min(-560px, -32vw);
  }

  #parallax-2 {
    background-image: url('/images/UoP.jpg');
    min-height: 300px;
    background-position: center;
  }

  #details {
    display: grid;
    grid-template-areas: 'tl tr'
    'bl br';
    gap: 2rem;
  }

  #details img {
    grid-area: tr/tr/br/br;
    justify-self: center;
    align-self: center;
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

  .uni-card img {
    transition: opacity 1s ease-out;
    opacity: 0;
  }

  .uni-card:hover img {
    opacity: 1;
  }

  #reslife img {
    object-position: 25% 50%;
  }

  @media (max-width:1900px) {
    #parallax-1 {
      background-position: 50% min(-200px, -25vw);
    }
  }

  @media (max-width:1400px) {
    #parallax-1 {
      background-position: 50% min(-150px, -20vw);
    }
  }

  @media (max-width: 767px) {
    #details {
      grid-template-areas: 'top'
      'mid'
      'bot';
      justify-items: center;
      align-content: center;
    }

    #details #content { grid-area: 'mid'; }
    #details #statement {
      grid-area: 'bot';
      text-align-last: left;
    }

    #details img {
      grid-area: top;
    }

    .parallax {
      background-attachment: scroll;
      background-size: cover;
    }
  }
</style>