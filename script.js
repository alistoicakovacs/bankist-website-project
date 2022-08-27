'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--sow-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const allButtons = document.getElementsByTagName('button');

// Creating a message saying that cookies are used
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';
// header.append(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     //new way
//     // message.remove();
//     //old way
//     message.parentElement.removeChild(message);
//   });

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Attributes

const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);

// this changes the alt of the logo. Any attribute can be changed like this
// logo.alt = 'beautiful logo';

const link = document.querySelector('.twitter-link');

// console.log(link.href);

// Data attributes
// data style of attributes that start with data
// console.log(logo.dataset.versionNumber);

// Classes
// You can also add multiple classes, by passing in multiple values

// adds class
logo.classList.add('c');
// removes class/es
logo.classList.remove('c', 's');
// toggles classes. When it returns true, it switches to false, and if it is false, it switches to true
logo.classList.toggle('c');
// check if
logo.classList.contains('c');

// don't use
// logo.className = 'ali'

//////////////////////////////////////

// Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // this logs to the console the current scroll in pixels - the distance between current position and top of the page
  // console.log('Current scroll (x/y):', window.pageXOffset, window.pageYOffset);

  // logs to the console the height and width of the viewport of the current proportion of the page
  // console.log(
  //   'height/width viewport:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // Global function available on the window object
  // window.scrollTo(
  //   // Current position + current scroll
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // here we pass an object instead of an argument
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // there is another new way of doing this:
  // we pass in where we want to scroll to, and on that we call scrollIntoView(), and then we pass in an object and we specify the behavior
  // this only works in the modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});
/////////////////////////////////////
// Event Delegation: implementing page navigation
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     // this e.preventDefault function stops the page from jumping to the id section - anchor
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

////////////////////////////////////////////
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  ////////////////////////////////////////
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  // we added one big event function to the parent element
  // then we simply determined where the click event came from
  // we also had to make sure we ignored clicks that are not on the links
});

/////////////////////////////

const h1 = document.querySelector('h1');
const alerth1 = function (e) {
  // alert('addEventListener: Great! You are reading the heading!');
  // removing an event handler
  // on the second hover, the alert is not going to show.
  // this is a good method to be used whenever you only want to listen to an event once.
  // h1.removeEventListener('mouseenter', alerth1);
};

// mouseover is an event like :hover in css. It does something on hover
// h1.addEventListener('mouseenter', alerth1);

// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);
// onevent property can be used directly on the element - setting the function directly to the element
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading!');
// };

//////////////////////////////////////
// Event Propagation: Bubbling and Capturing

// rgb (255,255,255)
// Random integer function
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Random color function
const randomColor = () =>
  `rgb(${randomInt(0, 255)}),rgb(${randomInt(0, 255)}),rgb(${randomInt(
    0,
    255
  )})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('link');
//   this.style.backgroundColor = randomColor();
//stopping the propagation faze - the bubbling event stops going outwards to the parent element
//  e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('link');
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('link');
//   this.style.backgroundColor = randomColor();
// });

// Event bubbling goes outwards, from child to parent to parent up to the document element.

// Bubbling and Capturing Event are two different things
// Capturing events are travelling from parent to child - the opposite way as bubbling
// Capturing is not often used

////////////////////////////////
// DOM Traversing
// Going down wards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.color = "white"
// -> changes first child color
// this is how the first child can be selected

//Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// this changes the background color of the closest header to the h1 element - closest parent elmenet that has the class mentioned
// querySelector finds children, and closes() finds parents

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el != h1) el.style.transform = 'scale(0.5)';
// });

//////////////////////////
// Building a Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

tabsContainer.addEventListener('click', function (e) {
  // determine the clicked element and assign it to a variable
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  // Whenever there is no clicked element we want to simply return the function right away
  if (!clicked) return;

  // Remove active classes
  // before we add the class to an element, we remove it
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabs =>
    tabs.classList.remove('operations__content--active')
  );

  // Active tab
  // add the active class to the clicked element
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////
// Passing arguments to event handlers

//Menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

const nav = document.querySelector('.nav');

// another way of doing this is with the bind method
// passing an argument into handler
// nav.addEventListener('mouseover', handleHover.bind(0))
nav.addEventListener('mouseover', function (e) {
  // callback function - the function that we created earlier, with passed in arguments
  handleHover(e, 0.5);
  // this could also be made with the bind method, as it returns a new function
});
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');

//   siblings.forEach(el => {
//     if (el != link) el.style.opacity = 0.5;
//   });
//   logo.style.opacity = 0.5;
// }

// another way of doing this is with the bind method
// passing an argument into handler
// nav.addEventListener('mouseover', handleHover.bind(1))
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');

//   siblings.forEach(el => {
//     if (el != link) el.style.opacity = 1;
//   });
//   logo.style.opacity = 1;
// }

//////////////////////////////////
// Implementing a sticky navigation - The Scroll Event

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// // this event will be fired each time we are scrolling the page
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

/////////////////////
// Sticky navigation:
// Intersection Observer API

// const obsCalback = function (entries, observer) {
//   //whenever the first section is interseting the viewpoint of 10%, the callback function will be called
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   // 10%
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCalback, obsOptions);
// observer.observe(section1);

const header_ = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  //entry[0]
  nav.classList.add('sticky');

  if (!entry.isIntersecting) nav.classList.add('stick');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // as if the margin was -90px higher, as the navigation bar is 90px
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header_);

//////////////////////////////////////////////////////
// Revealing Elements on Scroll

// Reveal sections
// As we are scrolling down, we have to remove the section--hidden class from the sections

// const allSections = document.querySelectorAll('.section'); - already selected

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//////////////////////
// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src attribute with data-src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // images load 200px before we reach them
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////
// Building a Slider Component - Part 1
const sliderInit = function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotCotainer = document.querySelector('.dots');

  let currSlide = 0;
  const maxSlide = slides.length;

  // FUNCTIONS
  // Creating the dots
  const createDots = function () {
    // the " _ " is a conventional of the throwaway variable
    slides.forEach(function (_, i) {
      dotCotainer.insertAdjacentHTML(
        'beforeend',
        `
      <button class="dots__dot" data-slide="${i}"></button>
    `
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // Go to slide function
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }

    goToSlide(currSlide);
    activateDot(currSlide);
  };

  // Previous Slide
  const prevSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // EVENT HANDLERS
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Keyboard events
  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    // Short cirquiting
    e.key === 'ArrowRight' && nextSlide();
  });

  // Event listener for the dots
  dotCotainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliderInit();

////////////////////////////////////
// Lifecycle DOM Events

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM tree built!', e);
// });

// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault(); // needed for some browser in order for this to work
//   e.returnValue = ''; // it does not matter what is written inbetween the string; This will fire a popup message asking if you are sure about closing the tab"
// });

/////////////////////////////////////
// Efficient Script Loading: defer and async
