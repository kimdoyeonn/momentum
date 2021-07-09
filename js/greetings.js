const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작이 실행되지 않게 막아줌(새로고침)
  loginForm.classList.add(HIDDEN_CLASSNAME); // 유저네임을 변수로 저장

  const username = loginInput.value; // hidden이라는 class name을 추가해서 form을 숨겨주고
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`; // 변수명을 h1에 넣어줌
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
