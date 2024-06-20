// Smooth scroll functionality for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        // Scroll to the section smoothly
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMode(isDarkMode) {
    const element = document.body;
    const content = document.getElementById("DarkModetext");
    if (isDarkMode) {
        element.className = "dark-mode";
        content.innerText = "Dark Mode is ON";
    } else {
        element.className = "light-mode";
        content.innerText = "Dark Mode is OFF";
    }
}

function darkMode() {
    toggleMode(true);
}

function lightMode() {
    toggleMode(false);
}
