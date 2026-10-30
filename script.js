console.log("Website is downloaded!");

// get buttons and form
const themeButton = document.getElementById("themeButton");

const infoButton = document.getElementById("infoButton");
const extraInfo = document.getElementById("extraInfo");


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

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

function checkForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in name, email and message.";
  } else {
    formMessage.textContent = "Thank you " + name + "! Your message is sent.";
    contactForm.reset();
  }
}

// listeners
themeButton.addEventListener("click", toggleTheme);

infoButton.addEventListener("click", toggleInfo);

contactForm.addEventListener("submit", checkForm);