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

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //new way
    // message.remove();
    //old way
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Attributes

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);

// this changes the alt of the logo. Any attribute can be changed like this
logo.alt = 'beautiful logo';

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
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // this logs to the console the current scroll in pixels - the distance between current position and top of the page
  console.log('Current scroll (x/y):', window.pageXOffset, window.pageYOffset);

  // logs to the console the height and width of the viewport of the current proportion of the page
  console.log(
    'height/width viewport:',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

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

// Event Delegation: implementing page navigation
