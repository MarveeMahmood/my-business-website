console.log("Website is downloaded!");

// buttons
const themeButton = document.getElementById("themeButton");

// functions
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// listeners
themeButton.addEventListener("click", toggleTheme);