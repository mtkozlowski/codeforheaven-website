---
title: "Sticky footer using CSS Flexbox"
date: "2019-10-11"
description: "How to make your footer always keep to the bottom of your page, even when the rest of the content is shorter than view port?"
slug: "posts/flex-sticky-footer"
tags: ["code"]
language: "EN"

---

This is what happened today. I was given a report from Google Search Console, that one of the content pages of our customers fails mobile validation due to its content being wider than viewport width. After short inspection, I found guilty element, which was... `<table>`.

Since we already use bootstrap in our CSS code base, I wanted to solve this by using their responsive table solution. But it didn't work, no matter how hard I tried. After testing the table in excluded environment, I realized problem lays somewhere else among element's parents, or grand-grand-... parents. That's how I found that we had something called _sticky footer_ in our styles.

> _For those of you interested in this old solution, you can follow this [link](https://pixelsvsbytes.com/2011/09/sticky-css-footers-the-flexible-way/) to read more on it. For those of you, who wants to read about modern approach, please, continue reading._

Let me show my code first:

```html
<html>
  <head>
    <style>
      body {
        display: flex;
        flex-direction: column;

        min-height: 100vh;
      }
      main {
        flex-grow: 1;
      }
      header,
      footer {
        flex-shrink: 0;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Header!</h1>
    </header>
    <main>
      <h2>
        This contents spans across whole viewport height.
      </h2>
    </main>
    <footer>
      <h3>
        Footer! Always at the foor of your browser's window.
      </h3>
    </footer>
  </body>
</html>
```

_If you need legacy vendors' prefixes use [Autoprefixer](https://autoprefixer.github.io)_

Body is now a flexible container with vertical (`flex-direction: column;`) flow. I gave it `min-height: 100vh` (minimum height of 100% viewport height), so it'll always be at least this high, but if its content is higher, it will naturally expand vertically. I should not use `justify-content: space-between`, because I want `main` to remain right beneath header.

**And it works in IE11.**

_Cheers!_
