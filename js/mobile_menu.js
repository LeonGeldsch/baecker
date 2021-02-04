var burgerMenuButton = document.querySelector('.header span');

var mobileMenu = document.querySelector('.mobile-menu');

var mobileMenuCloseButton = document.querySelector('.mobile-menu span');

// -----------------------------------------------------------------------------

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
}

// -----------------------------------------------------------------------------

burgerMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuCloseButton.addEventListener('click', toggleMobileMenu);
