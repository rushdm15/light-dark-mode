const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

if (previousPartners >= 16) {
  chancesOfDivorce + 0.6;
}
if (previousPartners > 5 && previousPartners <= 15) {
  chancesOfDivorce + 0.5;
}
if (previousPartners > 2 && previousPartners <= 4) {
  chancesOfDivorce + 0.4;
}
if ((previousPartners = 1)) {
  chancesOfDivorce + 0.6;
}

if (virginityAge >= 23 && virginityAge <= 25) {
  chancesOfDivorce + 0.05;
}
if ((virginityAge = 13 || 14)) {
  chancesOfDivorce + 0.4;
}
if ((virginityAge = 15 || 16)) {
  chancesOfDivorce + 0.3;
}
if ((virginityAge = 17 || 18)) {
  chancesOfDivorce + 0.25;
}
if (virginityAge <= 12) {
  chancesOfDivorce + 0.5;
}

if (religiousNess === veryImportant) {
  chancesOfDivorce - 0.2;
} else if (religiousNess === someWhat) {
  chancesOfDivorce - 0.1;
}

if (educatEd === bachelorS) {
  chancesOfDivorce - 0.3;
}

if (fatherPresent === true) {
  chancesOfDivorce + 0.14;
}

if (raped === true) {
  chancesOfDivorce + 0.23;
}

if (mentallyIll === true) {
  chancesOfDivorce + 0.16;
}

if (interRacial === true) {
  chancesOfDivorce + x;
}

function marriage(riskFactors) {
  chancesOfDivorce / 11;
}
