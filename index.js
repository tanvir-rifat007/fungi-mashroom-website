const toggleNav = document.querySelector('[aria-controls="primary-nav"]');

const primaryNav = document.querySelector("#primary-nav");

toggleNav.addEventListener("click", () => {
  const isExpanded = toggleNav.getAttribute("aria-expanded");

  if (isExpanded === "false") {
    toggleNav.setAttribute("aria-expanded", "true");
  } else {
    toggleNav.setAttribute("aria-expanded", "false");
  }
});
