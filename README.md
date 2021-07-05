# Momentum

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
