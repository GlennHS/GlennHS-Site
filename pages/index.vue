<script setup>
  const heroContent = ref(null)
  const page = ref(null)
  const { path } = useRoute()
  const { data: recentBlogPosts } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
      .only(['title', 'excerpt', 'created', 'updated', 'slug', 'tags', '_id'])
      .limit(5)
      .sort({ 'updated': -1 })
      .find()
  })

  onMounted(() => {
    const elHC = heroContent.value
    elHC.classList.add("active")

    const parallax = document.querySelector(".parallax");
    window.onscroll = function() {
      document.getElementById('scroll-hint').classList.add('suppress')
      if(screen.width > 1439) {
        var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + Math.max(windowYOffset * -1.95 - 580, -1650) + "px";
  
        parallax.style.backgroundPosition = elBackgrounPos;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          // entry.target.classList.remove('active')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('section, .blog-post-short');
    hiddenElements.forEach((el) => observer.observe(el));
  })
</script>

<template>
  <div ref="page">
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl">
          <h1 class="text-4xl font-bold">Passionate. Curious. Dedicated.</h1>
          <p>Dedicated, curious and passionate team player proficient in various Front End Web Development technologies as well as Agile, Git, and CI/CD. Fast learner with a passion for learning and self-improvement both within my professional and personal settings. Graduated with honours in Computer Science at University of Portsmouth. Entered the National Cipher Challenge twice, was awarded Resident Assistant of the Year 2017-18 and was Chair of the Staff Student Council Committee. Have self-taught Laravel, Nuxt and Vue and have a deep passion for both learning all things web development and helping others succeed.</p>
          <div class="flex flex-col w-full md:w-auto md:flex-row gap-y-4 md:gap-y-0 md:gap-x-20">
            <a class="cta" href="/">View my work</a>
            <a class="cta" href="/">More about me</a>
          </div>
        </div>
      </div>
    </header>

    <div id="scroll-hint" class="z-50 w-full bg-navy-300 bg-opacity-80 fixed bottom-36 text-center font-bold text-base text-white py-2 flex items-center justify-center gap-x-4">
      Scroll to see more...
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div id="about-sections">
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
      <div id="recent-blog-posts" class="w-full">
        <div>
          <div class="flex flex-col bg-slate-500 rounded-l-xl py-4 px-12 my-4">
            <div class="flex justify-between">
              <h3 class="col-span-2 font-bold text-xl">Recent Blog Posts</h3>
            </div>
          </div>
        </div>
        <div v-for="post in recentBlogPosts" :key="post._id">
          <NuxtLink :to="`blog/${post.slug}`">
            <BlogPostShort class="blog-post-short"
              :title="post.title"
              :createdDate="post.created"
              :updatedDate="post.updated"
              :excerpt="post.excerpt"
              :tags="post.tags" />
          </NuxtLink>
        </div>
      </div>
    </div>
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

  /* #region Hero Slide Animation */
  .hero-content h1, .hero-content p, section, .blog-post-short {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition-property: filter transform;
    transition-duration: 1.5s;
  }

  .blog-post-short {
    transform: translateX(100%);
  }

  .hero-content p {
    transition-delay: .75s;
  }
  
  .hero-content.active p, .hero-content.active h1, section.active, .blog-post-short.active {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
  /* #endregion */
  @media (max-width: 1439px) {
    .parallax {
      height: 100%;
      background-attachment: scroll;
      background-position: 0;
      transition: none;
    }
  }
</style>
