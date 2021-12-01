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

let totalChances = 0;

function getSelectedValue1() {
  var selectAgeValue = document.getElementById("selectAge").value;
}
function getSelectedValue2() {
  var selectRaceValue = document.getElementById("selectRace").value;
}

function getSelectedValue3M() {
  let chancesOfDivorce3M = 0;
  var previousPartners3M = document.getElementById("selectPartners3M").value;
  if (previousPartners3M >= 16) {
    totalChances += 0.6;
  } else if (previousPartners3M > 5 && previousPartners3M <= 15) {
    totalChances += 0.5;
  } else if (previousPartners3M > 2 && previousPartners3M <= 4) {
    totalChances += 0.4;
  } else if (previousPartners3M == 1) {
    totalChances += 0.3;
  } else {
    totalChances += 0;
  }
  console.log(totalChances);
}

function getSelectedValue4M() {
  let chancesOfDivorce4M = 0;
  var virginityAgeValue4M = document.getElementById("virginAge4M").value;
  if (virginityAgeValue4M >= 19) {
    totalChances += 0.0;
  } else if (virginityAgeValue4M == 18) {
    totalChances += 0.25;
  } else if (virginityAgeValue4M == 17) {
    totalChances += 0.25;
  } else if (virginityAgeValue4M == 16) {
    totalChances += 0.3;
  } else if (virginityAgeValue4M == 15) {
    totalChances += 0.3;
  } else if (virginityAgeValue4M == 14) {
    totalChances += 0.4;
  } else if (virginityAgeValue4M == 13) {
    totalChances += 0.4;
  } else if (virginityAgeValue4M == 12) {
    totalChances += 0.5;
  }
  console.log(totalChances);
}

function getSelectedValue5M() {
  let chancesOfDivorce5M = 0;
  var religiousNessValue5M = document.getElementById("religiousNess5M").value;
  if (religiousNessValue5M === "Somewhat important") {
    totalChances += 0.1;
  }
  if (religiousNessValue5M === "Not important") {
    totalChances += 0.2;
  }
  console.log(totalChances);
}

function getSelectedValue6M() {
  let chancesOfDivorce6M = 0;
  var educatEdValue6M = document.getElementById("educatEd6M").value;
  if (educatEdValue6M != "Graduate") {
    totalChances += 0.3;
  }
  console.log(totalChances);
}

function getSelectedValue7M() {
  let chancesOfDivorce7M = 0;
  var isFatherPresentValue7M = document.getElementById("isFatherPresent7M")
    .value;
  if (isFatherPresentValue7M === "oneParent") {
    chancesOfDivorce7M += 0.14;
  }
  console.log(chancesOfDivorce7M);
}

function getSelectedValue8M() {
  let chancesOfDivorce8M = 0;
  var rapeVictimValue8M = document.getElementById("rapeVictim8M").value;
  if (rapeVictimValue8M === "Yes") {
    chancesOfDivorce8M += 0.23;
  }
  console.log(chancesOfDivorce8M);
}

function getSelectedValue9M() {
  let chancesOfDivorce9M = 0;
  var mentallyIllValue9M = document.getElementById("mentallyIll9M").value;
  if (mentallyIllValue9M === "1") {
    chancesOfDivorce9M += 0.16;
  }
  console.log(chancesOfDivorce9M);
}

// var marriageRaceValue = document.getElementById("marriageRace").value;
// console.log(getSelectedValue10());

// function ultimateChances() {
function getSelectedValue11M() {
  let chancesOfDivorce11M = 0;
  var outOfWedlockValue11M = document.getElementById("outOfWedlock11M").value;
  if (outOfWedlockValue11M === "singleMom") {
    totalChances += 0.28;
  }
  console.log(totalChances);
}

finalChances =
  (chancesOfDivorce3M +
    chancesOfDivorce4M +
    chancesOfDivorce5M +
    chancesOfDivorce6M +
    chancesOfDivorce7M +
    chancesOfDivorce8M +
    chancesOfDivorce9M +
    chancesOfDivorce11M) /
  8;
console.log(finalChances);

// function finalDivorceRate() {
//   // let hisTotalDivorceRate = 0;
//   let hisTotalDivorceRate = getSelectedValue1M + getSelectedValue2M;
// }
// console.log(getSelectedValue11M());

// var chancesOfDivorce = 0;
// riskFactors =
//   ageGap +
//   race +
//   previousPartners +
//   virginityAge +
//   religiousNess +
//   educatEd +
//   fatherPresent +
//   raped +
//   mentallyIll +
//   interRacial;

// function ageGap(yourAge, theirAge) {
//   return yourAge - theirAge;
// }

// if (ageGap > 5) {
//   chancesOfDivorce + x;
// } else if (ageGap <= 5) {
//   chancesOfDivorce + 0;
// }

// // if (race === whiteWoman && whiteWomanAge >= 20 && whiteWomanAge < 30) {
// //   chancesOfDivorce - 0.15;
// // }

// if (interRacial === true) {
//   chancesOfDivorce + x;
// }

// chancesOfDivorceNow =
//   0.15 + 0.12 + 0.14 + 0.16 + 0.14 + 0.15 + 0.0 + 0.5 + 0.2 + 0.7;

// function marriage(riskFactors) {
//   chancesOfDivorceNow / 11;
// }

// console.log(marriage);

//========================= Her functions

function getSelectedValue1F() {
  var selectAgeValue = document.getElementById("selectAgeF").value;
}
function getSelectedValue2F() {
  var selectRaceValue = document.getElementById("selectRaceF").value;
}

function getSelectedValue3F() {
  let chancesOfDivorce3F = 0;
  var previousPartners3F = document.getElementById("selectPartners3F").value;
  if (previousPartners3F >= 16) {
    chancesOfDivorce3F += 0.6;
  } else if (previousPartners3F > 5 && previousPartners3F <= 15) {
    chancesOfDivorce3F += 0.5;
  } else if (previousPartners3F > 2 && previousPartners3F <= 4) {
    chancesOfDivorce3F += 0.4;
  } else if (previousPartners3F == 1) {
    chancesOfDivorce3F += 0.3;
  } else {
    chancesOfDivorce3F += 0;
  }
  console.log(chancesOfDivorce3F);
}

function getSelectedValue4F() {
  let chancesOfDivorce4F = 0;
  var virginityAgeValue4F = document.getElementById("virginAge4F").value;
  if (virginityAgeValue4F >= 19) {
    chancesOfDivorce4F += 0.0;
  } else if (virginityAgeValue4F == 18) {
    chancesOfDivorce4F += 0.25;
  } else if (virginityAgeValue4F == 17) {
    chancesOfDivorce4F += 0.25;
  } else if (virginityAgeValue4F == 16) {
    chancesOfDivorce4F += 0.3;
  } else if (virginityAgeValue4F == 15) {
    chancesOfDivorce4F += 0.3;
  } else if (virginityAgeValue4F == 14) {
    chancesOfDivorce4F += 0.4;
  } else if (virginityAgeValue4F == 13) {
    chancesOfDivorce4F += 0.4;
  } else if (virginityAgeValue4F == 12) {
    chancesOfDivorce4F += 0.5;
  }
  console.log(chancesOfDivorce4F);
}

function getSelectedValue5F() {
  let chancesOfDivorce5F = 0;
  var religiousNessValue5F = document.getElementById("religiousNess5F").value;
  if (religiousNessValue5F === "Somewhat important") {
    chancesOfDivorce5F += 0.1;
  }
  if (religiousNessValue5F === "Not important") {
    chancesOfDivorce5F += 0.2;
  }
  console.log(chancesOfDivorce5F);
}

function getSelectedValue6F() {
  let chancesOfDivorce6F = 0;
  var educatEdValue6F = document.getElementById("educatEd6F").value;
  if (educatEdValue6F != "Graduate") {
    chancesOfDivorce6F += 0.3;
  }
  console.log(chancesOfDivorce6F);
}

function getSelectedValue7F() {
  let chancesOfDivorce7F = 0;
  var isFatherPresentValue7F = document.getElementById("isFatherPresent7F")
    .value;
  if (isFatherPresentValue7F === "oneParent") {
    chancesOfDivorce7F += 0.14;
  }
  console.log(chancesOfDivorce7F);
}

function getSelectedValue8F() {
  let chancesOfDivorce8F = 0;
  var rapeVictimValue8F = document.getElementById("rapeVictim8F").value;
  if (rapeVictimValue8F === "Yes") {
    chancesOfDivorce8F += 0.23;
  }
  console.log(chancesOfDivorce);
}
function getSelectedValue9F() {
  let chancesOfDivorce9F = 0;
  var mentallyIllValue9F = document.getElementById("mentallyIll9F").value;
  if (mentallyIllValue9F === "1") {
    chancesOfDivorce9F += 0.16;
  }
  console.log(chancesOfDivorce9F);
}
function getSelectedValue10F() {
  var marriageRaceValue = document.getElementById("marriageRaceF").value;
  // console.log(getSelectedValue10());
}
function getSelectedValue11F() {
  let chancesOfDivorce11F = 0;
  var outOfWedlockValue11F = document.getElementById("outOfWedlock11F").value;
  if (outOfWedlockValue11F === "singleMom") {
    chancesOfDivorce11F += 0.28;
  }
  console.log(chancesOfDivorce11F);
}
