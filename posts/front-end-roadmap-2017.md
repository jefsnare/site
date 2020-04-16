---
title: Front-end roadmap 2017 — No jQuery please
description: More control of our dependencies in projects and basic JavaScript level
date: 2017-03-13
tags:
  - roadmap
  - optimization
layout: layouts/post.njk
---

In one of our latest Roadmap meetings with the Front-end developers at Aviva Solutions we decided we would like to challenge and discuss using jQuery in new projects. We want to have less dependencies, faster Time To First Byte (TTFB) and more effectively using our development stack with Webpack, ES6, Sass and Browsersync.

But wait.. ‘no jQuery please’?! Yes, we want to reduce the usage of jQuery this year. A lot of frameworks, tools and plugins have jQuery as dependency so we have to slowly phase out jQuery.
As a Front-end Architect I want more control of our dependencies in projects and basic JavaScript level. And what I don’t like is that a lot of Front-end developers are stating the following to justify the usage of jQuery:

> jQuery is needed for this project because the syntax and abstraction layer is useful for cross-browser support

Yes, you’re right. But you can work without jQuery. You should train yourself to make sure you always know which code in jQuery is used. It’s a common mistake - made by every front-end developer — to use a library without reading, research and reviewing this library. It’s very important to know what you’re using. Like: I‘ve bought a car. I’ve seen it, sat in it, but didn’t look under the hood. But when I want to start and drive the car, it turnes out a few wires are missing. Oops ..

<figure>
  <img src="/img/frontend-roadmap-1.jpeg" alt="But wait.. ‘no jQuery please’?!"/>
  <figcaption>Photo by: Pexel</figcaption>
</figure>

Basic JavaScript is fundamental. I trained my co-workers to use simple and basic JavaScript with string and DOM manipulations, without using jQuery. It turned out that a lot of people don’t know about the widely supported `document.querySelector` and `document.querySelectorAll`. For example `$(document).find('.element');` can be achieved by `document.querySelector('.element');`.
Traversing the DOM is possible without jQuery. Complicated DOM travering is difficult with only vanilla JS, so you may want to use Sizzle. This engine is used in jQuery, but it’s possible to use this in your project without jQuery (https://github.com/jquery/sizzle#sizzle).

Also for using vanilla JavaScript events it isn’t necessary to use the abstraction of jQuery. A simple event listener on an element can achieved with: `element.addEventListener(eventName, eventHandler);` or replacing the element’s HTML `element.innerHTML = string;`. The jQuery source is also using innerHTML (https://j11y.io/jquery/#v=git&fn=jQuery.fn.html).

> Less dependencies, more handcrafted code

The reason I want to phase out jQuery lies in the fact that more and more ECMAScript functions are supported in browsers. It’s possible to use more native browser and ECMAScript tooling these days. 

<figure>
  <img src="/img/frontend-roadmap-2.jpeg" alt="Less dependencies, more handcrafted code" />
  <figcaption>Photo by: Pexel</figcaption>
</figure>

Together with my colleagues I want to achieve a higher JavaScript coding level, by using more ECMAScript and native JavaScript from the DOM. ES6 and ES7 are the future. And more techniques like React.js and Vue.js are coming available for Front-end development. We’re creating more handcrafted JavaScript, because we are aware of what we are programming, also we’ve leveled-up the knowledge in our organization. By using less dependencies it’s easier to maintain the codebase and makes it a readable, scalable and easy to use codebase.
