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
    <header id="parallax-1" class="relative w-full h-full flex items-center justify-center parallax">
      <div class="absolute w-full h-full top-0 left-0 backdrop-blur-sm"></div>
      <div class="absolute z-20 top-0 left-0 w-full h-full bg-slate-600 bg-opacity-30 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="slide-in-left backdrop-blur-md bg-gray-900 bg-opacity-50 rounded-r-lg w-full px-4 lg:px-20 py-4 lg:py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-lg lg:max-w-xl xl:max-w-3xl mt-32 md:mt-0">
          <h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Portfolio.</h1>
          <span class="text-base lg:text-lg italic font-semibold">All work here is my own unless otherwise specified.</span>
        </div>
      </div>
    </header>

    <section>
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <NuxtLink to="#lgim-epc" class="slide-link">
              <img src='https://www.portfolio-institutional.co.uk/wp-content/uploads/2019/05/Untitled-design-19.png' alt='' class="slide-img" />
              <span class="slide-text">Legal & General Investment Management's Preference Centre.</span>
            </NuxtLink>
          </div>
          <div class="swiper-slide">
            <NuxtLink to="#seg-content-hub" class="slide-link">
              <img src='https://www.supportingeducation.com/wp-content/uploads/2021/07/Supporting-Education-Group-Logo-2021.png' alt='' class="slide-img" />
              <span class="slide-text">Supporting Education Group's WordPress Content Hub.</span>
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
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </section>

    <section id="lgim-epc" class="flex flex-col p-0 pb-12">
      <div id="parallax-2" class="parallax w-full"></div>
      <div class="section-content">
        <h2>Legal & General Investment Management's Email Preference Centre</h2>
        <p>A year ago I worked on a complex technical project for Legal and General's Investment Management section, creating an email preference center solution that integrated three different Pardot Business Units together. My main objective was to create a user-friendly experience for customers to manage their email preferences in four different languages, including automatic redirection for unknown users.</p>
        <p>To achieve this, I developed a solution that ran off of a 4-layer-deep JSON object that stored user preferences, investor profiles, language, and country data which was used to mutate the DOM of the page and present each user with a bespoke experience. The JSON also had the additional effect of gating content users shouldn't be able to access from them. The solution was designed to be highly customizable and scalable, ensuring that the company's email marketing efforts were targeted and effective.</p>
        <p>Throughout the six-month development process, I encountered and overcame many technical challenges, such as changing requirements, increase in scope and ensuring that the project worked smoothly across different devices and browsers. Despite these challenges, I was able to successfully deliver a comprehensive email preference center solution that met the company's requirements and exceeded their expectations.</p>
        <p>As part of my work on a complex email preference center solution for a fortune 500 company, I developed a user-friendly NodeJS app that automated the transformation of an Excel file with translations, investor profiles, and preferences into a 4-layer-deep JSON object. The app's primary goal was to make the process of creating the JSON object easier and more efficient, streamlining the workflow for the client.</p>
        <p>Through my careful planning and attention to detail, I was able to create an app that successfully bridged the gap between human-readable Excel files and machine-readable JSON objects. The app's flexibility allowed for easy updates to the Excel file, ensuring that the JSON object remained up-to-date and accurate. Overall, my work on the NodeJS app was an essential component of the email preference center solution, providing the client with a reliable and user-friendly tool for data transformation and automation.</p>
        <p>While the project is no longer functional due to changes made by the company, I am proud of the work I accomplished and the technical skills I developed during the project. I believe that my experience working on such a complex and challenging project for such a high-profile client has equipped me with new skills needed to excel in future technical projects.</p>
      </div>
    </section>

    <section id="seg-content-hub" class="flex flex-col p-0 pb-12">
      <div id="parallax-3" class="parallax w-full"></div>
      <div class="section-content">
        <h2>Supporting Education Group's WordPress Content Hub.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae ipsa aliquid, at voluptatibus deleniti totam, rem adipisci maiores quia consectetur enim et ut, sed ipsum perspiciatis! Provident odit nisi tenetur cumque velit adipisci, rem facere quo eum, at minima cum, necessitatibus modi mollitia vero veniam blanditiis atque officia consequuntur?</p>
      </div>
    </section>

    <section id="wonderwall" class="flex flex-col p-0 pb-12">
      <div id="parallax-4" class="parallax w-full"></div>
      <div class="section-content">
        <h2>Wonderwall: A Company-Wide Realtime Analytics Dashboard</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae ipsa aliquid, at voluptatibus deleniti totam, rem adipisci maiores quia consectetur enim et ut, sed ipsum perspiciatis! Provident odit nisi tenetur cumque velit adipisci, rem facere quo eum, at minima cum, necessitatibus modi mollitia vero veniam blanditiis atque officia consequuntur?</p>
      </div>
    </section>
    
    <section id="total-rewards-calculator" class="flex flex-col p-0 pb-12">
      <div id="parallax-5" class="parallax w-full"></div>
      <div class="section-content">
        <h2>Total Rewards Calculator: A Real View Into Employee Remuneration</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae ipsa aliquid, at voluptatibus deleniti totam, rem adipisci maiores quia consectetur enim et ut, sed ipsum perspiciatis! Provident odit nisi tenetur cumque velit adipisci, rem facere quo eum, at minima cum, necessitatibus modi mollitia vero veniam blanditiis atque officia consequuntur?</p>
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
    min-height: 300px;
    transition: background 0.33s ease-out;
  }

  #parallax-1 { background-image: url('/images/coding.jpg'); }
  #parallax-2 { background-image: url('https://placekitten.com/2000/500'); background-attachment: scroll;}
  #parallax-3 { background-image: url('https://placekitten.com/2000/506'); background-attachment: scroll;}
  #parallax-4 { background-image: url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-attachment: scroll;}
  #parallax-5 { background-image: url('https://images.pexels.com/photos/6693665/pexels-photo-6693665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); background-attachment: scroll;}

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