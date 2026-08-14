'use strict';

// Select all navbar buttons and all page articles
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// Navbar page switching
navigationLinks.forEach((link) => {
  link.addEventListener('click', function () {

    // Remove active class from all navbar buttons
    navigationLinks.forEach((navLink) => {
      navLink.classList.remove('active');
    });

    // Add active class to clicked button
    this.classList.add('active');

    // Get the page name
    const pageName = this.innerHTML.toLowerCase();

    // Show the selected page
    pages.forEach((page) => {
      if (page.dataset.page === pageName) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
