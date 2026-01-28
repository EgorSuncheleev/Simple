let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__burger-menu-nav');

burger.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.toggle('active')
});

