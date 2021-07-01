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
