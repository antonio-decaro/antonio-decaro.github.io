document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  
//   navLinks.forEach(link => {
//       link.addEventListener("click", function(e) {
//           e.preventDefault();

//           const targetId = this.getAttribute("href").substring(1);
//           const targetElement = document.getElementById(targetId);

//           window.scrollTo({
//               top: targetElement.offsetTop - 60,
//               behavior: "smooth"
//           });
//       });
//   });

  // Fade-in effect for main content
  const mainContent = document.querySelector("main");
  
  setTimeout(() => {
      mainContent.style.opacity = "1";
  }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typed-name');
    const name = nameElement.textContent;
    nameElement.textContent = '';

    let index = 0;

    function type() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(type, 50); // Faster typing speed (50ms delay)
        } else {
            // Start blinking underscore after typing is done
            blinkUnderscore();
        }
    }

    function blinkUnderscore() {
        const underscore = document.createElement('span');
        underscore.textContent = '_';
        underscore.style.animation = 'blink 0.5s infinite'; // CSS animation for blinking
        nameElement.appendChild(underscore);
    }

    type();
});
document.addEventListener('DOMContentLoaded', function() {
    const showBackgroundBtn = document.getElementById('show-background');
    const showResearchBtn = document.getElementById('show-research');
    const backgroundSection = document.getElementById('background-section');
    const researchSection = document.getElementById('research-section');

    showBackgroundBtn.addEventListener('click', function() {
        researchSection.style.opacity = '0';
        showBackgroundBtn.classList.add('active');
        showResearchBtn.classList.remove('active');
        setTimeout(() => {
            backgroundSection.style.opacity = '1';
            backgroundSection.style.display = 'block';
            researchSection.style.display = 'none';
        }, 300);
    });

    showResearchBtn.addEventListener('click', function() {
        backgroundSection.style.opacity = '0';
        showResearchBtn.classList.add('active');
        showBackgroundBtn.classList.remove('active');
        setTimeout(() => {
            researchSection.style.opacity = '1';
            backgroundSection.style.display = 'none';
            researchSection.style.display = 'block';
        }, 300);
    });
});
