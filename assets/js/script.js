'use strict';


// ELEMENTS

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");


// SIDEBAR TOGGLE

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}


// NAVIGATION

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {

  link.addEventListener("click", function () {

    const pageName = this.textContent.trim().toLowerCase();

    pages.forEach((page) => {

      if (page.dataset.page === pageName) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });

    navigationLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    this.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


// TESTIMONIAL MODAL

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsAvatar = document.querySelectorAll("[data-testimonials-avatar]");
const testimonialsTitle = document.querySelectorAll("[data-testimonials-title]");
const testimonialsText = document.querySelectorAll("[data-testimonials-text]");


const toggleModal = function () {
  if (modalContainer) {
    modalContainer.classList.toggle("active");
  }
};


testimonialsItem.forEach((item, index) => {

  item.addEventListener("click", function () {

    if (modalImg && testimonialsAvatar[index]) {
      modalImg.src = testimonialsAvatar[index].src;
    }

    if (modalTitle && testimonialsTitle[index]) {
      modalTitle.innerHTML = testimonialsTitle[index].innerHTML;
    }

    if (modalText && testimonialsText[index]) {
      modalText.innerHTML = testimonialsText[index].innerHTML;
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


// CUSTOM SELECT

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");

if (select) {

  select.addEventListener("click", function () {
    select.classList.toggle("active");
  });

}


selectItems.forEach((item) => {

  item.addEventListener("click", function () {

    const selectedValue = this.innerText;

    if (selectValue) {
      selectValue.innerText = selectedValue;
    }

    if (select) {
      select.classList.remove("active");
    }

  });

});


// PORTFOLIO FILTER

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");


filterBtns.forEach((btn) => {

  btn.addEventListener("click", function () {

    const selectedValue = this.innerText.toLowerCase();

    filterBtns.forEach((button) => {
      button.classList.remove("active");
    });

    this.classList.add("active");


    filterItems.forEach((item) => {

      const category = item.dataset.category;

      if (selectedValue === "all") {

        item.classList.add("active");

      } else if (selectedValue === category) {

        item.classList.add("active");

      } else {

        item.classList.remove("active");

      }

    });

  });

});


// CONTACT FORM

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {

  formInputs.forEach((input) => {

    input.addEventListener("input", function () {

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });

  });

}
