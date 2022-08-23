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

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);

// this changes the alt of the logo. Any attribute can be changed like this
logo.alt = 'beautiful logo';

const link = document.querySelector('.twitter-link');

console.log(link.href);

// Data attributes
// data style of attributes that start with data
console.log(logo.dataset.versionNumber);

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
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
