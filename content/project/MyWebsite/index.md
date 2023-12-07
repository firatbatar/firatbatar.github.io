---
title: "Personal Website"
date: 2023-11-26T14:06:59+03:00
coverImage: myWebsiteImage.png
tags: [Web Development, Hugo, Bootstrap, GitHub Pages]
keywords: [Web Development, Hugo, Bootstrap, GitHub Pages, Personal Website, Fırat Batar, Fırat Batar's Personal Website]
summary: Simple static personal website built with Hugo and hosted on GitHub Pages.
---

<!-- Custom styling for this content -->
<style>
a {
    text-decoration: none;
}
</style>

## Building a Personal Website
As a matter of fact, this website has been built by me almost from scratch (well I used a framework!). For a time I've wanted a website, so eventually I've said why not make one yourself.  

If you want to check out the code, the source code and the content is totally public and it's on my [GitHub](https://github.com/firatbatar/firatbatar.github.io).

<br/>

### How?
I've been into web development for a time now, and I've been playing around with [Django](https://www.djangoproject.com/) actually. However, learning Django and building a functional website using it takes time, and also there is the issue of hosting a Django website.  

I needed a way to build a website quickly and easily, and I needed to able to host it cheaply or even better, for free.  

When you research about building a basic website and hosting it for cheap, you will probably run into [GitHub Pages](https://pages.github.com/). I've decided to give it a try, but I didn't want to build a website totally from ground writing HTML and CSS, which I hate. Instead I decided to go with a static website generator.

<br/>

### Why Hugo?
While researching I've run into other static website generators like [Jekyll](https://jekyllrb.com/), but I've settled with [Hugo](https://gohugo.io/). There is no actual reason for this, I just liked it more and I thought that I could learn it faster.

<br/>

### What else I've used?
I am not good with making things pretty and don't like working with CSS, but also I didn't want to use a theme. So I've used [Bootstrap](https://getbootstrap.com/) to make things easier for me. I've also used [Font Awesome](https://fontawesome.com/) for the icons.  

Even though there is not much JavaScript going on the website, I've used [jQuery](https://jquery.com/) for the few things that I needed.

<br/>

### The process?
For a very basic website I wanted to have an about and projects sections. With Hugo archetypes I've created a template for the projects and a general about markdown then addedd them into the index page as partials.  

I've wanted projects section to be a multicarded carousel, so I've used Bootstrap cards and made the carousel with jQuery, since Bootstrap's carousel doesn't support having mulitple cards at the same time that well.  

For navigation purposes I've added basic navbar with single links to Hugo's corresponding sections. For the navbar itself I've used Bootstrap's navbar and for the links I've used Hugo's menu system.  

I've also added a footer with links to my GitHub and LinkedIn profiles and a link to Hugo's website.  

Using Bootstrap's color mode classes I've added a dark mode toggle button to the navbar.  

Finally I've fixed some issues with responsiveness and pushed the website to GitHub and hosted it.  