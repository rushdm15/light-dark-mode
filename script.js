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

//========================= Him functions

function getSelectedValue1() {
  var selectAgeValue = document.getElementById("selectAge").value;
}
function getSelectedValue2() {
  var selectRaceValue = document.getElementById("selectRace").value;
}

function getSelectedValue3M() {
  let totalChances3 = 0;
  var previousPartners3M = document.getElementById("selectPartners3M").value;
  if (previousPartners3M >= 16) {
    totalChances3 = 0.8;
  } else if (previousPartners3M >= 5 && previousPartners3M <= 15) {
    totalChances3 = 0.7;
  } else if (previousPartners3M >= 2 && previousPartners3M <= 4) {
    totalChances3 = 0.6;
  } else if (previousPartners3M == 1) {
    totalChances3 = 0.5;
  } else {
    totalChances3 = 0.2;
  }

  //console.log(totalChances3);

  let totalChances4 = 0;
  var virginityAgeValue4M = document.getElementById("virginAge4M").value;
  if (virginityAgeValue4M >= 26) {
    totalChances4 = 0.32;
  } else if (virginityAgeValue4M >= 23 && virginityAgeValue4M <= 25) {
    totalChances4 = 0.38;
  } else if (virginityAgeValue4M >= 21 && virginityAgeValue4M <= 22) {
    totalChances4 = 0.33;
  } else if (virginityAgeValue4M >= 19 && virginityAgeValue4M <= 20) {
    totalChances4 = 0.37;
  } else if (virginityAgeValue4M >= 17 && virginityAgeValue4M <= 18) {
    totalChances4 = 0.53;
  } else if (virginityAgeValue4M >= 15 && virginityAgeValue4M <= 16) {
    totalChances4 = 0.6;
  } else if (virginityAgeValue4M >= 13 && virginityAgeValue4M <= 14) {
    totalChances4 = 0.73;
  } else if (virginityAgeValue4M <= 12) {
    totalChances4 = 0.82;
  }
  // console.log(totalChances4);

  let totalChances5 = 0;
  var religiousNessValue5M = document.getElementById("religiousNess5M").value;
  if (religiousNessValue5M === "Very important") {
    totalChances5 = 0.4;
  }
  if (religiousNessValue5M === "Somewhat important") {
    totalChances5 = 0.5;
  }
  if (religiousNessValue5M === "Not important") {
    totalChances5 = 0.6;
  }
  // console.log(totalChances5);

  let totalChances6 = 0;
  var educatEdValue6M = document.getElementById("educatEd6M").value;
  if (educatEdValue6M === "dropout") {
    //console.log(totalChances6);
    totalChances6 = 0.45;
  }
  if (educatEdValue6M === "HS") {
    //console.log(totalChances6);
    totalChances6 = 0.53;
  }
  if (educatEdValue6M === "some uni") {
    //console.log(totalChances6);
    totalChances6 = 0.46;
  }
  if (educatEdValue6M === "Graduate") {
    //console.log(totalChances6);
    totalChances6 = 0.35;
  }

  let totalChances7 = 0;
  var isFatherPresentValue7M = document.getElementById("isFatherPresent7M")
    .value;
  if (isFatherPresentValue7M === "oneParent") {
    totalChances7 = 0.43;
    //console.log(totalChances7);
  }
  if (isFatherPresentValue7M === "twoParent") {
    totalChances7 = 0.29;
    //console.log(totalChances7);
  }

  let totalChances8 = 0;
  var rapeVictimValue8M = document.getElementById("rapeVictim8M").value;
  if (rapeVictimValue8M === "Yes") {
    totalChances8 = 0.63;
    //console.log(totalChances8);
  }
  if (rapeVictimValue8M === "No") {
    totalChances8 = 0.4;
    //console.log(totalChances8);
  }

  let totalChances9 = 0;
  var mentallyIllValue9M = document.getElementById("mentallyIll9M").value;
  if (mentallyIllValue9M === "1") {
    totalChances9 = 0.56;
    //console.log(totalChances9);
  }
  if (mentallyIllValue9M === "2") {
    totalChances9 = 0.4;
    //console.log(totalChances9);
  }
  // console.log(totalChances9);

  let totalChances11 = 0;
  var outOfWedlockValue11M = document.getElementById("outOfWedlock11M").value;
  if (outOfWedlockValue11M === "singleMom") {
    totalChances11 = 0.68;
    // console.log(totalChances11);
  }
  if (outOfWedlockValue11M === "basedMom") {
    totalChances11 = 0.4;
    // console.log(totalChances11);
  }

  var finalChances =
    (totalChances3 +
      totalChances4 +
      totalChances5 +
      totalChances9 +
      totalChances11 +
      totalChances6 +
      totalChances7 +
      totalChances8) /
    8;
  console.log(finalChances);
}

//========================= Her functions

function getSelectedValue1() {
  var selectAgeValue = document.getElementById("selectAge").value;
}
function getSelectedValue2() {
  var selectRaceValue = document.getElementById("selectRace").value;
}

function getSelectedValue3M() {
  let totalChances3 = 0;
  var previousPartners3M = document.getElementById("selectPartners3M").value;
  if (previousPartners3M >= 16) {
    totalChances3 = 0.8;
  } else if (previousPartners3M >= 5 && previousPartners3M <= 15) {
    totalChances3 = 0.7;
  } else if (previousPartners3M >= 2 && previousPartners3M <= 4) {
    totalChances3 = 0.6;
  } else if (previousPartners3M == 1) {
    totalChances3 = 0.5;
  } else {
    totalChances3 = 0.2;
  }

  //console.log(totalChances3);

  let totalChances4 = 0;
  var virginityAgeValue4M = document.getElementById("virginAge4M").value;
  if (virginityAgeValue4M >= 26) {
    totalChances4 = 0.32;
  } else if (virginityAgeValue4M >= 23 && virginityAgeValue4M <= 25) {
    totalChances4 = 0.38;
  } else if (virginityAgeValue4M >= 21 && virginityAgeValue4M <= 22) {
    totalChances4 = 0.33;
  } else if (virginityAgeValue4M >= 19 && virginityAgeValue4M <= 20) {
    totalChances4 = 0.37;
  } else if (virginityAgeValue4M >= 17 && virginityAgeValue4M <= 18) {
    totalChances4 = 0.53;
  } else if (virginityAgeValue4M >= 15 && virginityAgeValue4M <= 16) {
    totalChances4 = 0.6;
  } else if (virginityAgeValue4M >= 13 && virginityAgeValue4M <= 14) {
    totalChances4 = 0.73;
  } else if (virginityAgeValue4M <= 12) {
    totalChances4 = 0.82;
  }
  // console.log(totalChances4);

  let totalChances5 = 0;
  var religiousNessValue5M = document.getElementById("religiousNess5M").value;
  if (religiousNessValue5M === "Very important") {
    totalChances5 = 0.4;
  }
  if (religiousNessValue5M === "Somewhat important") {
    totalChances5 = 0.5;
  }
  if (religiousNessValue5M === "Not important") {
    totalChances5 = 0.6;
  }
  // console.log(totalChances5);

  let totalChances6 = 0;
  var educatEdValue6M = document.getElementById("educatEd6M").value;
  if (educatEdValue6M === "dropout") {
    //console.log(totalChances6);
    totalChances6 = 0.61;
  }
  if (educatEdValue6M === "HS") {
    //console.log(totalChances6);
    totalChances6 = 0.59;
  }
  if (educatEdValue6M === "some uni") {
    //console.log(totalChances6);
    totalChances6 = 0.51;
  }
  if (educatEdValue6M === "Graduate") {
    //console.log(totalChances6);
    totalChances6 = 0.32;
  }

  let totalChances7 = 0;
  var isFatherPresentValue7M = document.getElementById("isFatherPresent7M")
    .value;
  if (isFatherPresentValue7M === "oneParent") {
    totalChances7 = 0.43;
    //console.log(totalChances7);
  }
  if (isFatherPresentValue7M === "twoParent") {
    totalChances7 = 0.29;
    //console.log(totalChances7);
  }

  let totalChances8 = 0;
  var rapeVictimValue8M = document.getElementById("rapeVictim8M").value;
  if (rapeVictimValue8M === "Yes") {
    totalChances8 = 0.63;
    //console.log(totalChances8);
  }
  if (rapeVictimValue8M === "No") {
    totalChances8 = 0.4;
    //console.log(totalChances8);
  }

  let totalChances9 = 0;
  var mentallyIllValue9M = document.getElementById("mentallyIll9M").value;
  if (mentallyIllValue9M === "1") {
    totalChances9 = 0.56;
    //console.log(totalChances9);
  }
  if (mentallyIllValue9M === "2") {
    totalChances9 = 0.4;
    //console.log(totalChances9);
  }
  // console.log(totalChances9);

  let totalChances11 = 0;
  var outOfWedlockValue11M = document.getElementById("outOfWedlock11M").value;
  if (outOfWedlockValue11M === "singleMom") {
    totalChances11 = 0.68;
    // console.log(totalChances11);
  }
  if (outOfWedlockValue11M === "basedMom") {
    totalChances11 = 0.4;
    // console.log(totalChances11);
  }

  var finalChances =
    (totalChances3 +
      totalChances4 +
      totalChances5 +
      totalChances9 +
      totalChances11 +
      totalChances6 +
      totalChances7 +
      totalChances8) /
    8;
  console.log(finalChances);
}
