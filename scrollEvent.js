document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll('.animate-element');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      element.classList.add('visible');
    }
  });
});
