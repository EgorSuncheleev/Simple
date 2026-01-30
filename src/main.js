let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__burger-menu-nav');
let del = document.querySelector('.menu-delete')
let anchor = document.querySelector('.js-anchor')

burger.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.toggle('active')
});

del.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.remove('active')
})

anchor.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.remove('active')

  setTimeout(() => {
      anchor.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
  }, 1500)
});