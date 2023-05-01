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
        type: 'bullets',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
</script>

<template>
  <div>
    <header id="banner-1" class="relative w-full h-full flex items-center justify-center banner">
      <!-- <div class="absolute w-full h-full top-0 left-0 backdrop-blur-[2px]"></div> -->
      <div class="absolute z-20 top-0 left-0 w-full h-full bg-slate-600 bg-opacity-20 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="slide-in-left backdrop-blur-md bg-gray-900 bg-opacity-50 rounded-r-lg w-full px-4 lg:px-20 py-4 lg:py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-lg lg:max-w-xl xl:max-w-3xl mt-32 md:mt-0">
          <h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Portfolio.</h1>
          <span class="text-base lg:text-lg italic font-semibold">All work here is my own unless otherwise specified.</span>
        </div>
      </div>
    </header>

    <section>
      <!-- Slider main container -->
      <div class="swiper main-carousel">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <NuxtLink to="#client-1-epc" class="slide-link">
              <img src='/images/patterns/polygon-1.svg' alt='' class="slide-img" />
              <span class="slide-text">[Fortune 500 Client]'s Preference Centre.</span>
            </NuxtLink>
          </div>
          <div class="swiper-slide">
            <NuxtLink to="#client-2-content-hub" class="slide-link">
              <img src='/images/patterns/lpg-3.svg' alt='' class="slide-img" />
              <span class="slide-text">[Education Client]'s WordPress Content Hub.</span>
            </NuxtLink>
          </div>
          <div class="swiper-slide">
            <NuxtLink to="#wonderwall" class="slide-link">
              <img src='https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' class="slide-img" />
              <span class="slide-text">Wonderwall: A Company-Wide Realtime Analytics Dashboard.</span>
            </NuxtLink>
          </div>
          <div class="swiper-slide">
            <NuxtLink to="#total-rewards-calculator" class="slide-link">
              <img src='https://images.pexels.com/photos/6693665/pexels-photo-6693665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' class="slide-img" />
              <span class="slide-text">Total Rewards Calculator: A Real View Into Employee Remuneration.</span>
            </NuxtLink>
          </div>
          <div class="swiper-slide">
            <NuxtLink to="#glennhs" class="slide-link">
              <img src='/images/bannerLogo.png' alt='' class="slide-img !object-contain px-4 bg-slate-400" />
              <span class="slide-text">GlennHS: My Personal Site.</span>
            </NuxtLink>
          </div>
          <div class="swiper-slide">
            <NuxtLink to="#aetherslay" class="slide-link">
              <img src='/images/aetherslayLogo.png' alt='' class="slide-img !object-contain px-4 bg-cyan-200" />
              <span class="slide-text">ÆtherSlay: A C#-based D&D Toolkit for DMs & Players.</span>
            </NuxtLink>
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <p class="italic">Given how I'm not entirely certain of my legal obligations and boundaries, I have decided to redact clients' names where possible. Where you see square brackets used, this is to protect a client's anonymity. Thank you for your understanding.</p>
    </section>

    <section id="client-1-epc" class="flex flex-col p-0 pb-12">
      <div id="banner-2" class="banner pattern w-full"></div>
      <div class="section-content">
        <h2>[Fortune 500 Client]'s Email Preference Centre</h2>
        <div class="flex flex-col-reverse 2xl:flex-row items-center justify-center 2xl:gap-12">
          <div class="w-auto">
            <p>A year ago I worked on a complex technical project for [Fortune 500 Client]'s Investment Management section, creating an email preference center solution that integrated three different Pardot Business Units together. My main objective was to create a user-friendly experience for customers to manage their email preferences in four different languages, including automatic redirection for unknown users.</p>
            <p>To achieve this, I developed a solution that ran off of a 4-layer-deep JSON object that stored user preferences, investor profiles, language, and country data which was used to mutate the DOM of the page and present each user with a bespoke experience. The JSON also had the additional effect of gating content users shouldn't be able to access from them. The solution was designed to be highly customizable and scalable, ensuring that the company's email marketing efforts were targeted and effective.</p>
            <p>Throughout the six-month development process, I encountered and overcame many technical challenges, such as changing requirements, increase in scope and ensuring that the project worked smoothly across different devices and browsers. Despite these challenges, I was able to successfully deliver a comprehensive email preference center solution that met the company's requirements and exceeded their expectations.</p>
            <p>As part of my work on a complex email preference center solution for this client, I developed a user-friendly NodeJS app that automated the transformation of an Excel file with translations, investor profiles, and preferences into a 4-layer-deep JSON object. The app's primary goal was to make the process of creating the JSON object easier and more efficient, streamlining the workflow for the client.</p>
            <p>Through my careful planning and attention to detail, I was able to create an app that successfully bridged the gap between human-readable Excel files and machine-readable JSON objects. The app's flexibility allowed for easy updates to the Excel file, ensuring that the JSON object remained up-to-date and accurate. Overall, my work on the NodeJS app was an essential component of the email preference center solution, providing the client with a reliable and user-friendly tool for data transformation and automation.</p>
            <p>While the project is no longer functional due to changes made by the company, I am proud of the work I accomplished and the technical skills I developed during the project. I believe that my experience working on such a complex and challenging project for such a high-profile client has equipped me with new skills needed to excel in future technical projects.</p>
          </div>
          <div>
            <div class="swiper hide-on-mobile">
            <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <div class="client-1-slide">
                    <img src='/images/swiper/client-1/1.png' class="slide-img object-contain"/>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="client-1-slide">
                    <img src='/images/swiper/client-1/2.png' class="slide-img object-contain"/>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="client-1-slide">
                    <img src='/images/swiper/client-1/3.png' class="slide-img object-contain"/>
                  </div>
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="client-2-content-hub" class="flex flex-col p-0 pb-12">
      <div id="banner-3" class="banner pattern w-full"></div>
      <div class="section-content">
        <h2>[Education Client]'s WordPress Content Hub.</h2>
        <div class="flex flex-col 2xl:flex-row items-center justify-center 2xl:gap-12">
          <!-- <img src='/images/soon.png' class="w-96"/> -->
          <div>
            <p>[Education Blog Client] came to us with a unique challenge: they needed a WordPress template file and a bespoke plugin to aggregate, filter, search and display blog posts from their partner sites. The plugin was designed to pull posts from various content management systems used by the client's partner sites, including WordPress, SetSquare, SquareSpace, and Volcanic. I created a custom template file that seamlessly integrated with the plugin, resulting in a visually appealing and user-friendly grid format for displaying the posts.</p>
            <p>One of the key features of the WordPress template file was its fully responsive design. To ensure that the page would look great on any device, I implemented a range of optimization techniques to improve performance, including pagination of the results using response headers from the WP Query performed. The end result was a page that loaded quickly and provided a smooth user experience.</p>
            <p>The WordPress template file also included a range of filters that allowed users to query and filter the posts based on various criteria. To achieve this, I used WordPress' inbuilt JSON REST API, which provided an easy and efficient way to query the data and load more posts as required. The filters were intuitive and easy to use, making it simple for users to find the content they were looking for.</p>
            <p>Another key feature of the project was the normalization and injection script that I developed. This script was designed to ensure that posts displayed in a uniform format on the single post's page, regardless of the CMS system they came from. To achieve this, I used a plugin called "WPCode" and wrote a script that added a subscribe button to trigger a lightboxed form and a scroll progress bar attached to the navigation. The script also included conditional logic and conditional styling to ensure that the appropriate formatting was applied based on the CMS system the post came from.</p>
            <p>One of the challenges I faced during the project was the fact that the existing theme, Divi, heavily modified the "single.php" file. This meant that I couldn't safely modify it without risking conflicts. To overcome this challenge, I used the WPCode plugin and wrote the normalization and injection script in a way that worked with the existing theme file. This required a great deal of technical skill and attention to detail, but the end result was a solution that worked seamlessly and without any issues.</p>
            <p>While I am unfortunately unable to share any images of the finished site due to it not being live yet, the client is very happy with the deliverable. The custom WordPress template file and bespoke plugin worked seamlessly together to create a visually appealing and user-friendly page that allowed users to easily find the content they were looking for. The filters and normalization script added an extra level of functionality and user experience, while the fully responsive design and optimization techniques ensured that the page loaded quickly and provided a smooth experience across all devices. Overall, I am proud of the work I did on this project and am confident that it will be a valuable asset for the client going forward.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="wonderwall" class="flex flex-col p-0 pb-12">
      <div id="banner-4" class="banner w-full"></div>
      <div class="section-content">
        <h2>Wonderwall: A Company-Wide Realtime Analytics Dashboard</h2>
        <div class="flex flex-col-reverse 2xl:flex-row items-center justify-center 2xl:gap-12">
          <div>
            <p>As part of a small team of data scientists and web developers, I had the opportunity to co-lead the development of a custom dashboard application for our company using NodeJS, ExpressJS, TailwindCSS, and Tableau. The dashboard's primary purpose was to provide a single-screen display of several core business metrics that could be easily viewed on televisions throughout our offices.</p>
            <p>To meet this objective, I was responsible for eliciting requirements, designing the application architecture, and implementing the majority of the backend logic. Leveraging my expertise in NodeJS and ExpressJS, I was able to create a scalable and reliable application that could handle the demands of our business. In addition, I incorporated TailwindCSS into the project, enabling us to create a visually stunning dashboard that was both responsive and user-friendly.</p>
            <p>One of the most challenging aspects of the project was integrating Tableau charts into the dashboard. To achieve this, I used an OAuth connection to retrieve pre-prepared charts from Tableau, which were then cycled through the dashboard in a seamless manner. The success of this integration was a key factor in the project's overall success.</p>
            <p>Currently, we are in the process of planning version 2 of the dashboard application. This new version will incorporate a real-time alerts system, driven by both Snowflake and Excel data sources, as well as real-time data pulls from Snowflake and additional key metrics for the dashboard charts. The ongoing development of the dashboard is a testament to the value it provides to our business and its continued relevance in our company's culture.</p>
          </div>
          <!-- <img src='/images/soon.png' class="w-96"/> -->
        </div>
      </div>
    </section>
    
    <section id="total-rewards-calculator" class="flex flex-col p-0 pb-12">
      <div id="banner-5" class="banner w-full"></div>
      <div class="section-content">
        <h2>Total Rewards Calculator: A Real View Into Employee Remuneration</h2>
        <p>[Description coming soon!]</p>
      </div>
    </section>
    
    <section id="glennhs" class="flex flex-col p-0 pb-12">
      <div id="banner-6" class="banner pattern w-full bg-slate-600"></div>
      <div class="section-content">
        <h2>GlennHS: My Site</h2>
        <p>You are here! Please see <NuxtLink to="/blog/hello-world" class="sky">this blog post</NuxtLink> for more details!</p>
      </div>
    </section>

    <section id="aetherslay" class="flex flex-col p-0 pb-12">
      <div id="banner-7" class="banner pattern w-full bg-slate-600"></div>
      <div class="section-content">
        <h2>AetherSlay: A Toolkit for Dungeons &amp; Dragons</h2>
        <div class="flex flex-col-reverse 2xl:flex-row items-center justify-center 2xl:gap-12">
          <div>
            <p>ÆtherSlay is a lightweight toolkit for Dungeons & Dragons 5th Edition for both players and dungeon masters.</p>
            <p>Designed with the DM in mind, built for comfort and speed above all else. I have endeavoured to make this application as simple to use as well as lightweight. The current footprint of the application is 33MB memory usage (correct as of v0.6alpha.2).</p>
            <strong>Current Features:</strong>
            <ul class="list-disc list-inside">
              <li><strong>Randomized Character Creation</strong> - <em>Ability to create player characters using the "Player's Handbook" races & classes</em></li>
              <li><strong>Intelligent Roll Allocation</strong> - <em>Rolled stats are assigned to the character's stats in the commonly accepted "best to worst"</em></li>
              <li><strong>Creature Catalog</strong> - <em>A catalog containing all creatures from the 5th edition Monster Manual</em></li>
              <li><strong>Creature Filtering/Searching</strong> - <em>Ability to search and filter creatures within the catalog</em></li>
              <li><strong>Character Sheet Storage</strong> - <em>Short-term session storage for character sheets</em></li>
              <li><strong>Dice Rolling (Multiple/Single)</strong> - <em>Ability to roll both single and multiple dice simultaneously</em></li>
              <li><strong>Coin Flipping</strong> - <em>A pretty little fake coin flip with animation (well, animation's generous but it works!)</em></li>
            </ul>
          </div>
          <div>
            <div class="swiper hide-on-mobile">
            <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <div class="aetherslay-slide">
                    <img src='/images/swiper/aetherslay/1.png' class="slide-img object-contain bg-slate-800"/>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="aetherslay-slide">
                    <img src='/images/swiper/aetherslay/2.png' class="slide-img object-contain bg-slate-800"/>
                  </div>
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .banner {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 40%;
    min-height: 200px;
    transition: background 0.33s ease-out;
  }

  #banner-1 { background-image: url('/images/parallax.jpg'); min-height: 500px; background-attachment: fixed;}
  #banner-2 { background-image: url('/images/patterns/polygon-1.svg'); }
  #banner-3 { background-image: url('/images/patterns/lpg-3.svg'); }
  #banner-4 { background-image: url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?cs=tinysrgb&w=1920'); background-attachment: scroll;}
  #banner-5 { background-image: url('https://images.pexels.com/photos/6693665/pexels-photo-6693665.jpeg?cs=tinysrgb&w=1920'); background-attachment: scroll;}
  #banner-6 { background-image: url('/images/bannerLogo.png'); background-size: 40%; }
  #banner-7 { background-image: url('/images/aetherslayLogo.png'); background-size: 25%; }

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
    --dimensions: 600px;

    width: var(--dimensions);
    height: var(--dimensions);
  }

  .aetherslay-slide img {
    object-fit: contain;
  }

  @media (max-width:768px) {
    .section-content img {
      display: none;
    }
  }

  @media (max-width:600px) {
    .main-carousel {
      --dimensions: 300px;
      --swiper-pagination-bullet-width: 10px;
      --swiper-pagination-bullet-height: 10px;
    }
  }
</style>