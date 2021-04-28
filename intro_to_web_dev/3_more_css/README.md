# More CSS

There's actually a lot you can do with CSS, it can all get quite complicated. Positioning elements on a page often causes bugs and frustrations during development even more the most experienced dev. In this session, we'll be going over the Box Model, flexbox, and media rules.

## Table of Contents
- [Lesson](#lesson)
- [Project](#project)

## Lesson

### The Box Model and Flexbox
This week's lesson comes from two write-ups: [this](https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/02-intermediate-css) covers the box model, and [this](https://github.com/uclaacm/learning-lab-crash-course-su20/tree/master/04-flexbox-grid) goes over flexbox (and grid, but we won't be talking about. Feel free to read it though!). 

### Media Rules
The CSS that we've learned so far already allow us to build beautiful websites. We can put content on our website, give it color, and position things where we want them on the page. However, these days, people can view websites from all sorts of devices, and even though a website might look great on a web browser on a laptop or PC, doesn't mean it will look great on a phone or a tablet because of the different dimensions. One way we can deal with this is with media rules in CSS.

Media rules allow us to apply different styles to different devices or dimensions. The general syntax is
```CSS
@media not|only [mediatype] and ([mediafeature] and|or|not [mediafeature]) {
  /* insert your special CSS code here */
}
```
where you can list one or more media features within the parenthesis. 

The `not` keyword applies the following styles to clients that don't satisfy the query. The `only` keyword applies the styles to clients that satisfy the query exactly. 

Media types can be one of the following:
- `all` - matches any media type (the defaul option)
- `print` - for printers
- `screen` - for computers, tablets, smart-phones
- `speech` - for screenreaders

There are a lot of options for media features, feel free to look up the documentation for a comprehensive list. 

For example, we can specify specific styles for iPhone 12 like so
```CSS
@media screen and (max-width: 390px and max-height: 844px) {
  #menu {
    height: 15px;
    width: 100vw;
    /* and so on */
  }
}
```

This code says apply a height of 15px and a width of 100vw to the element with the ID `menu` if the browser has a width of 1170px or less and if the browser has a height of 2532px or less. 

As versatile as this can be, you might imagine it can be a lot of hassle to list the rules for each device that people might use. So generally, we specify different styling for a couple of very different dimensions and use relative sizing to make sure most things are proportionate. An example is shown below, but the numbers are definitely not the only ones you can use.

```CSS
@media only screen and (max-width: 480px) {
  /* phones */
}

@media only screen and (max-width: 768px) {
  /* tablets */
}

@media only screen and (max-width: 1024px) {
  /* small screens, landscape tablets */
}
```

Note that multiple media rules can apply for the same device as long as it satisfies the query, so be careful about what you're specifying! 

That's all for this week. Next week, we'll be taking a dive into Javascript!

## Project
Try using flexbox on some components of your website! You mind find that it makes the spacing a lot easier to manage. Make your website mobile reponsive by using media rules to apply styles that are mobile friendly!