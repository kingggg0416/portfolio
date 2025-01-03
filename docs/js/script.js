const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Date functionality
    let myDate = document.querySelector("#datee");
    if (myDate) {
        const yes = new Date().getFullYear();
        myDate.innerHTML = yes;
    }

    // Typewriter effect
    const typedTextSpan = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    if (typedTextSpan && cursor) {  // Only run typewriter if elements exist
        // Words with their corresponding colors
        const wordData = [
            { text: "economics.", color: "#2ecc71" },   // Green for money/growth
            { text: "technology.", color: "#3498db" },  // Blue for technology/innovation
            { text: "AI.", color: "#9b59b6" },          // Purple for AI/future
            { text: "entrepreneurship.", color: "#8B4513" }  // Saddle Brown for stability/foundation
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = wordData[wordIndex];
            
            if (isDeleting) {
                typedTextSpan.textContent = currentWord.text.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextSpan.textContent = currentWord.text.substring(0, charIndex + 1);
                charIndex++;
            }

            // Update color
            typedTextSpan.style.color = currentWord.color;
            cursor.style.backgroundColor = currentWord.color;

            cursor.classList.add('typing');

            let typeSpeed = isDeleting ? 100 : 200;

            if (!isDeleting && charIndex === currentWord.text.length) {
                cursor.classList.remove('typing');
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % wordData.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }

        // Start the animation with a slight delay
        setTimeout(type, 1000);
    }
});
