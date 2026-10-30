console.log("Website is downloaded!");

// get buttons
const themeButton = document.getElementById("themeButton");
// show and hide info
const infoButton = document.getElementById("infoButton");
const extraInfo = document.getElementById("extraInfo");

// functions
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function toggleInfo() {
  extraInfo.hidden = !extraInfo.hidden;

  if (extraInfo.hidden) {
    infoButton.textContent = "Show more";
  } else {
    infoButton.textContent = "Show less";
  }
}

// listeners
themeButton.addEventListener("click", toggleTheme);

infoButton.addEventListener("click", toggleInfo);
