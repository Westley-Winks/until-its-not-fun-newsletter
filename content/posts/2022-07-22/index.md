---
title: "4:29 and Styling"
date: 2022-07-22T19:00:00-07:00
draft: false
toc: true
description: "Westley writes about an awesome new tool to style websites with CSS and Jacob writes about his favorite part of the song Free Bird"
---

---

## Popcorn and A Coke
### *Where Jacob talks movies*

So there I was, sitting on the couch talking to Wely and Lydia about my "Zine" I was going to show for this week's column, then I remembered about the __ in the Zine and decided it's not something I want to put on the internet (if you wanna see it, come see me in person). Then BOOM, Lydia said, why don't you write about how much you love the 4:29 mark on the song Free Bird ... Lydia you're a genius! 

So here is why I love the Four Minutes and Twenty Nine Seconds mark in the song Free Bird.

Free Bird is a song for those who live under rocks, and this song has so much history behind it that actual documentaries have been made about it, so here is just a little point that makes it worth listening to again. 

The band *Lynyrd Skynyrd* would play for so long that the lead singer's (Ronnie Van Zant) voice would go out, so they put the song Free Bird in a strategic place in the set to give the lead singer some time to recuperate. Sometimes it would take longer for Ronnie's voice to bounce back and they would need to play the solo for 20+ minutes, other times it wouldn't take long at all and the length would be the standard size we hear today.

The song has always hit me in this way, for knowing the solo is there because of pain, it's there to boost you up in times of total exhaustion, the solos mean more than just music, it is telling you to go further than your mind is wanting to go. This part of the song means to go further than you thought you could, the limit is only where you decide it is. 

Thank you for your time,

Jacob

---

## The Tech Shelf
### *Where Westley talks about utility classes*

I've been dabbling with web development for a while now and was looking for the best tools for the job. For basic websites, you need two things: HTML and CSS.

HTML (HyperText Markup Language) describes the content of the website and looks like this:
```html
<h1>This is a heading!</h1>
<p>This is some content!</p>
<a href="somewebsite.com">This is a link!</a>
<a href="specialwebsite.com" class="specialLink">This is a special link</a>
<img src="someimage.jpg">
```

Every piece of content, whatever it is, is wrapped in **tags** and might have some **attributes** and **values** (`href` is an attribute with a value of `somewebsite.com`, `class` is an attribute with a value of `specialLink`, and so on) that combine into a single **element**. Now, if you wrote exactly that HTML file and deployed it, it would look awfully boring. It would be a white screen with a black font that says "This is a heading", "This is some content", a blue link to "somewebsite.com", another link, and an image. 

We need some way to style our content and CSS does exactly that. CSS stands for Cascading Style Sheets. It is code written to specifically style HTML by changing colors, fonts, animations, and placement on the page. The page you are reading right now (if you are reading this on the website) has CSS for a unique font and large margins on the left and right of the text. The traditional way to do styling is make a separate CSS file, target individual elements, and write specific style rules for those elements. In our example, let's say you wanted to center the `h1` element and make the font size bigger. You also want the links to be red instead of blue. This would be done like this:

```css
h1 {
    text-align: center;
    font-size: 24px;
}

a {
    color: red;
}
```
Easy! You target the `h1` element and write some style rules. Then you target the `a` elements and apply different rules. As you add more content and rules, you can start to make really complex and beautiful websites. What if we wanted the special link to look different? We can use the `class` attribute to target that link specifically. It would look like this:

```css
a {
    color: red;
}

a.specialLink {
    color: magenta;
    font-size: 36px;
}
```

We can target specific elements by adding a class to that element and updating our CSS accordingly. The first rule targets all `a` tags (aka links) and colors them red. The second rule targets all `a` tags that have a class of `specialLink` and colors them magenta and makes the font size 36 pixels.

Imagine you had a website with thousands of these elements and you need to individually target many of them. You would have to think of a clever class name for each of them and write at *least* three extra lines of CSS for each element. That quickly gets arduous, takes way too long, and is difficult to maintain.

Rather than use the class attribute as a marker to refer to later in your CSS, what if there was a way to use the class attribute functionally? In comes **utility classes** and Tailwind.

Tailwind is a tool that allows you to write your CSS *inside* of your HTML. To do the exact same thing as the previous example, your HTML would look like this:

```html
<h1 class="center font-xl">This is a heading!</h1>
<p>This is some content!</p>
<a class="text-red" href="somewebsite.com">This is a link!</a>
<a class="text-magenta font-4xl" href="specialwebsite.com">This is a special link</a>
<img src="someimage.jpg">
```
To do the same thing, I didn't have to write any CSS and both my content and styling are done in the same file. You can see that I used Tailwind's pre-defined classes in my HTML and Tailwind converts that to CSS. It specifically scans the HTML, sees that the `h1` tag has a class of `center` and `font-xl`. Tailwind knows to map the class attribute `center` to `text-align: center;` and does that for every element.

Rather than trying to find and target individual elements and worry about overriding previously written rules, you can write the specific styling for each element from *within the element itself*. It has really removed a lot of headaches for me and speeds up development. As an initial first test, I completely redid the CSS on my personal website. I converted all the old CSS to Tailwind. It is now so much easier to make small changes to colors, sizing, and placement of anything within my website. For new projects, it makes getting started that much easier as well.

Tailwind is an excellent concept and tool that I will absolutely be using for all of my web development projects in the future.

Good luck in the future,

Westley

---

## What We Like This Week:
- &#x1F4AC; **Video:** {{< link "https://www.youtube.com/watch?v=A1ZQsHVmXG8" 1 >}}Pomplamoose performing French song with synths.{{< /link >}} Nataly Dawn has an amazing voice but it is even more beautiful in French. *-Westley*
- &#x1F3B2; **Game:** I played my first ever game of {{< link "https://dnd.wizards.com/what-is-dnd" 1 >}}Dungeons and Dragons{{< /link >}} recently. My friend John designed a short campaign along with characters and it was so much fun. *-Westley*