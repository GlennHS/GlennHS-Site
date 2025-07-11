<script setup>
  const heroContent = ref(null)
  const page = ref(null)
  const { path } = useRoute()
  const config = useRuntimeConfig()
  const contentRoot = config.public.contentRoot
  const { data: recentBlogPosts } = await useAsyncData(`content-${path}`, () => {
    return queryContent(contentRoot)
      .only(['title', 'excerpt', 'created', 'updated', 'slug', 'tags', '_id'])
      .limit(5)
      .sort({ 'updated': -1 })
      .find()
  })

  onMounted(() => {
    const elHC = heroContent.value
    elHC.classList.add("active")

    // Possibly stops lag?
    elHC.classList.remove('md:backdrop-blur-sm')
    setTimeout(() => elHC.classList.add('md:backdrop-blur-sm'), 1000)

    const parallax = document.querySelector(".parallax");
    window.onscroll = function() {
      document.getElementById('scroll-hint').classList.add('suppress')
      if(screen.width > 1439) {
        var windowYOffset = window.pageYOffset,
          elBackgroundPos = "50% " + Math.max(windowYOffset * -1.35, -450) + "px";
  
        parallax.style.backgroundPosition = elBackgroundPos;
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

    const hiddenElements = document.querySelectorAll('.intersect-container, .blog-post-short');
    hiddenElements.forEach((el) => observer.observe(el));
  })
</script>

<template>
  <div ref="page" class="overflow-x-hidden">
    <header class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-[15%] flex flex-col items-baseline justify-center background-filter">
        <div ref="heroContent" class="hero-content w-full px-20 py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-3xl bg-slate-600 bg-opacity-40 md:backdrop-blur-sm rounded-md">
          <h1 class="text-4xl font-bold">Passionate. Curious. Dedicated.</h1>
          <p class="text-base lg:text-lg">Passionate about web development with expertise in Vue and Nuxt, and experience with Laravel, WordPress and PHP. I have a track record of quickly learning new technologies and applying them to projects. Dedicated to constantly improving my skills, both professionally and personally.</p>
          <div class="flex flex-col w-full md:w-auto md:flex-row gap-y-4 md:gap-y-0 md:gap-x-20">
            <a class="cta" href="/portfolio">View my work</a>
            <a class="cta" href="#main-content">More about me</a>
          </div>
        </div>
      </div>
    </header>

    <div style='display:none' id="scroll-hint" class="z-50 w-full bg-navy-300 bg-opacity-80 fixed bottom-36 text-center font-bold text-base text-white py-2 flex items-center justify-center gap-x-4">
      Scroll to see more...
    </div>

    <div id="main-content" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div id="about-sections">
        <div>
          <section class="intersect-container">
            <h3 class="preline">Currently at...</h3>
            <h2>Viable Data.</h2>
            <p>
              I currently work as a Front End React Developer at Viable Data. I'm learning React, Testing Framework and a bunch of other cool things! I'm learning so much just being there and I'm surrounded by an incredibly supportive, empathetic and kind team that help me grow as a dev. I work on all sorts of FE stuff including bug fixes, UI/UX features, maintenance spikes, PR/Code reviews and testing (including a bit of TDD). It's a real mixed bag. My work can be found on my GitHub it's pretty much all public. I am not brown-nosing when I say I love my job and I love my colleagues even more.
            </p>
          </section>
        </div>
        <div>
          <section class="intersect-container">
            <h3 class="preline">Currently working on...</h3>
            <h2>This Site.</h2>
            <p>
              This site has been a passion project of mine for a little over a month now. Many evenings and weekends have been dedicated to pushing myself to learn more, to become a better developer and to learn Nuxt/Vue/Nuxt-Content in far greater detail than I have before. I've learned so much from making this site, both some valuable lessons and that I should be proud of how much I've achieved in a relatively short space of time. I hope to use this learning and discovery as a springboard into making both small, helpful apps and also bigger side projects! I'm hoping to completely redevelop Center, my first Vue app I properly worked on. You can tell it was one of my first projects!
            </p>
          </section>
        </div>
        <div>
          <section class="intersect-container">
            <h3 class="preline">My Dream Role...</h3>
            <h2><span class="line-through">Full Stack Nuxt Developer.</span></h2>
            <h2>I don't know anymore...</h2>
            <p>
              I used to think Nuxt was the coolest thing since I discovered you can make new desktops in Windows with Win+Ctrl+D but now I'm not so sure. Next isn't nearly as hard as I thought it was going to be and the ecosystem is far larger and has far better support. I think the only thing I can say with certainty any more is that I want to be in a position I can share my knowledge with others and help them grow but also keep learning myself. I think my environment is a bigger determiner of job satisfaction that my actual job. Is that weird? Is that too honest? Who knows! But it's how I feel.
            </p>
          </section>
        </div>
      </div>

      <div id="recent-blog-posts" class="w-full">
        <div>
          <div class="flex flex-col bg-slate-500 rounded-l-xl py-4 px-12 my-4">
            <div class="flex justify-between">
              <h3 class="col-span-2 font-bold text-xl">Recent Blog Posts</h3>
            </div>
          </div>
        </div>
        <div v-for="post in recentBlogPosts">
          <NuxtLink :to="`blog/${post.slug}`">
            <BlogPostShort class="blog-post-short"
              :title="post.title"
              :createdDate="post.created"
              :updatedDate="post.updated"
              :blurb="post.blurb"
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
    background: url('/images/japan/me-moat.jpg');
    
    /* Set a specific height */
    min-height: 800px;
    
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: 50% 0%;
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
  .hero-content, .blog-post-short, .intersect-container {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: filter 1.25s ease, transform 1.25s ease;
  }

  .blog-post-short {
    transform: translateX(100%);
  }
  
  .hero-content.active, .intersect-container.active, .blog-post-short.active {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  /* #endregion */
  /* @media (max-width: 1439px) {
    .parallax {
      height: 100%;
      background-attachment: scroll;
      transition: none;
    }
  } */
</style>
