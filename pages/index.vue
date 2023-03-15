<script setup>
  const heroContent = ref(null)
  const page = ref(null)

  onMounted(() => {
    const elHC = heroContent.value
    elHC.classList.add("active")

    var parallax = document.querySelector(".parallax");
    window.onscroll = function() {
      document.getElementById('scroll-hint').classList.add('suppress')
      var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (windowYOffset * -1.95 - 580) + "px";

      parallax.style.backgroundPosition = elBackgrounPos;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          entry.target.classList.remove('active')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('section') ;
    hiddenElements.forEach((el) => observer.observe(el));
  })
</script>

<template>
  <div ref="page">
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-white text-4xl font-bold">Passionate. Curious. Dedicated.</h1>
          <p class="text-white">Dedicated, curious and passionate team player proficient in various Front End Web Development technologies as well as Agile, Git, and CI/CD. Fast learner with a passion for learning and self-improvement both within my professional and personal settings. Graduated with honours in Computer Science at University of Portsmouth. Entered the National Cipher Challenge twice, was awarded Resident Assistant of the Year 2017-18 and was Chair of the Staff Student Council Committee. Have self-taught Laravel, Nuxt and Vue and have a deep passion for both learning all things web development and helping others succeed.           </p>
          <div class="flex gap-x-20">
            <a class="cta" href="/">View my work</a>
            <a class="cta" href="/">More about me</a>
          </div>
        </div>
      </div>
    </header>

    <div id="scroll-hint" class="w-full bg-navy-300 bg-opacity-80 fixed bottom-36 text-center font-bold text-base text-white py-2 flex items-center justify-center gap-x-4">
      Scroll to see more...
      <!-- <img src="/images/scroll-hint.gif" alt="" class="h-8 w-auto"> -->
    </div>

    <section>
      <h3>Currently at...</h3>
      <h2>Clevertouch Marketing.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem, similique dolores natus esse, aliquam blanditiis architecto saepe sunt magni deserunt fuga voluptas minus tempore nihil iusto laborum, ex cumque voluptates. Suscipit a modi, fuga labore dicta dolorem voluptates nemo. Numquam eos distinctio alias assumenda repudiandae sunt reprehenderit officia, praesentium aut earum, eaque odit harum culpa vero explicabo ad dolorem. Dolores eligendi placeat velit magni veritatis mollitia maiores quibusdam ratione repellat nostrum quam iste rerum, incidunt officiis voluptatibus, reprehenderit adipisci, pariatur esse optio dolorem quos soluta cum illo! Obcaecati eius officiis voluptatum atque rerum exercitationem sapiente dolor autem, ad excepturi.
      </p>
    </section>

    <section>
      <h3>Currently working on...</h3>
      <h2>This Site.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem, similique dolores natus esse, aliquam blanditiis architecto saepe sunt magni deserunt fuga voluptas minus tempore nihil iusto laborum, ex cumque voluptates. Suscipit a modi, fuga labore dicta dolorem voluptates nemo. Numquam eos distinctio alias assumenda repudiandae sunt reprehenderit officia, praesentium aut earum, eaque odit harum culpa vero explicabo ad dolorem. Dolores eligendi placeat velit magni veritatis mollitia maiores quibusdam ratione repellat nostrum quam iste rerum, incidunt officiis voluptatibus, reprehenderit adipisci, pariatur esse optio dolorem quos soluta cum illo! Obcaecati eius officiis voluptatum atque rerum exercitationem sapiente dolor autem, ad excepturi.
      </p>
    </section>

    <section>
      <h3>My Dream Role...</h3>
      <h2>Full Stack Nuxt Developer.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem, similique dolores natus esse, aliquam blanditiis architecto saepe sunt magni deserunt fuga voluptas minus tempore nihil iusto laborum, ex cumque voluptates. Suscipit a modi, fuga labore dicta dolorem voluptates nemo. Numquam eos distinctio alias assumenda repudiandae sunt reprehenderit officia, praesentium aut earum, eaque odit harum culpa vero explicabo ad dolorem. Dolores eligendi placeat velit magni veritatis mollitia maiores quibusdam ratione repellat nostrum quam iste rerum, incidunt officiis voluptatibus, reprehenderit adipisci, pariatur esse optio dolorem quos soluta cum illo! Obcaecati eius officiis voluptatum atque rerum exercitationem sapiente dolor autem, ad excepturi.
      </p>
    </section>
  </div>
</template>

<style scoped>
  .parallax {
    /* The image used */
    /* background-image: url('/images/CodingVue.gif'); */
    background: url('/images/parallax.jpg');
    
    /* Set a specific height */
    min-height: 800px;
    
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: 50% -580px;
    background-repeat: no-repeat;
    background-size: cover;

    transition: background 0.33s ease-out;
  }

  #scroll-hint {
    transition: opacity 0.75s linear;
    transition-delay: 0.33s;
  }

  #scroll-hint.suppress { opacity: 0; }

  /* #region Hero Side Animation */
  .hero-content h1, .hero-content p, section {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 1.5s;
  }

  .hero-content p {
    transition-delay: .75s;
  }
  
  .hero-content.active p, .hero-content.active h1, section.active {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
  /* #endregion */
</style>
