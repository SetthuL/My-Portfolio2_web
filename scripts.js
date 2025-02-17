   document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("home").classList.add("visible");
});

  function toggleSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('visible');
  });

  // Show the selected section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('visible');
  }

  // Active link in navigation
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`a[href='#${sectionId}']`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Scroll button
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
 