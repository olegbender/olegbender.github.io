let hamBtnOp = document.querySelector('.hamburger');
let menuBtnCl = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');

hamBtnOp.addEventListener('click', function () {
  menu.classList.add('active');
});

menuBtnCl.addEventListener('click', function () {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.ratings__item-count');
lines = document.querySelectorAll('.ratings__item-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

