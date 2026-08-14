"use strict";

/* =========================
   SIDEBAR TOGGLE
========================= */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}


/* =========================
   NAVIGATION
========================= */

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    const targetPage = link.textContent.trim().toLowerCase();

    // Remove active from all navigation buttons
    navigationLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });

    // Add active to clicked button
    link.classList.add("active");

    // Show selected page
    pages.forEach(function (page) {

      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });

    // Scroll page to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const category = button.textContent.trim().toLowerCase();

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    filterItems.forEach(function (item) {

      if (
        category === "all" ||
        item.dataset.category === category
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }

    });

  });

});


/* =========================
   MOBILE PORTFOLIO FILTER
========================= */

const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-select-value]");
const selectItems = document.querySelectorAll("[data-select-item]");

if (select) {

  select.addEventListener("click", function () {
    select.classList.toggle("active");
  });

}

selectItems.forEach(function (item) {

  item.addEventListener("click", function () {

    const selectedValue = item.textContent.trim();

    if (selectValue) {
      selectValue.textContent = selectedValue;
    }

    if (select) {
      select.classList.remove("active");
    }

    const category = selectedValue.toLowerCase();

    filterItems.forEach(function (project) {

      if (
        category === "all" ||
        project.dataset.category === category
      ) {
        project.classList.add("active");
      } else {
        project.classList.remove("active");
      }

    });

  });

});


/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0 && formBtn) {

  formInputs.forEach(function (input) {

    input.addEventListener("input", function () {

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });

  });

}
