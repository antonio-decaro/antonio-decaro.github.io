document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  
  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop - 60,
              behavior: "smooth"
          });
      });
  });

  // Fade-in effect for main content
  const mainContent = document.querySelector("main");
  
  setTimeout(() => {
      mainContent.style.opacity = "1";
  }, 100);
});
