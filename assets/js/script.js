"use strict";

/* ================================
   SIDEBAR CONTACT TOGGLE
================================ */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}


/* ================================
   PAGE NAVIGATION
   About / Resume / Portfolio / Blog / Contact
================================ */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    // Get the page name
    const pageName = this.getAttribute("data-nav-link");

    console.log("Clicked:", pageName);

    /* -------------------------------
       Remove active from all buttons
    -------------------------------- */

    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });

    /* -------------------------------
       Add active to clicked button
    -------------------------------- */

    this.classList.add("active");

    /* -------------------------------
       Hide all pages
    -------------------------------- */

    pages.forEach(function (page) {
      page.classList.remove("active");
    });

    /* -------------------------------
       Show selected page
    -------------------------------- */

    const selectedPage = document.querySelector(
      '[data-page="' + pageName + '"]'
    );

    if (selectedPage) {

      selectedPage.classList.add("active");

      console.log("Showing:", pageName);

    } else {

      console.log("Page not found:", pageName);

    }

    /* -------------------------------
       Scroll to top
    -------------------------------- */

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


/* ================================
   PORTFOLIO FILTER
================================ */

const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const selectedCategory = this.textContent
      .trim()
      .toLowerCase();

    /* Remove active from all filter buttons */

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    /* Add active to selected filter */

    this.classList.add("active");

    /* Filter projects */

    filterItems.forEach(function (item) {

      const itemCategory = item.dataset.category;

      if (
        selectedCategory === "all" ||
        selectedCategory === itemCategory
      ) {

        item.classList.add("active");

      } else {

        item.classList.remove("active");

      }

    });

  });

});


/* ================================
   MOBILE PORTFOLIO FILTER
================================ */

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

if (select) {

  select.addEventListener("click", function () {
    select.classList.toggle("active");
  });

}


selectItems.forEach(function (item) {

  item.addEventListener("click", function () {

    const selectedValue = this.textContent.trim();

    /* Change selected value */

    if (selectValue) {
      selectValue.textContent = selectedValue;
    }

    /* Close dropdown */

    if (select) {
      select.classList.remove("active");
    }

    const selectedCategory = selectedValue.toLowerCase();

    /* Filter projects */

    filterItems.forEach(function (project) {

      const category = project.dataset.category;

      if (
        selectedCategory === "all" ||
        category === selectedCategory
      ) {

        project.classList.add("active");

      } else {

        project.classList.remove("active");

      }

    });

  });

});


/* ================================
   CONTACT FORM
================================ */

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formButton = document.querySelector("[data-form-btn]");

if (form && formButton) {

  formInputs.forEach(function (input) {

    input.addEventListener("input", function () {

      if (form.checkValidity()) {

        formButton.removeAttribute("disabled");

      } else {

        formButton.setAttribute("disabled", "");

      }

    });

  });

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

  });

}
