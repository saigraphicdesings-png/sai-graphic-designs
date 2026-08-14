'use strict';


// ========================================
// SIDEBAR
// ========================================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}


// ========================================
// PAGE NAVIGATION
// ========================================

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function showPage(pageName) {

  pages.forEach(function (page) {

    if (page.dataset.page === pageName) {

      page.classList.add("active");

      // Force the page to be visible
      page.style.display = "block";

    } else {

      page.classList.remove("active");

      // Hide other pages
      page.style.display = "none";

    }

  });


  navigationLinks.forEach(function (link) {

    if (link.dataset.target === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

  });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// Navigation button click

navigationLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    const pageName = this.dataset.target;

    showPage(pageName);

  });

});


// Show About page when website loads

showPage("about");


// ========================================
// TESTIMONIAL MODAL
// ========================================

const testimonialsItem =
  document.querySelectorAll("[data-testimonials-item]");

const modalContainer =
  document.querySelector("[data-modal-container]");

const modalCloseBtn =
  document.querySelector("[data-modal-close-btn]");

const overlay =
  document.querySelector("[data-overlay]");

const modalImg =
  document.querySelector("[data-modal-img]");

const modalTitle =
  document.querySelector("[data-modal-title]");

const modalText =
  document.querySelector("[data-modal-text]");

const testimonialsAvatar =
  document.querySelectorAll("[data-testimonials-avatar]");

const testimonialsTitle =
  document.querySelectorAll("[data-testimonials-title]");

const testimonialsText =
  document.querySelectorAll("[data-testimonials-text]");


function toggleModal() {

  if (modalContainer) {
    modalContainer.classList.toggle("active");
  }

}


testimonialsItem.forEach(function (item, index) {

  item.addEventListener("click", function () {

    if (modalImg && testimonialsAvatar[index]) {
      modalImg.src = testimonialsAvatar[index].src;
    }

    if (modalTitle && testimonialsTitle[index]) {
      modalTitle.innerHTML =
        testimonialsTitle[index].innerHTML;
    }

    if (modalText && testimonialsText[index]) {
      modalText.innerHTML =
        testimonialsText[index].innerHTML;
    }

    toggleModal();

  });

});


if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", toggleModal);
}


if (overlay) {
  overlay.addEventListener("click", toggleModal);
}


// ========================================
// PORTFOLIO FILTER
// ========================================

const filterBtns =
  document.querySelectorAll("[data-filter-btn]");

const filterItems =
  document.querySelectorAll("[data-filter-item]");


filterBtns.forEach(function (btn) {

  btn.addEventListener("click", function () {

    const selectedValue =
      this.innerText.trim().toLowerCase();

    filterBtns.forEach(function (button) {
      button.classList.remove("active");
    });

    this.classList.add("active");


    filterItems.forEach(function (item) {

      const category =
        item.dataset.category.toLowerCase();

      if (
        selectedValue === "all" ||
        selectedValue === category
      ) {

        item.classList.add("active");

      } else {

        item.classList.remove("active");

      }

    });

  });

});


// ========================================
// PORTFOLIO MOBILE SELECT
// ========================================

const select =
  document.querySelector("[data-select]");

const selectItems =
  document.querySelectorAll("[data-select-item]");

const selectValue =
  document.querySelector("[data-selecct-value]");


if (select) {

  select.addEventListener("click", function () {

    select.classList.toggle("active");

  });

}


selectItems.forEach(function (item) {

  item.addEventListener("click", function () {

    const selectedValue =
      this.innerText.trim();

    if (selectValue) {
      selectValue.innerText = selectedValue;
    }

    if (select) {
      select.classList.remove("active");
    }

  });

});


// ========================================
// CONTACT FORM
// ========================================

const form =
  document.querySelector("[data-form]");

const formInputs =
  document.querySelectorAll("[data-form-input]");

const formBtn =
  document.querySelector("[data-form-btn]");


if (form && formBtn) {

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
