# Momentum

## Challenge CheckList

- [ ] Clock.
- [ ] Username (with localStorage).
- [ ] To Do List (with localStorage)
- [ ] Random Background Image.
- [ ] Weather with Geolocation.
- [ ] Make pretty CSS 💖

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

- id가 `login-form`인 태그 안의 input과 button을 각각 불러오고, button에 click 이벤트가 발생하면 콘솔에 인사말을 표시하도록 만들었다.
- 이름을 입력하지 않고 button을 클릭했을 경우에 대한 해결책을 다음 강의에서 할 예정

**addEventListener(event, function)**
태그애 왼쪽 클릭, 오른쪽 클릭, 버튼 누르기 등등과 같은 이벤트가 발생했을 경우에 원하는 동작이 있으면 listener를 달아주어서 이벤트를 기다리도록 만든다.
`event`에는 기다릴 이벤트를 문자열로 넣어주고, `function`에는 이벤트가 발생했을 경우 실행할 메소드 이름을 넣어준다. 이 때 메소드의 실행은 js가 자동으로 해줘야 하기 때문에 메소드의 실행을 뜻하는 `()`은 빼고 메소드 이름만 넣어주어야 한다.

**querySelector()**
문자열 형태의 인자를 받는다.
부르고 싶은 태그를 css 선택자와 같은 형태로 적어준다. class는 `.`을, id는 `#`을 앞에 붙여주면 되고, css에서처럼 띄어쓰기로 경로를 표시할 수 있다.

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

- 입력하지 않았을 경우, JS에서 value를 불러온 후 `value === ""` 조건문을 이용해서 이름이 입력되지 않음을 확인하는 방법도 있지만 HTML이 가지고 있는 기본 기능을 사용하는 방법도 있다.
- 태그에 `required`를 넣어주면 input에 값이 입력되지 않았을 경우 값을 입력하라는 알림창이 뜬다. 단, `form` 태그 내부의 input에서만 사용할 수 있다.
- 길이의 제한을 두는 것도 마찬가지로 JS에서 확인하는 방법도 있지만 HTML이 가지고 있는 기능을 사용하는 방법이 더 간단하다.
- `input` 태그에 `maxlength=10` 같은 방식으로 제한하고 싶은 길이를 넣으면 `input` 태그는 그 이상 문자를 입력할 수 없게된다.
- `form` 태그 안의 데이터를 전송하려면 `input:submit` 태그가 필요하다.
- 이 때 `form` 태그 내부에 `input` 태그가 하나만 있다면 엔터로도 전송할 수 있다.

### #4.2 Events

- EventListener가 달려있는 이벤트가 발생하면 브라우저가 대신 해당하는 function을 실행시킴

```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato); // SubmitEvent {isTrusted: true, submitter: input, type: "submit", target: form#login-form, currentTarget: form#login-form, …}
}

loginForm.addEventListener("submit", onLoginSubmit);
```

- 이 때 브라우저가 function을 실행할 때 그냥 실행하는 것이 아니라 첫번째 argument에 기타 다른 정보들을 함께 넣고 실행한다. 사용하지 않아도 오류를 일으키지는 않음, 첫번째 인자를 넣으면 JS가 알아서 채워줌
  - 정보에는 이벤트를 발생시킨 주체, 이벤트가 발생한 시간, form 등등의 정보가 포함되어있다.
- [`preventDefault()`](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault) 이벤트의 전파를 막지 않고 그 이벤트를 취소함(여기선 새로고침이 막힘)
  - 브라우저의 기본 동작을 막는 것

### #4.3 Events part Two

- a 태그에 `event.preventDefault()`는 새로운 페이지로 이동하는 것을 막는다.

### #4.4 Getting Username

- 사용자가 닉네임을 입력하고 submit하면 `form`이 사라지게 만들기
  1. HTML 자체를 없애기
  2. CSS를 이용해서 숨기기

```js
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작이 실행되지 않게 막아줌(새로고침)
  loginForm.classList.add(HIDDEN_CLASSNAME); // 유저네임을 변수로 저장

  const username = loginInput.value; // hidden이라는 class name을 추가해서 form을 숨겨주고
  greeting.innerText = `Hello ${username}`; // 변수명을 h1에 넣어줌
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

- 유저네임을 입력받아 submit 버튼이 눌리면 submit의 기본동작인 새로고침이 막히고(`preventDefault()`) 입력 받은 form을 숨김
- form을 숨기면서 `h1`에 입력받은 유저네임을 넣고 class `hidden`을 지워서 가려져 있던 `h1`을 보이게 만듦
- 문자열과 변수를 합치는 방법
  1. "Hello " + username
  2. `Hello ${username}`

### #4.5 Saving Username

- localStorage
  - 브라우저가 정보를 저장, ex. 유튜브에 음량조절을 하고 새로고침을 하면 음량을 사용자가 설정한대로 유지
  - 모멘템에선 사용자 이름을 매번 물어보지 않고 저장하는데에 사용
  - `localStorage.setItem(key, value)`
  - `localStorage.getItem(key)`
  - `localStorage.removeItem(key)`

### #4.6 Loading Username

- 이미 저장된 `username`이 있을 경우 저장된 `username`을 사용하고, input 부분을 보여주지 않도록 변경
- 여러번 반복해서 사용하는 문자열은 오타의 가능성이 있기 때문에 변수로 만들어서 한번만 작성하는 것이 좋다.
- localStorage에 username이 없을 경우 input을 보여주고 username을 입력받아서 화면에 username과 인사말을 띄워주고
- localStorage에 username이 있을 경우 input을 보여주지 않고 저장된 username과 인사말을 띄워준다.

### #5.0 Intervals

```js
function sayHello() {
  console.log("hello");
}
setInterval(sayHello, 5000);
```

- 일정한 초마다 function을 실행함
  ex) 5초마다 console에 "hello"를 출력

## CLOCK

### #5.1 Timeouts and Dates

```js
setTimeout(sayHello, 5000);
```

- 정해진 초 후에 실행됨

```js
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 최초 실행시 1초 후부터 시간이 표시되기 때문에 처음부터 시간이 표시되도록 하기 위해 한번 실행해줌
setInterval(getClock, 1000);
```

- 실시간으로 갱신되는 시계

### #5.2 PadStart

```js
"1".padStart(2, "0");
```

- 2글자가 되지 않을 경우 "0"을 앞에 추가해줌
- 시, 분, 초가 0 ~ 9일 때 두 글자로 표현되도록 하기 위해 사용

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

- 정해놓은 랜덤 배열에서 랜덤으로 명언을 골라 화면에 출력되도록 만듦

### #6.1 Background

- quotes를 랜덤으로 보여주는 것과 같은 방법을 사용하면 됨
- 저장된 이미지들을 배열에 넣고, 인덱스를 랜덤으로 생성해서 불러옴
- 불러온 이미지를 새로 생성한 `img` 태그애 넣고 body에 `appendChild(tag)`를 사용해서 넣어줌

```js
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
```

## TO DO LIST

### #7.0 Setup

- todo-form, todo-input, todo-list 만듦
- input에 값을 넣고 엔터를 눌렀을 때 새로고침이 되지 않도록 만듦
- 값을 넣고 엔터를 누르면 값을 다른 변수에 저장하고 input의 값이 사라짐

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

- input에 값을 입력하고 엔터를 눌렀을 때, input에서 값이 사라짐과 동시에 todo-list에 값이 `li span` 형태로 추가

### #7.2 Deleting To Dos

- 전 강의에서 만든 투두리스트에 투두와 같은 방식으로 삭제버튼도 추가

```js
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
```

- 삭제 버튼이 클릭된 parentElement를 찾아서 삭제

### #7.3 Saving To Dos

```js
const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
```

- todo-list를 localStorage에 저장
- todo-list는 배열을 생성해서 저장
- localStorage에는 문자열만 저장할 수 있으므로 `JSON.stringify(Array)`를 사용하여 배열 형태의 문자열로 저장
- `JSON.stringify()`를 하지 않고 저장할 경우 `todo,todo,todo` 형태의 한 문자열로 저장됨
- 아직 해결되지 않은 문제점
  1. 새로고침을 했을 때 저장된 투두들을 보여주지 않음
  2. 새로고침할 때마다 todos 배열이 빈 배열로 초기화되기 때문에 새로고침 후에 투두를 계속 입력하면 전에 저장해놓은 투두들은 사라지고 새로고침 후에 적은 투두들이 덮어씌워짐

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

- 페이지가 로드될 때 실행된다. localStorage에 todos 가 저장되어있는지 확인 후 `JSON.parse()`를 사용해 문자열에서 배열로 바꿈
- 문자열로 바꾼 배열을 forEach를 사용해 모든 item에 `paintToDo`에 넘겨주어 화면에도 표시
- 매번 빈 배열로 초기화되는 toDos 배열 때문에 새로고침 후 새로운 투두를 넣으면 이전 투두들이 덮어쓰기 되어지는 문제를 해결하기 위해 `JSON.parse()`로 얻은 배열을 toDos 배열에 덮어쓰기 시켜서 페이지가 로드될 때마다 localStorage의 값을 가지고 있게함

### #7.6 Deleteing To Dos

- js는 화면에서 todo를 지울 때 어떤 todo인지 알지만 localStorage는 몇번째인지 알 수 없다.
- localStorage애서도 지우기 위해 각각의 todo에 `Date.now()`를 이용해서 id를 부여한다.

```js
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}
```

- [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)를 사용하여 삭제 버튼이 눌린 todo를 제외한 배열을 새로 만들어서 toDos에 넣어줌
- 새로 업데이트된 toDos를 localStorage에 저장

## WEATHER

### #8.0 Geolocation ~ #8.1 Weather API

- `navigator.geolocation.getCurrentPosition(Ok, Error);`
  - 현재 사용자의 위치를 받음
  - 성공했을 경우 Ok 함수를 실행하면서 사용자의 위치를 인자로 같이 전달

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

- `fetch(url)`로 API 요청을 보냄
- fetch는 promise라서 응답을 기다리지 않음, 응답을 기다린 후에 화면에 뿌려주기 위해 `.then(response => response.json())`으로 응답을 json 형식으로 리턴, 리턴받은 data의 구조를 확인하고 사용할 데이터를 가져와서 화면에 뿌려줌(`.then(data => {~~})`)
