<script setup>
  const flipCard = (ev) => ev.target.tagName != 'A' ? ev.target.closest('.flip-card').classList.toggle('flipped') : false

  const hasHover = ref(true);

  onMounted(() => {
    if(window.matchMedia("(any-hover: none)").matches) hasHover.value = false
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
      <div class="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-20 flex flex-col items-baseline justify-center">
        <div ref="heroContent" class="slide-in-left backdrop-blur-md bg-gray-900 bg-opacity-50 rounded-r-lg w-full px-4 lg:px-20 py-4 lg:py-10 flex flex-col justify-center items-baseline gap-y-6 max-w-lg lg:max-w-xl xl:max-w-3xl mt-32 md:mt-0">
          <h1 class="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Digital CV.</h1>
          <span class="text-base lg:text-lg italic font-semibold">In a hurry? Need a different format? 
            <a href="/files/cv.pdf" target="_blank" class="sky">Download a .pdf copy of my CV here <font-awesome-icon :icon="['fas', 'file-arrow-down']" /></a>
          </span>
        </div>
      </div>
    </header>
    
    <section id="details" class="py-8 px-4 md:px-6 lg:px-12 xl:px-40">
      <div id="content" class="flex flex-col items-center md:items-end h-min">
        <h2 class="text-lg md:text-xl xl:text-2xl font-bold text-right">Glenn Hamilton-Smith BSc</h2>
        <h3 class="text-base md:text-lg xl:text-xl text-right">
          <strong>Full Stack Developer</strong>
          at
          <a target="_blank" href="https://www.solidatus.com" class="sky">Solidatus</a>
        </h3>
        <span class="italic text-lg"><em class="font-bold">Email:</em> glenniumhs@gmail.com</span>
        <span class="italic text-lg"><em class="font-bold">Mobile:</em> +44 7572 354 460</span>
        <span class="italic text-lg"><a href="https://github.com/glennhs" target="_blank" class="sky"><em class="font-bold">Github:</em> glennhs</a></span>
        <span class="italic text-lg"><a href="https://linkedin.com/in/glennhs" target="_blank" class="sky"><em class="font-bold">LinkedIn:</em> glennhs</a></span>
      </div>
      <p id="statement" class="text-justify last-right mt-4">Passionate and dedicated team player with proficiency in frontend frameworks such as Vue/Nuxt and React/Next, as well as PHP and Laravel development. Experienced in WordPress and Git, and skilled in various Front End Web Development technologies. A fast learner with a deep passion for self-improvement and continuous learning in all things web development. Graduated with honours in Computer Science from the University of Portsmouth, and was awarded Resident Assistant of the Year 2017-18 as well as serving as Chair of the Staff Student Council Committee. With a focus on collaboration and innovation, I bring a strong work ethic and a drive to help others succeed.</p>
      <img src="/images/me-square/5.png" alt="Side-on portrait photo of my face, mouth slightly open smiling wearing glasses with brown hair in a light blue polo shirt" class="aspect-square w-64 md:w-96" />
    </section>

    <section class="flex flex-col p-0 pb-12">
      <div id="static-sol-banner" class="w-full"></div>
      <div class="flex flex-col items-center py-8 px-4 md:px-6 lg:px-12 xl:px-40">
        <h2 class="text-lg md:text-xl xl:text-4xl font-bold pt-4 mb-0">Employment</h2>
        <h3 class="text-base md:text-lg xl:text-2xl font-semibold"><a class="sky" href="https://www.solidatus.com">Solidatus</a> ~ January 2026 - Present</h3>
        <div class="flex flex-col w-full mt-4">
          <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Company Description</h4>
          <p class="text-justify">
            At Solidatus I... I've actually not been here long so I'll update here as I go!
          </p>
          <!-- <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Role Description</h4>
          <ul class="list-disc list-inside">
            <li>Use Agile/Scrum to work incrementally and continuously deliver value through features, fixes and maintenance</li>
            <li>Work using a Kanban board and scrum ceremonies to determine which tickets are highest value and work on them</li>
            <li>Work in a supportive, empathetic and cross-functional environment where learning is encouraged and self-growth is valued</li>
            <li>Work with people who have a variety of different skills as part of a larger team whilst maintaining the benefits of small-team scrum in my team of FE developers</li>
            <li>Get to see the entire development process including BE, FE, UX/UI design, Testing, User Feedback and Project Management via daily ceremonies</li>
            <li>I'll no doubt add more as I spend longer in my role!</li>
          </ul> -->
        </div>
      </div>
    </section>

    <section class="flex flex-col p-0 pb-12">
      <div id="static-vd-banner" class="w-full"></div>
      <div class="flex flex-col items-center py-8 px-4 md:px-6 lg:px-12 xl:px-40">
        <h3 class="text-base md:text-lg xl:text-2xl font-semibold"><a class="sky" href="https://www.viabledata.co.uk">Viable Data</a> ~ Nov 2023 to Aug 2025</h3>
        <div class="flex flex-col w-full mt-4">
          <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Company Description</h4>
          <p class="text-justify">
            Viable Data created web-based software for clients using modern technologies to deliver value and cater for business needs. They used Agile/Scrum to incrementally deliver value to our customers and had excellent feedback from many satisfied clients nationally, mostly working with the UK government and surrounding sectors.
          </p>
          <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Role Description</h4>
          <ul class="list-disc list-inside">
            <li>Use Agile/Scrum to work incrementally and continuously deliver value through features, fixes and maintenance</li>
            <li>Work using a Kanban board and scrum ceremonies to determine which tickets are highest value and work on them</li>
            <li>Work in a supportive, empathetic and cross-functional environment where learning is encouraged and self-growth is valued</li>
            <li>Work with people who have a variety of different skills as part of a larger team whilst maintaining the benefits of small-team scrum in my team of FE developers</li>
            <li>Get to see the entire development process including BE, FE, UX/UI design, Testing, User Feedback and Project Management via daily ceremonies</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="flex flex-col p-0 pb-12">
      <div id="parallax-3" class="parallax w-full"></div>
      <div class="flex flex-col items-center py-8 px-4 md:px-6 lg:px-12 xl:px-40">
        <h3 class="text-base md:text-lg xl:text-2xl font-semibold"><a class="sky" href="https://clever-touch.com">Clevertouch Marketing</a> ~ Mar 2021 to Sept 2023</h3>
        <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Notable Achievements</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch justify-around gap-4 md:gap-6 lg:gap-12">
          <div class="flip-card" @click="(ev) => flipCard(ev)">
            <div class="relative w-full h-full transition flip-card-inner">
              <div class="cv-card w-full h-full flip-front-face">
                <font-awesome-icon :icon="['fas', 'gear']" class="cv-card-icon"/>
                <span class="z-10 text-base sm:text-lg lg:text-xl xl:text-2xl text-center">Investment Management EPC</span>
                <span class="click-here flex items-center gap-x-2 italic text-sm">{{ hasHover ? 'Click' : 'Touch' }} Here <font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
              </div>
              <div class="cv-card p-4 w-full h-full flip-back-face">
                <p class="long-content">A fortune 500 client had three separate Pardot instances which all needed to be interconnected via a complex multi-instance, multi-language preference center.</p>
                <p class="short-content">A client needed an EPC that linked their 3 Pardot instances in 4 different languages. I created a dynamic, future-proofed solution used by thousands of people a month</p>
                <a href='/portfolio#client-1-epc' class="italic sky">Read more &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div class="flip-card" @click="(ev) => flipCard(ev)">
            <div class="relative w-full h-full transition flip-card-inner">
              <div class="cv-card w-full h-full flip-front-face">
                <font-awesome-icon :icon="['fab', 'wordpress']" class="cv-card-icon" />
                <span class="z-10 text-base sm:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center">WordPress Content Hub</span>
                <span class="click-here flex items-center gap-x-2 italic text-sm">{{ hasHover ? 'Click' : 'Touch' }} Here <font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
              </div>
              <div class="cv-card p-4 w-full h-full flip-back-face">
                <p class="long-content">An education-sector client approached us and asked for a WordPress solution to aggregate all the posts from their associated sites into their main site. I was tasked with creating a WordPress template that retrieved the posts and used the WP_Query class to allow users to filter/search posts.</p>
                <p class="short-content">A client needed a WordPress template & plugin for aggregating the blog posts from their partner sites into one place. I developed the template which involved front/back end coding using PHP and WP code</p>
                <a href="/portfolio#client-2-content-hub" class="italic sky">Read more &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div class="flip-card" @click="(ev) => flipCard(ev)">
            <div class="relative w-full h-full transition flip-card-inner">
              <div class="cv-card w-full h-full flip-front-face">
                <font-awesome-icon :icon="['fas', 'fa-chart-pie']" class="cv-card-icon" />
                <span class="z-10 text-base sm:text-lg lg:text-xl xl:text-2xl text-center">Wonderwall</span>
                <span class="click-here flex items-center gap-x-2 italic text-sm">{{ hasHover ? 'Click' : 'Touch' }} Here <font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
              </div>
              <div class="cv-card p-4 w-full h-full flip-back-face">
                <p class="long-content">Our CEO had envisioned a dashboard for use across the business that contained high-level metrics relevant to all departments across the entire company. I created a NodeJS application to show these visualisations using realtime data pulled from Tableau authenticated using OAuth.</p>
                <p class="short-content">Our CEO wanted a company-wide dashboard to show top-level metrics. I created a NodeJS app to show Tableau visualizations in realtime, authenticated using OAuth & JWT</p>
                <a href="/portfolio#wonderwall" class="italic sky">Read more &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div class="flip-card" @click="(ev) => flipCard(ev)">
            <div class="relative w-full h-full transition flip-card-inner">
              <div class="cv-card w-full h-full flip-front-face">
                <font-awesome-icon :icon="['fas', 'language']" class="cv-card-icon" />
                <span class="z-10 text-base sm:text-lg lg:text-xl xl:text-2xl text-center">Dynamic Translations</span>
                <span class="click-here flex items-center gap-x-2 italic text-sm">{{ hasHover ? 'Click' : 'Touch' }} Here <font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
              </div>
              <div class="cv-card p-4 w-full h-full flip-back-face">
                <p class="long-content">I noticed a trend of our clients requesting pages and preference centers in various languages, more so than usual. I created a NodeJS script that takes an HTML file and an Excel document with translations and turns it into either a folder of translated pages or a page that contains a dynamic translation dropdown.</p>
                <p class="short-content">I identified a business need for a client-friendly way of dynamically translating content for websites. I created a NodeJS script that turns an Excel spreadsheet into a JSON config that's read by an HTML doc that the script modifies</p>
                <a href="/portfolio#dynamic-translations" class="italic sky">Read more &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full mt-4">
          <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Company Description</h4>
          <p class="text-justify">
            Clevertouch Marketing is a <strong>Marketing Technology Consultancy</strong>. Guided by their 3 core principles, to 'Simplify, Connect, and Inform', Clevertouch has been helping marketers across the globe love marketing technology since 2009. They have had over 500 clients across the globe and specialise in Marketo, Pardot, Salesforce, Marketing Cloud and more. They also have SaaS offerings including Momentum, Eventum and the Pardot Data Extractor. Momentum offers simplified, streamlined and consistent email development using user-defined templates with a built-in approval flow and, as of recently, version control. Eventum is an event management software for managing events of all sizes and tracking attendees. The Pardot Data Extractor allows for the creation and automation of bespoke data pulls from Pardot.
          </p>
          <h4 class="text-base md:text-lg xl:text-xl py-4 font-bold">Role Description</h4>
          <ul class="list-disc list-inside">
            <li>Developing editable landing page templates and email templates for international clients with user experience and reusability in mind</li>
            <li>Attending client-facing meetings and being a subject matter expert on Marketo, Pardot, Salesforce and Marketing Cloud</li>
            <li>Creating unique solutions to problems within the constraints of each individual MA platform and ensuring those solutions are robust and future-proof</li>
            <li>Scoping out level of effort for various tech tasks to ensure that people are given sufficient time to complete a task but also we aren't over-charging clients</li>
            <li>Creating complex solutions to niche problems by engineering unique solutions utilising whatever tool is best for that particular job</li>
            <li>Furthering myself through workplace-enhanced learning and pushing myself to learn the tools necessary to excel at my job</li>
            <li>Self-taught languages/frameworks necessary for new projects to ensure I can competently engineer whatever comes my way confidently</li>
            <li>Became qualified in Marketo (Adobe Certified Expert), Pardot (Pardot Specialist) and Marketing Cloud (Email Specialist)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="flex flex-col p-0 pb-12">
      <div id="parallax-2" class="parallax w-full"></div>
      <div class="flex flex-col items-center py-8 px-4 md:px-12 lg:px-40 2xl:px-20">
        <h2 class="text-lg md:text-xl xl:text-4xl font-bold pt-4 mb-0">Qualifications</h2>
        <h3 class="text-base md:text-lg xl:text-2xl font-semibold">University of Portsmouth 2017-2021</h3>
        <span class="text-base md:text-lg xl:text-2xl">BSc Hons. Computer Science</span>
        <h4 class="text-base md:text-lg xl:text-xl py-4">Notable Achievements</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-stretch justify-around gap-4 md:gap-8 px-8 md:px-20 lg:px-0">
          <div class="cv-card uni-card">
            <img class="uni-card-bg" src="/images/sscc-meeting.jpg">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" class="text-6xl z-10 hidden md:block" />
            <span class="z-10 text-sm md:text-base">As Chair of the Staff Student Council Committee and Student Representative, demonstrated strong communication skills and the ability to engage with diverse groups of individuals, resulting in successful initiatives that positively impacted the student body.</span>
          </div>
          <div class="cv-card uni-card">
            <img class="uni-card-bg" src="/images/agile.png" />
            <font-awesome-icon :icon="['fas', 'person-chalkboard']" class="text-6xl z-10" />
            <span class="z-10 text-sm md:text-base">Led an Intermediate Software Engineering group as Scrum Master, championing Agile methodologies and Scrum/Kanban frameworks to ensure timely delivery of high-quality products.</span>
          </div>
          <div class="cv-card uni-card">
            <img class="uni-card-bg" src="/images/learning-code.jpg">
            <font-awesome-icon :icon="['fas', 'book']" class="text-6xl z-10" />
            <span class="z-10 text-sm md:text-base">Rapidly acquired proficiency in new programming languages, libraries, and frameworks, including Python and Java, demonstrating a strong ability to learn and adapt quickly.</span>
          </div>
          <div class="cv-card uni-card" id="reslife">
            <img class="uni-card-bg" src="/images/ResLife.png">
            <font-awesome-icon :icon="['fas', 'trophy']" class="text-6xl z-10" />
            <span class="z-10 text-sm md:text-base">Awarded Resident Assistant of the Year 2017/18 for commitment to peer support, mental health first aid knowledge, and going above and beyond to care for those around me.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col p-0 pb-12">
      <div id="parallax-4" class="parallax w-full"></div>
      <h2 class="text-lg md:text-xl xl:text-4xl font-bold pt-4 mb-0 w-full text-center">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 px-4 md:px-6 lg:px-12 xl:px-40">
        <div class="flex flex-col">
          <h3 class="text-base md:text-lg xl:text-2xl font-semibold pb-4">Technical Skills</h3>
          <!-- <h4 class="text-base md:text-lg xl:text-xl py-4">Top Skills</h4> -->
          <ul class="flex flex-col gap-y-4">
            <li class="cv-skill"><strong>Nuxt 3 & Vue 3</strong> - I've been learning & using Vue for well over a year now and using Nuxt for almost as long. They're very likely my 2 favourite technologies I've ever used, so much power and simplicity combined</li>
            <li class="cv-skill"><strong>NodeJS</strong> - I started using NodeJS about 4 years ago when a coworker at the time introduced me to it. It completely reignited my (at the time) dwindling passion for web development and I've used dozens of packages including ExpressJS, Sass, Puppeteer, Cheerio & Axios</li>
            <li class="cv-skill"><strong>PHP</strong> - I've worked with PHP on and off but only recently really sunk my teeth into it. I've now used PHP to craft a bespoke, complex WordPress page template that combined both back-end and front-end to create a searchable, filterable page</li>
            <li class="cv-skill"><strong>Vanilla Web Technologies</strong> - I've been coding for over a decade now and professionally for over 4 years. I began as a hobbyist and student at secondary school and decided I liked it. I went on to craft a suite of deciphering tools in JS at college for the national cipher challenge. At university I found out about NodeJS on my placement year and loved it</li>
            <li class="cv-skill"><strong>Problem Identifying & Solving</strong> - I have both a skill and passion for identifying weak areas and problems within a business and finding ways to alleviate pain points and automate tedious/repetitive tasks. I created an automation script for the morning processes at Be Wiser, turning an hour long morning process into a 5 minute one. I also crafted several internal solutions at Clevertouch</li>
            <li class="cv-skill"><strong>Quick Learning</strong> - I have a track record of picking up new languages, tools and frameworks blazingly fast. I find I learn best on the job and have picked up PHP, WordPress, Python and Visual Basic as and when required of me in order to fulfil various needs in previous roles</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h3 class="text-base md:text-lg xl:text-2xl font-semibold pb-4">Soft/Interpersonal Skills</h3>
          <!-- <h4 class="text-base md:text-lg xl:text-xl py-4">Top Skills</h4> -->
          <ul class="flex flex-col gap-y-4">
            <li class="cv-skill"><strong>Team-Oriented</strong> - I enjoy working within a team, I find I work well filling gaps in knowledge/ability and enjoy helping out others with their work</li>
            <li class="cv-skill"><strong>Empathetic</strong> - I believe that being kind costs nothing and being understanding and empathetic can make a world of difference, especially to someone going through a tough time, therefore I make it my business to be as understanding as I can</li>
            <li class="cv-skill"><strong>Mental Health Work Background</strong> - I have previous experience working in the mental health sector, spending 2 years working as a resident assistant and even winning resident assistant of the year 2017/18</li>
            <li class="cv-skill"><strong>Passionate Teacher</strong> - Ran several internal "Tech Huddles" on various topics in order to try and teach other techies about different useful technologies, concepts and showcase internal solutions I'd built to help out</li>
            <li class="cv-skill"><strong>Proven Mediator</strong> - I have experience helping individuals and groups find common ground and resolutions that benefit both parties, both in my Resident Assistant role and when working with clients at Clevertouch</li>
            <li class="cv-skill"><strong>Intentionally Approachable</strong> - A big part of who I am is that I want my coworkers to see me as approachable, friendly, dependable and knowledgeable. I make sure to let people know I'm here to help and try my hardest to be as approachable and friendly as I can</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  @media (hover: hover) {
    .flip-card:hover .flip-card-inner {
      transform: rotateY(25deg);
      transition: box-shadow 0.25s linear, transform 0.8s ease-out;
      box-shadow: #fff 0 0 16px;
    }
  }

  .flip-card {
    perspective: 1000px;
  }

  .flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.8s ease-out;
  }

  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
    box-shadow: none!important;
  }

  .flip-front-face, .flip-back-face {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-back-face {
    transform: rotateY(180deg);
  }

  .click-here {
    transition: all 0.1s linear;
  }

  .flip-front-face:hover .click-here {
    padding-left: 10px!important;
  }

  .uni-card:hover {
    justify-content: flex-end;
    color: #cbd5e1;
  }

  .uni-card:hover .text-6xl { opacity: 0.5; }

  .uni-card:hover span {
    display: none;
  }

  .uni-card img {
    transition: opacity 1s ease-out;
    opacity: 0;
  }

  .uni-card:hover img {
    opacity: 1;
  }

  .parallax:not(header) {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.33s ease-out;
    min-height: 300px;
    background-position: center;
  }

  #parallax-1 {
    background-image: url('/images/japan/fuji.jpg');
    background-position: unset;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% min(-560px, -32vw);
  }

  #parallax-2 {
    background-image: url('/images/UoP.jpg');
  }

  #parallax-3 {
    background-image: url('/images/blog/ct-escape-room.png');
  }

  #parallax-4 {
    background-image: url('/images/coding.jpg');
    filter: blur(3px);
  }
  
  #static-vd-banner {
    background-color: #3f51b5;
    background-image: url('/images/viable-logo.png');
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  #static-sol-banner {
    background-color: #f4f4f4;
    background-image: url('/images/solidatus-Banner.png');
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
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
      background-attachment: scroll!important;
      background-size: cover;
    }

    #parallax-1 {
      background-position: center 80%;
    }
  }
</style>