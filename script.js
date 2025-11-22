let menuBtn = document.querySelector('.menu-icon');
let navLinks = document.querySelector('.navlinks');
let menuIconImg = document.querySelector('.menu-icon img');

// CLICK MENU (hamburger/X)
menuBtn.addEventListener('click', () => {

  // Toggle nav visibility
  navLinks.classList.toggle('active');

  // Change icon between hamburger and X
  if (navLinks.classList.contains('active')) {
    menuIconImg.src = "starter-code/assets/shared/icon-close.svg";
  } else {
    menuIconImg.src = "starter-code/assets/shared/icon-hamburger.svg";
  }
});
