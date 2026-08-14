"use strict";

// ================================
// PAGE NAVIGATION
// ================================

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    const pageName = link.getAttribute("data-nav-link");

    console.log("Clicked:", pageName);

    // Remove active from all navigation buttons
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active to clicked navigation button
    link.classList.add("active");

    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.querySelector(
      `[data-page="${pageName}"]`
    );

    if (selectedPage) {
      selectedPage.classList.add("active");
      console.log("Showing:", pageName);
    } else {
      console.log("Page not found:", pageName);
    }

  });

});


// ================================
// SIDEBAR
// ================================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {

  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

}
