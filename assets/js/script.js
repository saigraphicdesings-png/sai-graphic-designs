'use strict';

/* =========================================
   ELEMENTS
========================================= */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


/* =========================================
   SIDEBAR TOGGLE
========================================= */

if (sidebar && sidebarBtn) {

  sidebarBtn.addEventListener("click", function () {

    sidebar.classList.toggle("active");

  });

}


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageName) {

  /* Hide all pages */

  pages.forEach(function (page) {

    if (page.dataset.page === pageName) {

      page.classList.add("active");

    } else {

      page.classList.remove("active");

    }

  });


  /* Update navbar buttons */

  navigationLinks.forEach(function (button) {

    const target = button.dataset.pageTarget;

    if (target === pageName) {

      button.classList.add("active");

    } else {

      button.classList.remove("active");

    }

  });


  /* Scroll to top */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   NAVIGATION BUTTON CLICK
========================================= */

navigationLinks.forEach(function (button) {

  button.addEventListener("click", function (event) {

    event.preventDefault();

    const pageName = this.dataset.pageTarget;

    if (pageName) {

      showPage(pageName);

    }

  });

});


/* =========================================
   OPEN ABOUT PAGE ON LOAD
========================================= */

showPage("about");


/* =========================================
   TESTIMONIAL MODAL
========================================= */

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

  modalCloseBtn.addEventListener(
    "click",
    toggleModal
  );

}


if (overlay) {

  overlay.addEventListener(
    "click",
    toggleModal
  );

}


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterBtns =
  document.querySelectorAll("[data-filter-btn]");

const filterItems =
  document.querySelectorAll("[data-filter-item]");


filterBtns.forEach(function (button) {

  button.addEventListener("click", function () {

    const selectedValue =
      this.innerText.trim().toLowerCase();


    /* Active button */

    filterBtns.forEach(function (btn) {

      btn.classList.remove("active");

    });

    this.classList.add("active");


    /* Filter projects */

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


/* =========================================
   PORTFOLIO MOBILE SELECT
========================================= */

const select =
  document.querySelector("[data-select]");

const selectItems =
  document.querySelectorAll("[data-select-item]");

const selectValue =
  document.querySelector("[data-selecct-value]");


if (select) {

  select.addEventListener("click", function () {

    this.classList.toggle("active");

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


    /* Filter portfolio */

    const selectedCategory =
      selectedValue.toLowerCase();


    filterItems.forEach(function (project) {

      const category =
        project.dataset.category.toLowerCase();


      if (
        selectedCategory === "all" ||
        selectedCategory === category
      ) {

        project.classList.add("active");

      } else {

        project.classList.remove("active");

      }

    });

  });

});


/* =========================================
   CONTACT FORM
========================================= */

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


  /* Contact form submit */

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      form.querySelector('[name="fullname"]').value;

    const email =
      form.querySelector('[name="email"]').value;

    const message =
      form.querySelector('[name="message"]').value;


    const whatsappMessage =
      `Hello Sai Graphic Designs,

Name: ${name}

Email: ${email}

Message:
${message}`;


    const whatsappURL =
      "https://wa.me/916381128781?text=" +
      encodeURIComponent(whatsappMessage);


    window.open(
      whatsappURL,
      "_blank"
    );

  });

}
