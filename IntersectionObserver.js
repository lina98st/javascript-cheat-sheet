document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.animate-element');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stoppt das Beobachten, nachdem die Animation gestartet wurde
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
