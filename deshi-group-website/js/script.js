/* Deshi Group: lightweight progressive enhancement. */
document.documentElement.classList.remove("no-js");
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown-menu");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const closeDropdown = () => {
    if (!dropdownToggle || !dropdown) return;
    dropdownToggle.setAttribute("aria-expanded", "false");
    dropdown.classList.remove("open");
  };
  const closeMobile = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    body.classList.remove("menu-open");
  };
  navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("open", !open);
    body.classList.toggle("menu-open", !open);
    if (open) closeDropdown();
  });
  dropdownToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", String(!open));
    dropdown?.classList.toggle("open", !open);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-wrap")) closeDropdown();
    if (nav?.classList.contains("open") && !event.target.closest(".site-header")) closeMobile();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdown();
      closeMobile();
      navToggle?.focus();
    }
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobile));

  document.querySelectorAll("[data-year]").forEach((node) => node.textContent = new Date().getFullYear());

  const division = new URLSearchParams(location.search).get("division");
  const divisionSelect = document.querySelector("#division");
  if (division && divisionSelect) {
    const option = [...divisionSelect.options].find((item) => item.value === division);
    if (option) divisionSelect.value = division;
  }

  const form = document.querySelector("form[data-enhanced-validation]");
  const status = document.querySelector("#form-status");
  form?.addEventListener("submit", (event) => {
    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((field) => {
      const message = field.closest(".field")?.querySelector(".error-message");
      const valid = field.checkValidity();
      field.setAttribute("aria-invalid", String(!valid));
      if (message) message.textContent = valid ? "" : (field.validationMessage || "Please complete this field.");
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      event.preventDefault();
      if (status) status.textContent = "Please review the highlighted fields.";
      firstInvalid.focus();
    } else if (status) {
      status.textContent = "Submitting your enquiry…";
    }
  });
  form?.querySelectorAll("input, select, textarea").forEach((field) => field.addEventListener("input", () => {
    if (!field.hasAttribute("aria-invalid")) return;
    const valid = field.checkValidity();
    field.setAttribute("aria-invalid", String(!valid));
    const message = field.closest(".field")?.querySelector(".error-message");
    if (message) message.textContent = valid ? "" : field.validationMessage;
  }));

  const topButton = document.querySelector(".back-to-top");
  const toggleTop = () => topButton?.classList.toggle("visible", window.scrollY > 500);
  window.addEventListener("scroll", toggleTop, { passive: true });
  toggleTop();
  topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
});
