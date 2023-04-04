---
title: 'Hello World! My First Blog Post'
slug: 'hello-world'
tags: [ 'nuxt/vue', 'coding', 'learning', 'favourites' ]
excerpt: "This was the first blog post I placed on my site! It was primarily used as a test but also contains some thoughts on my site's composition."
created: '2023-03-16'
updated: '2023-04-04'
image: '/images/parallax.jpg'
---
<h1 class="text-3xl py-4 font-bold">Welcome to my Blog!</h1>
<p>This blog is going to be somewhere for me to post about topics I care about, rant about random things and generally express myself and scream pointlessly into this void we call the internet.</p>

<h2 class="text-lg pt-4 pb-2 font-bold">My Site's Stack.</h2>

<p>I decided to go with Nuxt, Vue, Nuxt Content and Tailwind for my site. It's a fairly simple stack but there's a lot of power in simplicity. Nuxt/Vue is my go-to framework for new web projects. It's so simple and so powerful. I'm aware that using Nuxt for small single page projects and apps probably incurs a significant processing overhead but I'm fine with that. Nuxt Content was recommended to me by a fantastic, talented coworker of mine, <a href="https://github.com/cguttweb/" target="_blank" class="text-blue-400 visited:text-purple-600">Chloe Guttridge.</a> After playing around with it for a bit I found that, other than the small issue of filtering by tags in my post metadata, it was perfect. Simple and elegant, exactly what I like in my stack.</p>
<p>Speaking of simple and elegant, that brings me nicely onto my last stack component; TailwindCSS. Tailwind is an absolute staple for me now. Yes, I know the HTML you write with it looks horrific. But once you get past that, it's incredible. I love the modifier syntax (<code>hover:</code>, <code>md:</code>, etc) and the power of tree-shaking means I don't have to worry about deploying awful, huge bundles!</p>

<h2 class="text-lg pt-4 pb-2 font-bold">Lessons Learned.</h2>

<p>I think if I were to start this project again from scratch there are a couple of things I'd do differently, both to do with CSS and the styling of the site. I think firstly I'd choose a breakpointing system and stick with it. Too many times in this project I decided "ooh that breaks at 687.21px, better chuck a breakpoint in!" I now know that's just atrocious development, it's messy, ugly, unmanageable and a huge headache. Tailwind comes with custom breakpoints built in (I swear this post isn't sponsored!) which makes custom breakpointing a breeze. The second thing I'd do differently is to make the mobile site first and expand outwards. It's so much easier to add than to take away and Tailwind's structure lends itself perfectly to this.</p>