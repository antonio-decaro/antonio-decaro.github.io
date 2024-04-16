document.addEventListener("DOMContentLoaded", function() {
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
    // Get .main-content div
    const mainContent = document.querySelector('.main-content');
  
    // Get all H2 elements that are children of .main-content
    const h2Elements = mainContent.querySelectorAll('h2');
    if (h2Elements.length === 0) return;

    const title = mainContent.querySelector('h1');
    const index = mainContent.querySelector('#index');
    title.parentNode.insertBefore(index, title.nextSibling);

    const activeDiv = document.createElement('div');
    activeDiv.classList.add('active-content');
    mainContent.insertBefore(activeDiv, h2Elements[0]);
  
    const map = new Map();    

    // Convert NodeList to Array for easier manipulation
    const sections = Array.from(h2Elements).map(h2 => {
      const div = document.createElement('div');
      div.classList.add('content-section');
      let h2Clone = h2.cloneNode(true);
      let id = h2Clone.id;
      div.appendChild(h2Clone);
      
      // Append the H2 and its content to the div
      let nextElement = h2.nextElementSibling;
      while (nextElement && nextElement.tagName !== 'H2' && nextElement.tagName !== 'HR' && nextElement.parentNode === mainContent) {
        div.appendChild(nextElement.cloneNode(true));
        nextSibling = nextElement.nextElementSibling;
        nextElement.parentNode.removeChild(nextElement);
        nextElement = nextSibling;
      }
  
      // Replace the original H2 with the new div
    //   h2.parentNode.replaceChild(div, h2);
      h2.parentNode.removeChild(h2);
      map.set(id, div);
      return div;
    });

    // Get the index element
    const indexEl = document.getElementById('index');
    // Loop through each section
    sections.forEach(section => {
        // Get the H2 element within the section
        const h2Element = section.querySelector('h2');
        const id = h2Element.id;
        
        // Create a new index item
        const indexItem = document.createElement('a');
        indexItem.textContent = h2Element.textContent;
        indexItem.addEventListener('click', function() {
            indexItem.classList.add('active');
            // Remove the active class from all other index items
            const indexItems = document.querySelectorAll('.index-item a');
            indexItems.forEach(item => {
                if (item !== this) {
                    item.classList.remove('active');
                }
            });
            activeDiv.classList.add('fade-in');
        
            // Clear the activeDiv content
            while (activeDiv.firstChild) {
                activeDiv.removeChild(activeDiv.firstChild);
            }
        
            // Append the new content to the activeDiv

            const newContent = map.get(id).cloneNode(true);
            activeDiv.appendChild(newContent);
        
            setTimeout(() => {
                activeDiv.classList.remove('fade-in');
            }, 300);
        });
        
        // Append the index item to the index element
        const containingSpan = document.createElement('span');
        containingSpan.classList.add('index-item');
        containingSpan.appendChild(indexItem);
        indexEl.appendChild(containingSpan);
    });

    // Hide all sections except for the first
    if (sections.length > 0) {
        activeDiv.innerHTML = sections[0].innerHTML;
        index.querySelector('.index-item a').classList.add('active');
    }
});
  