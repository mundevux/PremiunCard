const hamburger = document.querySelector('#mediaButton');
const navLink = document.querySelector('#mobileMenu');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});