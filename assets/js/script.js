"use strict";

/*-----------------------------------*\
  #NAVIGATION
\*-----------------------------------*/

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {

    const targetPage = this.textContent.trim().toLowerCase();

    // Remove active from all pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Add active to selected page
    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      }
    });

    // Remove active from all navigation buttons
    navigationLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Add active to clicked button
    this.classList.add("active");

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });
});


/* =========================================
   SIDEBAR CONTACT TOGGLE
========================================= */

const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');


if (sidebarBtn && sidebar) {

  sidebarBtn.addEventListener('click', function () {

    sidebar.classList.toggle('active');

  });

}



/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');


let lastClickedBtn = filterButtons[0];


function filterProjects(category) {

  filterItems.forEach((item) => {

    const itemCategory = item.dataset.category;

    if (
      category === 'all' ||
      category === itemCategory
    ) {

      item.classList.add('active');

    } else {

      item.classList.remove('active');

    }

  });

}


filterButtons.forEach((button) => {

  button.addEventListener('click', function () {

    const selectedCategory = this.textContent
      .trim()
      .toLowerCase();


    /* Remove active from all filter buttons */

    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });


    /* Activate clicked button */

    this.classList.add('active');


    /* Remember selected button */

    lastClickedBtn = this;


    /* Filter projects */

    filterProjects(selectedCategory);

  });

});



/* =========================================
   MOBILE PORTFOLIO FILTER
========================================= */

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');


if (select) {

  select.addEventListener('click', function () {

    this.classList.toggle('active');

  });

}


selectItems.forEach((item) => {

  item.addEventListener('click', function () {

    const selectedValue = this.textContent.trim();

    const selectedCategory = selectedValue.toLowerCase();


    /* Update select text */

    if (selectValue) {

      selectValue.textContent = selectedValue;

    }


    /* Close dropdown */

    if (select) {

      select.classList.remove('active');

    }


    /* Filter projects */

    filterProjects(selectedCategory);


    /* Update desktop filter button */

    filterButtons.forEach((button) => {

      const buttonText = button.textContent.trim();

      if (buttonText.toLowerCase() === selectedCategory) {

        button.classList.add('active');

        lastClickedBtn = button;

      } else {

        button.classList.remove('active');

      }

    });

  });

});



/* =========================================
   CLOSE MOBILE FILTER
   WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener('click', function (event) {

  if (
    select &&
    !select.contains(event.target)
  ) {

    select.classList.remove('active');

  }

});



/* =========================================
   CONTACT FORM
========================================= */

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formButton = document.querySelector('[data-form-btn]');


if (form && formInputs.length && formButton) {


  /* Enable / disable button */

  formInputs.forEach((input) => {

    input.addEventListener('input', function () {

      const allFieldsFilled = Array.from(formInputs)
        .every((field) => field.value.trim() !== '');


      if (allFieldsFilled) {

        formButton.removeAttribute('disabled');

      } else {

        formButton.setAttribute('disabled', '');

      }

    });

  });


  /* Submit form */

  form.addEventListener('submit', function (event) {

    event.preventDefault();


    const name = form.querySelector(
      'input[name="fullname"]'
    ).value.trim();


    const email = form.querySelector(
      'input[name="email"]'
    ).value.trim();


    const message = form.querySelector(
      'textarea[name="message"]'
    ).value.trim();


    if (!name || !email || !message) {

      alert('Please fill in all fields.');

      return;

    }


    /*
      Opens the visitor's email application.
      Change this email if required.
    */

    const recipient =
      'saigraphicdesings@gmail.com';


    const subject =
      encodeURIComponent(
        'New Design Enquiry from ' + name
      );


    const body =
      encodeURIComponent(
        'Name: ' + name +
        '\n\n' +
        'Email: ' + email +
        '\n\n' +
        'Message:\n' + message
      );


    const mailtoLink =
      'mailto:' +
      recipient +
      '?subject=' +
      subject +
      '&body=' +
      body;


    window.location.href = mailtoLink;


    /* Reset form */

    form.reset();

    formButton.setAttribute('disabled', '');

  });

}



/* =========================================
   PORTFOLIO IMAGE LINKS
========================================= */

const projectLinks =
  document.querySelectorAll('.project-item > a');


projectLinks.forEach((link) => {

  link.addEventListener('click', function (event) {

    /*
      Currently project links use #.
      Prevent page jumping to the top.
    */

    const href = this.getAttribute('href');

    if (href === '#') {

      event.preventDefault();

    }

  });

});



/* =========================================
   BLOG LINKS
========================================= */

const blogLinks =
  document.querySelectorAll('.blog-post-item > a');


blogLinks.forEach((link) => {

  link.addEventListener('click', function (event) {

    const href = this.getAttribute('href');

    if (href === '#') {

      event.preventDefault();

    }

  });

});



/* =========================================
   CLIENT LINKS
========================================= */

const clientLinks =
  document.querySelectorAll('.clients-item > a');


clientLinks.forEach((link) => {

  link.addEventListener('click', function (event) {

    const href = this.getAttribute('href');

    if (href === '#') {

      event.preventDefault();

    }

  });

});



/* =========================================
   INITIAL PORTFOLIO STATE
========================================= */

filterProjects('all');
