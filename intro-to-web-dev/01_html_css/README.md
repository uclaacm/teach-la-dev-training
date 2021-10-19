# HTML AND CSS, The Building Blocks Of The Web

What makes up the contents of a website? In this session, we'll cover the building blocks of websites and get started on how to make our own websites or modify existing ones!

A lot of this content is based off/ covered inside of the [learning lab crash course from 2020!](https://github.com/uclaacm/learning-lab-crash-course-su20/tree/main/01-intro-html-css)

## Table of Contents

- [HTML](#html)
  - [What is HTML?](#what-is-html)
  - [Inspect Element](#inspect-element)
  - [Making HTML Documents](#making-html-documents)
  - [index.html](#indexhtml)
  - [The Structure of HTML Documents](#the-structure-of-html-documents)
- [Tags](#tags)
  - [The Head](#the-head)
  - [The Body](#the-body)
- [Tags Galore](#tags-galore)
  - [Comments](#comments)
  - [Headers](#headers)
  - [Paragraphs](#paragraphs)
  - [Links](#links)
  - [Spans](#spans)
  - [Divs](#divs)
  - [Lists](#lists)
  - [Anchors And Links](#anchors-and-links)
  - [Properties](#properties)
  - [Images](#images)
  - [Class](#class)
  - [ID](#id)
- [Styling with CSS](#styling-with-css)
  - [Reading, writing CSS](#reading-writing-css)
    - [Selectors](#selectors)
    - [Properties and values](#properties-and-values)
    - [font-size](#font-size)
    - [font-weight](#font-weight)
    - [color](#color)
    - [background-color](#background-color)
    - [border](#border)
    - [Writing some CSS for our website](#writing-some-css-for-our-website)
  - [**Cascading** Style Sheets](#cascading-style-sheets)
  - [Linking CSS files to our webpage](#linking-css-files-to-our-webpage)
  - [Basic CSS: Summary](#basic-css-summary)
- [Beginning Project: Your Own Portfolio Page](#beginning-project-your-own-portfolio-page)
- [Reference](#reference)

## HTML

### What is HTML?

Even if you don't know what HTML is, you can see it on all webpages by using inspect element. Let's take a look at [TeachLA's website](https://teachla.uclaacm.com)!

### Inspect Element

By pressing Inspect Element, you can see the structure of the page that you are viewing, in something called the **HTML DOM** (we'll cover that in a bit!)

Within Inspect Element, you can also change things that you see on the screen, by hovering over the element that you want to change. Let's try changing the text!

### Making HTML Documents

When you look at the HTML of our static site however, it looks really complex with a lot of different parts. Let's start from scratch to see how everything's set up!

To start, just open up a new file in VS.Code, call it `index.html` and type something in!

### index.html?

The ending of our file, .HTML, stands for hypertext markup language, which is meant to be a nifty and easy descriptor language to describe to your web browser what you want to show onto the page. By putting in
.html, we tell our computer that this is an HTML document and should be processed like so!

After refreshing the page and seeing things pop up on your screen, you can inspect element again to see the structure of the document.

However, you might notice that there's a lot of extra stuff that got auto-added, what are those things?

```
<html>
<head></head>
<body>My Content</body>
</html>
```

### The Structure of HTML Documents

All this extra stuff that you see here represents the structure of the HTML Document, also known as the HTML DOM, or Document Object Model. The DOM is basically a giant representation of everything that's on the page. Its structure is similar to a tree (which gets covered in CS32!) with every node or section having parent or children nodes.

All these things that get added with little angle brackets like `<` and `>` are called tags in HTML, and they are the building blocks of what HTML exactly is.

## Tags

Within the structure of the HTML DOM, it is made up of tags, which surrond plain text or other tags within the HTML Document. Let's try adding in the auto-completed stuff, such as the head tag and the body tag that we saw when we ran `inspect-element!`

### The Head

The `<head>` of the document contains code that you don't want the browser to render, and you can also use it to provide information about your website to search engines, other users reading your website, and more!

`<title>`

One example of a tag that you can use in your head to provide info about your site is the `<title>` Tag!

For instance, if we were making TeachLA's website, we can put in

```html
<title>Home | ACM Teach LA</title>
```

to make the title of the tab say Home | ACM Teach LA!

There's also a lot of other tags that you can use to provide **metadata** your site like an icon, a description, the language it's in, and a lot more!

### The Body

The `<body>` of the html document is where you put everything that you want the web browser to display and render!

There are over 100 HTML tags and there are way too many to cover all at once, so we'll just cover some of the basics but there are a lot of really nice [references](https://www.w3schools.com/TAGS/default.ASP) online for you to see what these tags do and how to use them!

For now, we'll just go over some of the basics.

## Tags Galore

### Comments

If you want to add comments to your code that won't get rendered, you can wrap text with
`<! ---` and `-->`.
However, you can view the comments when you use Inspect Element or if you download the source html of a website, so don't put sensitive information in there!

### Headers

`<h1>` to `<h6>` stand for the headings or subheadings of your page!

Each one is a different size, with h1 being the largest and h6 being the smallest.

# This is h1

## This is h2

### This is h3

#### This is h4

##### This is h5

###### This is h6

```html
<h1>Big Header!</h1>
<h2>Slightly Smaller Header!</h2>
<h3>Even Smaller!</h3>
```

### Paragraphs

The p tag is a paragraph of text, and is a nice way to organize lots of text.

```html
<p>
  Wow, here's a lot of text that I want to write up. As you can see, it's pretty
  nice and I can actually put as much text in here as I want!
</p>
'
```

### `Links`

The 'link' tag links your page to another resource, while defining the relationship between the two. This tag might seem useless right now, but we will make use of it soon in our [CSS section](#styling-with-css)!

This will make more sense when we start talking about CSS, but for now we can discuss its properties:

- `href`: the path to the resource
- `rel`: the relationship of this resource to our document
- `type`: the type of file the link points to

### Spans

The span tag is a way to organize text within a page, and is a way to divide up sections for organizational sections. On its own, it doesn't do anything but can be used to mark up other sections of text!

```html
<p>Here's a normal paragraph of text that we've seen in the past</p>

<p>
  And here's a paragraph of text with a section that's
  <span>marked up with a span!</span>
</p>
```

### Divs

Similarly to spans, divs stand for **division** and actually causes the text or other tags wrapped inside the div to be separated from the things around it!

By changing our span into a div, we can see that the text is actually divided from the section around it!

```html
<p>Here's a normal paragraph of text that we've seen in the past</p>

<p>And here's a paragraph of text with a section that's <div>marked up with a div!</div> </p>
```

### Lists

To make lists in HTML, you can make either **ordered lists** `<ol>` or **unordered lists** `<ul>`.

Within your list, you can make list items with `<li>`, and you can easily change between ordered or unordered lists by changing the parent `<ul>` or `<ol>`.

```
<ol>
    <li>This</li>
    <li>is</li>
    <li>an</li>
    <li>ordered</li>
    <li>list!</li>
</ol>

<ul>
    <li>This</li>
    <li>is</li>
    <li>an</li>
    <li>unordered</li>
    <li>list!</li>
</ul>
```

### Anchors And Links

To link to other websites or resources on the internet, we can use the `<a>` tag!

`<a>` stands for the anchor tag, and it denotes the "anchor text" or clickable text to a link.

We can add the link to the resource/website we want to link to with the href property.

For instance, if we wanted to link to uclaacm's website, we could do that like so:

```html
<a href="https://www.uclaacm.com">ACM @ UCLA!</a>
```

href stands for **hypertext reference**, and is the link that you want the text to go to!

If you want it to open to a new page, you can also add in this inside the `<a>` tag as well:

```html
<a href="https://www.uclaacm.com" target="_blank">ACM @ UCLA! </a>
```

### Properties

In this case, you can see that we added extra stuff inside of the `<a>` tag that's more than just the name of the tag itself! These are called properties of the HTML tag, and they are a way to pass in extra information that the tag needs! It's kinda like the constructor for Object Oriented Programming languages like C++ that we use in CS31 and CS32.

### Images

This is a tag that displays an **image**!

An image tag is declared as follows:

`<img src="PATH_TO_YOUR_IMAGE" alt="text to display if we can't load the image"></img>`

Notice the inclusion of two properties of the tag that we may specify:

- `src`: the URL or path to your image. If you want to use an image from the Internet, you can just copy and paste the link here (although be wary of usage rights). If you want to use an image from your computer, make sure it is publicly available, and use a relative link (`./my/image.png`).
- `alt`: the text that should be displayed in the event that your image can't be loaded.

Having the closing tag for an image is a bit useless, though. It wouldn't make sense to nest any components within it. The good news is that we can eliminate this closing tag in HTML thanks to **self-closing tags**.

To make a tag **self-closing**, simply add `/>` in place of your usual `>` to the opening of the tag. For example: `<img alt="sample image" />`.

With this in mind, let's find an image and add it to our document:

```html
<body>
  <img
    src="https://teachla.uclaacm.com/img/teachLA_wordmark_light.svg"
    alt="TeachLA's Logo"
  />
</body>
```

Now that we've discussed properties that you can add to tags like `src` for `<img>` or `href` for `<a>`, there's some properties that we can add to all HTML tags, **classes and ids!** While they don't change how things get rendered to the page directly, we can use them to organize our code and match/target resources to these properties!

### Class

We can designate a particular tag on our page as a particular class of tag with this property.

For example, if we would like to declare our h1, h2, etc. tags to all be of class 'header', we write:

```html
<h1 class="header">This is h1</h1>
<h2 class="header">This is h2</h2>
<h3 class="header">This is h3</h3>
<!-- ... -->
```

### ID

We can designate a particular tag an ID with this property. For example, if there's an important element on the page like the title of the entire thing, we would give it the ID `page-title`.

Let's make our `<h1>` header at the start of the page the page title:

```html
<h1 class="header" id="page-title">This is h1</h1>
<h2 class="header">This is h2</h2>
<h3 class="header">This is h3</h3>
<!-- ... -->
```

## Styling with CSS

At this point, there are likely a handful of questions about properties floating around. Why do we need them? What's the point of a `<link>`? What if we want to spice up our website? Add some color, change the size of things, the font maybe?

This is where the last two S's of CSS come in: "Cascading **Style Sheets**".

That's rather self-explanatory! CSS is the language used to dictate any sort of styling changes to our site we wish to make.

Why are they cascading? To answer that question, we will first have to learn how to read CSS.

### Reading, writing CSS

CSS is written fairly simply:

```css
selector {
  propertyname: value;
  otherproperty: otherValue;
}
```

The **selector** can be [one of a variety](https://www.w3schools.com/cssref/css_selectors.asp), but for our purposes, we'll discuss three properties we talked about: tag name, class, and ID.

The **property** name can be [any one of the comprehensive list](https://www.w3schools.com/cssref/).

The **value** of the property can be - in most situations - [any of those offered](https://www.w3schools.com/cssref/css_units.asp), but for our purposes, we will focus on two basic ones:

- General measurements by pixels (px)
- Colors by hex code, RGB, and HSL

#### Selectors

To select a **class** of elements on the page, we prepend the class name with a dot (`.`). To select the "big" class from our page and change the styling of it, we would write:

```css
.big {
  /* ... */
}
```

To select all elements that have a **list of classes**, we list them one after another with `.`. To select all elements from our page with a class list containing both "big" and "title", we would write:

```css
.big.title {
  /* ... */
}
```

To select an element by its **ID**, we prepend the ID name with a hash (`#`). To select the "title" ID from our page, we would write:

```css
#title {
  /* ... */
}
```

If you have multiple items with the same ID, this styling will apply to both of them, but you should generally only keep a 1:1 mapping of IDs to elements of your document.

### Properties and values

Moving on, let's discuss some of the potential styling choices that one can make.

Every CSS property has a particular value and format to which it adheres. If you're ever confused about what the format of a particular property's value is, you can check online by looking it up. A good resource for this is the [Mozilla Developer Network](https://developer.mozilla.org).

#### `font-size`

We can change the font size of a particular element with this property. Since we're getting started, we will use measurements of pixels.

```css
h1 {
  font-size: 50px;
}
```

#### `font-weight`

Font weight controls how bold or how light a font is. A lower number means the font will appear more thin, while a higher number means that the font will appear more bold. The font weight that you see by default is 400. Bold is usually 600 or 700, and light is often 200 or so, but you can choose whatever you'd like that is supported by the font!

Example:

```css
h1 {
  font-weight: 200;
}
```

#### `color`

This property allows us to change the color of text contained by a particular tag. One can use any of the following color code combinations:

- Named colors: `white`, `red`, `green`, `blue`, `grey`, `black`, ...
- Hex: `#030123`
- RGB: `rgb(3, 1, 35)`
- HSL: `hsl(243, 94%, 7%)`

Example:

```css
body {
  color: #030123;
}

a {
  color: green;
}
```

#### `background-color`

With this property, we can choose the color that we would like to be the background of a tag. It uses the same color code combinations as mentioned above:

```css
body {
  background-color: rgb(3, 1, 35);
}
```

#### `border`

Border will be our first exposure to a shorthand property in CSS. As mentioned earlier, each property in CSS has its own specific declaration. However, a bunch of specific declarations get difficult to work with very fast.

This is where shorthand properties step in.

There are specific properties in CSS to create borders around elements (`border-left`, `border-top`, `border-right`, `border-bottom`, `border-color`, `border-style`), but this shorthand property, `border`, wraps all the information needed to create a border into a neat little declaration.

Let's check the [MDN reference for it](https://developer.mozilla.org/en-US/docs/Web/CSS/border):

To extract the relevant portion of this, the value for the `border` property is `<line-width> || <line-style> || <color>`.

Let's write an example where we draw a thick, blue, dashed border around all classes with the `bordered` class. Let's also draw a black border around paragraphs.

```css
.bordered {
  border: thick dashed blue;
}

p {
  border: thin solid black;
}
```

#### Writing some CSS for our website

With this out of the way, let's take a look at some real CSS in the flesh. We will save this CSS in a file we call [`base.css`](base.css). Comments will be left throughout to help explain what each part does.

```css
h1 {
  font-size: 50px;
}

h1 {
  font-size: 30px;
}

/* add a border around paragraphs and change their font to comic sans */
p {
  font-family: Comic Sans MS;
  border: thin solid black;
}

/* give divs a different background color */
div {
  background-color: aliceblue; /* this is a real named color in CSS! */
}

/* style elements with the class "reallybig" to have a font size of 100px */
.reallybig {
  font-size: 100px;
}

/* style the element with the ID page-title to have a font weight of 700 (bold) */
#page-title {
  font-weight: 700;
}
```

Now all that's left is to link this file to our document. But before that...

You may have noticed that we have multiple definitions of `font-size` for `h1` tags. Remember how we mentioned earlier that we would learn what the **cascading** part was of CSS? The answer lay in this example - the way that CSS determines the priority of styles.

### \*\*Cascading\*\* Style Sheets

When there are multiple rules applying to the same element, [CSS' cascade and specificity rules come into play](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

At a high level, the last rule to be declared is what takes precedence. So in our example above, the last `h1` styling rule takes precedence, making our font size 30px.

However, when there are multiple rules applying from multiple **selectors**, precedence takes effect. **The most specific selector wins out on conflicting rules**.

Here's the list of selector specificity, in order of least to most specific:

- Type selectors (`h1`, `div`, etc.)
- Class selectors (`.reallybig`)
- ID selectors (`#page-title`)

So if we wrote, using our stylesheet above:

```html
<h1 class="reallybig" id="page-title">Conflict?</h1>
```

We would see that the font size from the class selector (`.reallybig`) would win out, and the ID styles would still be respected (since there was no conflict).

Before we move on, there are of course ways to override these rules, but you should only do so sparingly. By appending `!important` to the end of a value for a particular rule, we can guarantee that the rule will win out in cases of conflict. However, this should be reserved for incredibly specific situations, such as for overwriting rules from a CSS framework - but even then you can take advantage of the cascade!

### Linking CSS files to our webpage

Now that we've learned how to read and write CSS, how will we link this in to our webpage to apply the styling changes? Easy enough, we use the [`<link>`](#link) tag!

Running down the list of properties for a `<link>`:

- Our file's path (`href`) is `./base.css`.
- Our file's type (`type`) is `text/css`.
- Our file's relationship to the document (`rel`) is a `stylesheet`.

Putting this information all together: `<link href="./base.css" type="text/css" rel="stylesheet" />`

Since this is something that we would like to be loaded prior to the content of our document, we will place the link in the `<head>` of the document:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- This is where the head is! -->
    <link href="./base.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

While we're here, let's also give some elements the class and another the ID we made:

```html
<!-- ... -->
<div>
  <h1 class="reallybig" id="page-title">This is h1</h1>
  <h2>This is h2</h2>
  <!-- ... -->
</div>
```

With this, we can see the styling changes immediately reflected within our browser!

Luckily, we don't need to live with these strange styling decisions! We can always change them now by editing base.css.

## Basic CSS: Summary

To sum it all up, we learned about what **CSS** means, how to read and write it, a few basic properties and the values they expect, how its priority system works, and how to link it into our webpage!

## Beginning Project: Your Own Portfolio Page

Using these skills that we've discussed today: **The Basics of HTML and CSS**, we can start making our portfolio pages to show off how much of an amazing person we all are!

## References:

This write-up was heavily based off of the
[transfer accelerator program for building websites](https://github.com/uclaacm/transfer-accel-portfolio-website-workshop/tree/main/01-html-css-structure-style) and the
[learning labs crash course intro to HTML/CSS](https://github.com/uclaacm/learning-lab-crash-course-su20/tree/main/01-intro-html-css), and content was also pulled from [w3schools](https://www.w3schools.com/).

For more reference, here's a couple links that go into more detail of HTML/CSS!

Below are some links for you to use as reference for the material we covered today:

- [A list of all HTML tags](https://www.w3schools.com/TAGS/default.ASP)

- [A list of all CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp)

- [A comprehensive list of all CSS properties](https://www.w3schools.com/cssref/)
