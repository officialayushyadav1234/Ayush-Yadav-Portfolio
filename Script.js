// Theme toggle with localStorage
const toggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    toggleButton.textContent = theme === 'dark' ? '🌙' : '☀️';
}
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme('dark');
}
toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Smooth section scroll
document.querySelectorAll('#nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Responsive navbar burger toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    // Minimize nav height on toggle mobile
    if (navMenu.classList.contains('open')) {
        navbar.classList.add('expanded');
        navbar.classList.remove('collapsed');
    } else {
        navbar.classList.remove('expanded');
        navbar.classList.add('collapsed');
    }
});
// Collapse nav on link click (mobile behavior)
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navbar.classList.remove('expanded');
        navbar.classList.add('collapsed');
    });
});


// Hide nav on scroll down, show on up
let lastScrollY = window.scrollY;
window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

