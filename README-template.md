# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Result](./images/screenshot.PNG "Result")


### Links

- Solution URL: (https://github.com/samnismolvel/intro-section-with-dropdown-navigation-main)
- Live Site URL:(https://samnismolvel.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript


### What I learned

Being one of my firsts projects I learned to manipulate several types of CSS selectors:
```CSS

  .collapsed-items-container >:last-child {padding-bottom: 20px}

  .nav-bar >:first-child >:nth-child(2) {left: -70px}

```
Also its the first time I use CSS Grid:

``` css
.section-container {
    display: grid;
    grid-template-columns: [column1] 60% [column2] minmax(10px, 40%) [last-column];
    grid-template-rows: [row1] 90% [row2] minmax(10px, 10%) [row3];
    column-gap: 20px;

    height: calc(500px + 8vw);
    padding-bottom: calc(10px + 1vw);
    
    margin: 0;
    width: calc(600px + 40vw);    
  } 

  .main-flex {
    grid-column: column1/ column2;
    grid-row: row1 / row2;

    row-gap: calc(10px + 2vw);
    padding: calc(50px + 6vw) 0 0 0;
  }
```

### Continued development

I will focus on working with utility classes and more proper CSS responsive tricks.

### Useful resources

- (https://piccalil.li/blog/a-modern-css-reset/) - The reset I used for CSS.
- (https://css-tricks.com/snippets/css/complete-guide-grid/) - My main help learning how to use Grid

## Author

- Website - [samnismolvel](https://github.com/samnismolvel)
- Frontend Mentor - [@samnismolvel](https://www.frontendmentor.io/profile/samnismolvel)


## Acknowledgments

All the free content provided by CSS tricks (https://css-tricks.com/), w3schools (https://www.w3schools.com/) and Kevin Powell (https://www.youtube.com/kepowob) teached me almost everything of the CSS I know.
I introduced myself to JS with the series of courses (https://www.youtube.com/watch?v=z95mZVUcJ-E) by the youtuber Soy Dalto (https://www.youtube.com/c/soydalto).


