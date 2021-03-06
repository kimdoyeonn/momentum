# Momentum

## Challenge CheckList

- [x] Clock.
- [x] Username (with localStorage).
- [x] To Do List (with localStorage)
- [x] Random Background Image.
- [x] Weather with Geolocation.
- [x] Make pretty CSS ๐

## LOGIN

### #4.0 Input Values

```html
<body>
  <div id="login-form">
    <input type="text" placeholder="What is your name?" />
    <button>Long In</button>
  </div>
  <script src="app.js"></script>
</body>
```

```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
```

- id๊ฐ `login-form`์ธ ํ๊ทธ ์์ input๊ณผ button์ ๊ฐ๊ฐ ๋ถ๋ฌ์ค๊ณ , button์ click ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด ์ฝ์์ ์ธ์ฌ๋ง์ ํ์ํ๋๋ก ๋ง๋ค์๋ค.
- ์ด๋ฆ์ ์๋ ฅํ์ง ์๊ณ  button์ ํด๋ฆญํ์ ๊ฒฝ์ฐ์ ๋ํ ํด๊ฒฐ์ฑ์ ๋ค์ ๊ฐ์์์ ํ  ์์ 

**addEventListener(event, function)**
ํ๊ทธ์  ์ผ์ชฝ ํด๋ฆญ, ์ค๋ฅธ์ชฝ ํด๋ฆญ, ๋ฒํผ ๋๋ฅด๊ธฐ ๋ฑ๋ฑ๊ณผ ๊ฐ์ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๊ฒฝ์ฐ์ ์ํ๋ ๋์์ด ์์ผ๋ฉด listener๋ฅผ ๋ฌ์์ฃผ์ด์ ์ด๋ฒคํธ๋ฅผ ๊ธฐ๋ค๋ฆฌ๋๋ก ๋ง๋ ๋ค.
`event`์๋ ๊ธฐ๋ค๋ฆด ์ด๋ฒคํธ๋ฅผ ๋ฌธ์์ด๋ก ๋ฃ์ด์ฃผ๊ณ , `function`์๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ์ ๊ฒฝ์ฐ ์คํํ  ๋ฉ์๋ ์ด๋ฆ์ ๋ฃ์ด์ค๋ค. ์ด ๋ ๋ฉ์๋์ ์คํ์ js๊ฐ ์๋์ผ๋ก ํด์ค์ผ ํ๊ธฐ ๋๋ฌธ์ ๋ฉ์๋์ ์คํ์ ๋ปํ๋ `()`์ ๋นผ๊ณ  ๋ฉ์๋ ์ด๋ฆ๋ง ๋ฃ์ด์ฃผ์ด์ผ ํ๋ค.

**querySelector()**
๋ฌธ์์ด ํํ์ ์ธ์๋ฅผ ๋ฐ๋๋ค.
๋ถ๋ฅด๊ณ  ์ถ์ ํ๊ทธ๋ฅผ css ์ ํ์์ ๊ฐ์ ํํ๋ก ์ ์ด์ค๋ค. class๋ `.`์, id๋ `#`์ ์์ ๋ถ์ฌ์ฃผ๋ฉด ๋๊ณ , css์์์ฒ๋ผ ๋์ด์ฐ๊ธฐ๋ก ๊ฒฝ๋ก๋ฅผ ํ์ํ  ์ ์๋ค.

### #4.1 Form Submission

```html
<body>
  <form id="login-form">
    <input
      required
      maxlength="15"
      type="text"
      placeholder="What is your name?"
    />
    <input type="submit" value="Log In" />
  </form>
  <script src="app.js"></script>
</body>
```

- ์๋ ฅํ์ง ์์์ ๊ฒฝ์ฐ, JS์์ value๋ฅผ ๋ถ๋ฌ์จ ํ `value === ""` ์กฐ๊ฑด๋ฌธ์ ์ด์ฉํด์ ์ด๋ฆ์ด ์๋ ฅ๋์ง ์์์ ํ์ธํ๋ ๋ฐฉ๋ฒ๋ ์์ง๋ง HTML์ด ๊ฐ์ง๊ณ  ์๋ ๊ธฐ๋ณธ ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ๋ ์๋ค.
- ํ๊ทธ์ `required`๋ฅผ ๋ฃ์ด์ฃผ๋ฉด input์ ๊ฐ์ด ์๋ ฅ๋์ง ์์์ ๊ฒฝ์ฐ ๊ฐ์ ์๋ ฅํ๋ผ๋ ์๋ฆผ์ฐฝ์ด ๋ฌ๋ค. ๋จ, `form` ํ๊ทธ ๋ด๋ถ์ input์์๋ง ์ฌ์ฉํ  ์ ์๋ค.
- ๊ธธ์ด์ ์ ํ์ ๋๋ ๊ฒ๋ ๋ง์ฐฌ๊ฐ์ง๋ก JS์์ ํ์ธํ๋ ๋ฐฉ๋ฒ๋ ์์ง๋ง HTML์ด ๊ฐ์ง๊ณ  ์๋ ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ด ๋ ๊ฐ๋จํ๋ค.
- `input` ํ๊ทธ์ `maxlength=10` ๊ฐ์ ๋ฐฉ์์ผ๋ก ์ ํํ๊ณ  ์ถ์ ๊ธธ์ด๋ฅผ ๋ฃ์ผ๋ฉด `input` ํ๊ทธ๋ ๊ทธ ์ด์ ๋ฌธ์๋ฅผ ์๋ ฅํ  ์ ์๊ฒ๋๋ค.
- `form` ํ๊ทธ ์์ ๋ฐ์ดํฐ๋ฅผ ์ ์กํ๋ ค๋ฉด `input:submit` ํ๊ทธ๊ฐ ํ์ํ๋ค.
- ์ด ๋ `form` ํ๊ทธ ๋ด๋ถ์ `input` ํ๊ทธ๊ฐ ํ๋๋ง ์๋ค๋ฉด ์ํฐ๋ก๋ ์ ์กํ  ์ ์๋ค.

### #4.2 Events

- EventListener๊ฐ ๋ฌ๋ ค์๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด ๋ธ๋ผ์ฐ์ ๊ฐ ๋์  ํด๋นํ๋ function์ ์คํ์ํด

```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato); // SubmitEventย {isTrusted: true, submitter: input, type: "submit", target: form#login-form, currentTarget: form#login-form,ย โฆ}
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- ์ด ๋ ๋ธ๋ผ์ฐ์ ๊ฐ function์ ์คํํ  ๋ ๊ทธ๋ฅ ์คํํ๋ ๊ฒ์ด ์๋๋ผ ์ฒซ๋ฒ์งธ argument์ ๊ธฐํ ๋ค๋ฅธ ์ ๋ณด๋ค์ ํจ๊ป ๋ฃ๊ณ  ์คํํ๋ค. ์ฌ์ฉํ์ง ์์๋ ์ค๋ฅ๋ฅผ ์ผ์ผํค์ง๋ ์์, ์ฒซ๋ฒ์งธ ์ธ์๋ฅผ ๋ฃ์ผ๋ฉด JS๊ฐ ์์์ ์ฑ์์ค
  - ์ ๋ณด์๋ ์ด๋ฒคํธ๋ฅผ ๋ฐ์์ํจ ์ฃผ์ฒด, ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ ์๊ฐ, form ๋ฑ๋ฑ์ ์ ๋ณด๊ฐ ํฌํจ๋์ด์๋ค.
- [`preventDefault()`](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault) ์ด๋ฒคํธ์ ์ ํ๋ฅผ ๋ง์ง ์๊ณ  ๊ทธ ์ด๋ฒคํธ๋ฅผ ์ทจ์ํจ(์ฌ๊ธฐ์  ์๋ก๊ณ ์นจ์ด ๋งํ)
  - ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ ๋์์ ๋ง๋ ๊ฒ

### #4.3 Events part Two

- a ํ๊ทธ์ `event.preventDefault()`๋ ์๋ก์ด ํ์ด์ง๋ก ์ด๋ํ๋ ๊ฒ์ ๋ง๋๋ค.

### #4.4 Getting Username

- ์ฌ์ฉ์๊ฐ ๋๋ค์์ ์๋ ฅํ๊ณ  submitํ๋ฉด `form`์ด ์ฌ๋ผ์ง๊ฒ ๋ง๋ค๊ธฐ
  1. HTML ์์ฒด๋ฅผ ์์ ๊ธฐ
  2. CSS๋ฅผ ์ด์ฉํด์ ์จ๊ธฐ๊ธฐ

```js
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // ๊ธฐ๋ณธ๋์์ด ์คํ๋์ง ์๊ฒ ๋ง์์ค(์๋ก๊ณ ์นจ)
  loginForm.classList.add(HIDDEN_CLASSNAME); // ์ ์ ๋ค์์ ๋ณ์๋ก ์ ์ฅ

  const username = loginInput.value; // hidden์ด๋ผ๋ class name์ ์ถ๊ฐํด์ form์ ์จ๊ฒจ์ฃผ๊ณ 
  greeting.innerText = `Hello ${username}`; // ๋ณ์๋ช์ h1์ ๋ฃ์ด์ค
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

- ์ ์ ๋ค์์ ์๋ ฅ๋ฐ์ submit ๋ฒํผ์ด ๋๋ฆฌ๋ฉด submit์ ๊ธฐ๋ณธ๋์์ธ ์๋ก๊ณ ์นจ์ด ๋งํ๊ณ (`preventDefault()`) ์๋ ฅ ๋ฐ์ form์ ์จ๊น
- form์ ์จ๊ธฐ๋ฉด์ `h1`์ ์๋ ฅ๋ฐ์ ์ ์ ๋ค์์ ๋ฃ๊ณ  class `hidden`์ ์ง์์ ๊ฐ๋ ค์ ธ ์๋ `h1`์ ๋ณด์ด๊ฒ ๋ง๋ฆ
- ๋ฌธ์์ด๊ณผ ๋ณ์๋ฅผ ํฉ์น๋ ๋ฐฉ๋ฒ
  1. "Hello " + username
  2. `Hello ${username}`

### #4.5 Saving Username

- localStorage
  - ๋ธ๋ผ์ฐ์ ๊ฐ ์ ๋ณด๋ฅผ ์ ์ฅ, ex. ์ ํ๋ธ์ ์๋์กฐ์ ์ ํ๊ณ  ์๋ก๊ณ ์นจ์ ํ๋ฉด ์๋์ ์ฌ์ฉ์๊ฐ ์ค์ ํ๋๋ก ์ ์ง
  - ๋ชจ๋ฉํ์์  ์ฌ์ฉ์ ์ด๋ฆ์ ๋งค๋ฒ ๋ฌผ์ด๋ณด์ง ์๊ณ  ์ ์ฅํ๋๋ฐ์ ์ฌ์ฉ
  - `localStorage.setItem(key, value)`
  - `localStorage.getItem(key)`
  - `localStorage.removeItem(key)`

### #4.6 Loading Username

- ์ด๋ฏธ ์ ์ฅ๋ `username`์ด ์์ ๊ฒฝ์ฐ ์ ์ฅ๋ `username`์ ์ฌ์ฉํ๊ณ , input ๋ถ๋ถ์ ๋ณด์ฌ์ฃผ์ง ์๋๋ก ๋ณ๊ฒฝ
- ์ฌ๋ฌ๋ฒ ๋ฐ๋ณตํด์ ์ฌ์ฉํ๋ ๋ฌธ์์ด์ ์คํ์ ๊ฐ๋ฅ์ฑ์ด ์๊ธฐ ๋๋ฌธ์ ๋ณ์๋ก ๋ง๋ค์ด์ ํ๋ฒ๋ง ์์ฑํ๋ ๊ฒ์ด ์ข๋ค.
- localStorage์ username์ด ์์ ๊ฒฝ์ฐ input์ ๋ณด์ฌ์ฃผ๊ณ  username์ ์๋ ฅ๋ฐ์์ ํ๋ฉด์ username๊ณผ ์ธ์ฌ๋ง์ ๋์์ฃผ๊ณ 
- localStorage์ username์ด ์์ ๊ฒฝ์ฐ input์ ๋ณด์ฌ์ฃผ์ง ์๊ณ  ์ ์ฅ๋ username๊ณผ ์ธ์ฌ๋ง์ ๋์์ค๋ค.

### #5.0 Intervals

```js
function sayHello() {
  console.log("hello");
}
setInterval(sayHello, 5000);
```

- ์ผ์ ํ ์ด๋ง๋ค function์ ์คํํจ
  ex) 5์ด๋ง๋ค console์ "hello"๋ฅผ ์ถ๋ ฅ

## CLOCK

### #5.1 Timeouts and Dates

```js
setTimeout(sayHello, 5000);
```

- ์ ํด์ง ์ด ํ์ ์คํ๋จ

```js
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // ์ต์ด ์คํ์ 1์ด ํ๋ถํฐ ์๊ฐ์ด ํ์๋๊ธฐ ๋๋ฌธ์ ์ฒ์๋ถํฐ ์๊ฐ์ด ํ์๋๋๋ก ํ๊ธฐ ์ํด ํ๋ฒ ์คํํด์ค
setInterval(getClock, 1000);
```

- ์ค์๊ฐ์ผ๋ก ๊ฐฑ์ ๋๋ ์๊ณ

### #5.2 PadStart

```js
"1".padStart(2, "0");
```

- 2๊ธ์๊ฐ ๋์ง ์์ ๊ฒฝ์ฐ "0"์ ์์ ์ถ๊ฐํด์ค
- ์, ๋ถ, ์ด๊ฐ 0 ~ 9์ผ ๋ ๋ ๊ธ์๋ก ํํ๋๋๋ก ํ๊ธฐ ์ํด ์ฌ์ฉ

## QUOTES AND BACKGROUND

### #6.0 Quotes

```js
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todayQuote);
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
```

- ์ ํด๋์ ๋๋ค ๋ฐฐ์ด์์ ๋๋ค์ผ๋ก ๋ช์ธ์ ๊ณจ๋ผ ํ๋ฉด์ ์ถ๋ ฅ๋๋๋ก ๋ง๋ฆ

### #6.1 Background

- quotes๋ฅผ ๋๋ค์ผ๋ก ๋ณด์ฌ์ฃผ๋ ๊ฒ๊ณผ ๊ฐ์ ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๋ฉด ๋จ
- ์ ์ฅ๋ ์ด๋ฏธ์ง๋ค์ ๋ฐฐ์ด์ ๋ฃ๊ณ , ์ธ๋ฑ์ค๋ฅผ ๋๋ค์ผ๋ก ์์ฑํด์ ๋ถ๋ฌ์ด
- ๋ถ๋ฌ์จ ์ด๋ฏธ์ง๋ฅผ ์๋ก ์์ฑํ `img` ํ๊ทธ์  ๋ฃ๊ณ  body์ `appendChild(tag)`๋ฅผ ์ฌ์ฉํด์ ๋ฃ์ด์ค

```js
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
```

## TO DO LIST

### #7.0 Setup

- todo-form, todo-input, todo-list ๋ง๋ฆ
- input์ ๊ฐ์ ๋ฃ๊ณ  ์ํฐ๋ฅผ ๋๋ ์ ๋ ์๋ก๊ณ ์นจ์ด ๋์ง ์๋๋ก ๋ง๋ฆ
- ๊ฐ์ ๋ฃ๊ณ  ์ํฐ๋ฅผ ๋๋ฅด๋ฉด ๊ฐ์ ๋ค๋ฅธ ๋ณ์์ ์ ์ฅํ๊ณ  input์ ๊ฐ์ด ์ฌ๋ผ์ง

### #7.1 Adding ToDos

```js
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}
```

- input์ ๊ฐ์ ์๋ ฅํ๊ณ  ์ํฐ๋ฅผ ๋๋ ์ ๋, input์์ ๊ฐ์ด ์ฌ๋ผ์ง๊ณผ ๋์์ todo-list์ ๊ฐ์ด `li span` ํํ๋ก ์ถ๊ฐ

### #7.2 Deleting To Dos

- ์  ๊ฐ์์์ ๋ง๋  ํฌ๋๋ฆฌ์คํธ์ ํฌ๋์ ๊ฐ์ ๋ฐฉ์์ผ๋ก ์ญ์ ๋ฒํผ๋ ์ถ๊ฐ

```js
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
```

- ์ญ์  ๋ฒํผ์ด ํด๋ฆญ๋ parentElement๋ฅผ ์ฐพ์์ ์ญ์ 

### #7.3 Saving To Dos

```js
const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
```

- todo-list๋ฅผ localStorage์ ์ ์ฅ
- todo-list๋ ๋ฐฐ์ด์ ์์ฑํด์ ์ ์ฅ
- localStorage์๋ ๋ฌธ์์ด๋ง ์ ์ฅํ  ์ ์์ผ๋ฏ๋ก `JSON.stringify(Array)`๋ฅผ ์ฌ์ฉํ์ฌ ๋ฐฐ์ด ํํ์ ๋ฌธ์์ด๋ก ์ ์ฅ
- `JSON.stringify()`๋ฅผ ํ์ง ์๊ณ  ์ ์ฅํ  ๊ฒฝ์ฐ `todo,todo,todo` ํํ์ ํ ๋ฌธ์์ด๋ก ์ ์ฅ๋จ
- ์์ง ํด๊ฒฐ๋์ง ์์ ๋ฌธ์ ์ 
  1. ์๋ก๊ณ ์นจ์ ํ์ ๋ ์ ์ฅ๋ ํฌ๋๋ค์ ๋ณด์ฌ์ฃผ์ง ์์
  2. ์๋ก๊ณ ์นจํ  ๋๋ง๋ค todos ๋ฐฐ์ด์ด ๋น ๋ฐฐ์ด๋ก ์ด๊ธฐํ๋๊ธฐ ๋๋ฌธ์ ์๋ก๊ณ ์นจ ํ์ ํฌ๋๋ฅผ ๊ณ์ ์๋ ฅํ๋ฉด ์ ์ ์ ์ฅํด๋์ ํฌ๋๋ค์ ์ฌ๋ผ์ง๊ณ  ์๋ก๊ณ ์นจ ํ์ ์ ์ ํฌ๋๋ค์ด ๋ฎ์ด์์์ง

### #7.4 Loading To Dos

```js
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
```

- ํ์ด์ง๊ฐ ๋ก๋๋  ๋ ์คํ๋๋ค. localStorage์ todos ๊ฐ ์ ์ฅ๋์ด์๋์ง ํ์ธ ํ `JSON.parse()`๋ฅผ ์ฌ์ฉํด ๋ฌธ์์ด์์ ๋ฐฐ์ด๋ก ๋ฐ๊ฟ
- ๋ฌธ์์ด๋ก ๋ฐ๊พผ ๋ฐฐ์ด์ forEach๋ฅผ ์ฌ์ฉํด ๋ชจ๋  item์ `paintToDo`์ ๋๊ฒจ์ฃผ์ด ํ๋ฉด์๋ ํ์
- ๋งค๋ฒ ๋น ๋ฐฐ์ด๋ก ์ด๊ธฐํ๋๋ toDos ๋ฐฐ์ด ๋๋ฌธ์ ์๋ก๊ณ ์นจ ํ ์๋ก์ด ํฌ๋๋ฅผ ๋ฃ์ผ๋ฉด ์ด์  ํฌ๋๋ค์ด ๋ฎ์ด์ฐ๊ธฐ ๋์ด์ง๋ ๋ฌธ์ ๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํด `JSON.parse()`๋ก ์ป์ ๋ฐฐ์ด์ toDos ๋ฐฐ์ด์ ๋ฎ์ด์ฐ๊ธฐ ์์ผ์ ํ์ด์ง๊ฐ ๋ก๋๋  ๋๋ง๋ค localStorage์ ๊ฐ์ ๊ฐ์ง๊ณ  ์๊ฒํจ

### #7.6 Deleteing To Dos

- js๋ ํ๋ฉด์์ todo๋ฅผ ์ง์ธ ๋ ์ด๋ค todo์ธ์ง ์์ง๋ง localStorage๋ ๋ช๋ฒ์งธ์ธ์ง ์ ์ ์๋ค.
- localStorage์ ์๋ ์ง์ฐ๊ธฐ ์ํด ๊ฐ๊ฐ์ todo์ `Date.now()`๋ฅผ ์ด์ฉํด์ id๋ฅผ ๋ถ์ฌํ๋ค.

```js
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}
```

- [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)๋ฅผ ์ฌ์ฉํ์ฌ ์ญ์  ๋ฒํผ์ด ๋๋ฆฐ todo๋ฅผ ์ ์ธํ ๋ฐฐ์ด์ ์๋ก ๋ง๋ค์ด์ toDos์ ๋ฃ์ด์ค
- ์๋ก ์๋ฐ์ดํธ๋ toDos๋ฅผ localStorage์ ์ ์ฅ

## WEATHER

### #8.0 Geolocation ~ #8.1 Weather API

- `navigator.geolocation.getCurrentPosition(Ok, Error);`
  - ํ์ฌ ์ฌ์ฉ์์ ์์น๋ฅผ ๋ฐ์
  - ์ฑ๊ณตํ์ ๊ฒฝ์ฐ Ok ํจ์๋ฅผ ์คํํ๋ฉด์ ์ฌ์ฉ์์ ์์น๋ฅผ ์ธ์๋ก ๊ฐ์ด ์ ๋ฌ

```js
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = ...

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```

- `fetch(url)`๋ก API ์์ฒญ์ ๋ณด๋
- fetch๋ promise๋ผ์ ์๋ต์ ๊ธฐ๋ค๋ฆฌ์ง ์์, ์๋ต์ ๊ธฐ๋ค๋ฆฐ ํ์ ํ๋ฉด์ ๋ฟ๋ ค์ฃผ๊ธฐ ์ํด `.then(response => response.json())`์ผ๋ก ์๋ต์ json ํ์์ผ๋ก ๋ฆฌํด, ๋ฆฌํด๋ฐ์ data์ ๊ตฌ์กฐ๋ฅผ ํ์ธํ๊ณ  ์ฌ์ฉํ  ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์์ ํ๋ฉด์ ๋ฟ๋ ค์ค(`.then(data => {~~})`)
