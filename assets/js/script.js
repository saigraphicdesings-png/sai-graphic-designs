"use strict";

/* ================================
   PAGE NAVIGATION
================================ */

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {

  link.addEventListener("click", function () {

    const targetPage = this.dataset.navLink;

    /* Remove active from all pages */
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    /* Remove active from all navigation buttons */
    navigationLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    /* Show selected page */
    const targetElement = document.querySelector(
      `[data-page="${targetPage}"]`
    );

    if (targetElement) {
      targetElement.classList.add("active");
    }

    /* Highlight selected navigation button */
    this.classList.add("active");

    /* Scroll to top */
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


/* ================================
   SIDEBAR CONTACT BUTTON
================================ */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {

  sidebarBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active");

  });

}


/* ================================
   PORTFOLIO FILTER
================================ */

const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterButtons.forEach((button) => {

  button.addEventListener("click", function () {

    const selectedCategory = this.textContent.trim().toLowerCase();

    /* Active filter button */
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    /* Filter projects */
    filterItems.forEach((item) => {

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
const selectValue = document.querySelector("[data-select-value]");
const selectList = document.querySelector(".select-list");
const selectItems = document.querySelectorAll("[data-select-item]");

if (select) {

  select.addEventListener("click", function () {
    select.classList.toggle("active");

    if (selectList) {
      selectList.classList.toggle("active");
    }
  });

}

selectItems.forEach((item) => {

  item.addEventListener("click", function () {

    const selectedCategory = this.textContent.trim();

    if (selectValue) {
      selectValue.textContent = selectedCategory;
    }

    const category = selectedCategory.toLowerCase();

    filterItems.forEach((project) => {

      if (
        category === "all" ||
        project.dataset.category === category
      ) {
        project.classList.add("active");
      } else {
        project.classList.remove("active");
      }

    });

    if (select) {
      select.classList.remove("active");
    }

    if (selectList) {
      selectList.classList.remove("active");
    }

  });

});


/* ================================
   CONTACT FORM
================================ */

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formButton = document.querySelector("[data-form-btn]");

if (form && formButton) {

  formInputs.forEach((input) => {

    input.addEventListener("input", function () {

      if (form.checkValidity()) {
        formButton.removeAttribute("disabled");
      } else {
        formButton.setAttribute("disabled", "");
      }

    });

  });

}
