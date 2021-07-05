const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
