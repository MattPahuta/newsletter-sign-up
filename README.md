# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). 

The solution features custom error checking and messaging for the form and a mobile-first approach to the design.

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

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./project-ss.jpg)
![](./project-ss-error-state.jpg)
![](./project-ss-success-state.jpg)


### Links

- Solution URL: [solution URL](https://your-solution-url.com)
- Live Site URL: [Live site](https://newsletter-sign-up-bay-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I used Keith Grant's method (linked below) to handle smoothly transitioning my gradient-on-hover buttons. Worked perfectly for this use case.

```css
.gradient-btn::before {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: var(--bg-gradient);
  z-index: -1;
  transition: 220ms all ease-in-out;
  opacity: 0;
  border-radius: var(--br-soft);
}

.gradient-btn:hover::before,
.gradient-btn:focus-visible::before {
  opacity: 1;
}

.card {
  margin-inline: auto;
  background-color: var(--clr-white);
  overflow: hidden;
  display: grid;
}
```

### Continued development

This was great practice for handling a simple form and simulated state changes using vanilla JavaScript. In the future I'll look to utilizing React to build these sorts of forms.

### Useful resources

- [Keith J. Grant](https://keithjgrant.com/posts/2017/07/transitioning-gradients/) - I was briefly stumped trying to smoothly transition of the submit button using a gradient background. This is a somewhat dated article but still proved really useful.

## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Twitter - [@mattpahuta](https://www.twitter.com/MattPahuta)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)