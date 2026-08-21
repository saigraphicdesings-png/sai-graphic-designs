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
================================ */

const navLinks = document.querySelectorAll(".navbar-link[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

console.log("NAV LINKS:", navLinks.length);
console.log("PAGES:", pages.length);

navLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    const pageName = this.dataset.navLink;

    console.log("CLICKED:", pageName);

    navLinks.forEach(function (nav) {
      nav.classList.remove("active");
    });

    pages.forEach(function (page) {
      page.classList.remove("active");
    });

    this.classList.add("active");

    const selectedPage = document.querySelector(
      'article[data-page="' + pageName + '"]'
    );

    console.log("SELECTED PAGE:", selectedPage);

    if (selectedPage) {
      selectedPage.classList.add("active");
      console.log("OPENED:", pageName);
    }

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


/* =========================================================
   TEMPLATE SHOP
   Separate template cart + WhatsApp order message
========================================================= */

(function () {
  const shopTabs = document.querySelectorAll("[data-shop-filter]");
  const shopSections = document.querySelectorAll("[data-shop-section]");
  const shopAddButtons = document.querySelectorAll("[data-shop-add]");
  const shopItems = document.querySelector("[data-shop-items]");
  const shopTotal = document.querySelector("[data-shop-total]");
  const shopCount = document.querySelector("[data-shop-count]");
  const shopClear = document.querySelector("[data-shop-clear]");
  const shopWhatsapp = document.querySelector("[data-shop-whatsapp]");

  if (!shopAddButtons.length || !shopItems) return;

  const WHATSAPP_NUMBER = "916381128781";
  let templateCart = [];

  function money(value) {
    return "₹" + Number(value).toLocaleString("en-IN");
  }

  function renderCart() {
    shopItems.innerHTML = "";

    if (!templateCart.length) {
      shopItems.innerHTML = '<p class="shop-empty">Your template cart is empty.</p>';
    } else {
      templateCart.forEach(function (item, index) {
        const row = document.createElement("div");
        row.className = "shop-cart-row";
        row.innerHTML = `
          <span class="shop-cart-row-name">${item.name}</span>
          <span class="shop-cart-row-price">${money(item.price)}</span>
          <button class="shop-remove-btn" type="button" data-shop-remove="${index}">Remove</button>
        `;
        shopItems.appendChild(row);
      });
    }

    const total = templateCart.reduce((sum, item) => sum + Number(item.price), 0);
    shopTotal.textContent = money(total);
    shopCount.textContent = `${templateCart.length} ${templateCart.length === 1 ? "item" : "items"}`;

    shopItems.querySelectorAll("[data-shop-remove]").forEach(function (button) {
      button.addEventListener("click", function () {
        templateCart.splice(Number(this.dataset.shopRemove), 1);
        renderCart();
      });
    });
  }

  shopTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const selected = this.dataset.shopFilter;

      shopTabs.forEach(function (item) {
        item.classList.toggle("active", item === tab);
      });

      shopSections.forEach(function (section) {
        section.hidden = section.dataset.shopSection !== selected;
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  shopAddButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      templateCart.push({
        name: this.dataset.name,
        category: this.dataset.category,
        price: Number(this.dataset.price)
      });

      renderCart();

      const cart = document.querySelector("[data-shop-cart]");
      if (cart) {
        cart.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  shopClear.addEventListener("click", function () {
    templateCart = [];
    renderCart();
  });

  shopWhatsapp.addEventListener("click", function () {
    if (!templateCart.length) {
      alert("Please add at least one template to the cart.");
      return;
    }

    const total = templateCart.reduce((sum, item) => sum + Number(item.price), 0);

    const lines = [
      "🛍️ NEW TEMPLATE ORDER",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "📦 Selected Templates:"
    ];

    templateCart.forEach(function (item) {
      lines.push(`• ${item.name} — ${money(item.price)}`);
    });

    lines.push(
      "",
      `💰 TOTAL: ${money(total)}`,
      "",
      "📌 Order Type: Template Shop",
      "",
      "Please confirm my template order."
    );

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  });

  renderCart();
})();
