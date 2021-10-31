# Nwitter

Twitter (mini)clone with React and Firebase

# 프로젝트 구조

```
NWITTER
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .env
├── jsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── firebase.js
    ├── index.js
    └── routes
    │   ├── Auth.js
    │   ├── Editprofile.js
    │   ├── Home.js
    │   └── Profile.js
    └── components
        ├── App.js : IsLoggedIn 상태 관리
        ├── Navigation.js
        ├── Nweet.js
        └── Router.js
```

### 2.3 create-react-app

- npx : 일회성으로 노드 패키지를 설치해주는 도구. 한 번만 사용할 경우, npx로 설치 가능하다.

### 2.4 setting firebase

- `npm install firebase` : firebase 설치하기
- secret key 숨기기
  - .env 파일을 만들어, 비밀키 변수를 등록하여 비밀키가 필요한 다른 파일에 비밀키 변수(환경 변수)를 불러 참조한다.
  - CRA로 만든 리액트 프로젝트에서 .ENV 파일에 환경 변수를 정의하려면 변수 맨 앞에 `REACT_APP_`를 붙여야 한다.
  - .gitignore 파일에 .env를 추가한다.
  - 다른 파일에서 환경 변수를 사용할 경우, 환경 변수 앞에 `process.env.`를 붕여야 한다. .env 파일을 읽어 파일 안에 있는 변숫값을 불러온다는 의미이다.

### 3.2 setting router

- 라우터 : 입력된 주소를 보고 어떤 컴포넌트를 보여 줄지 판단한다.
- `npm install react-router-dom` : react-router-dom 설치하기
- 페이지는 routes 폴더에, 페이지를 이루는 구성 요소들은 components 폴더에 저장한다.

  ```
  Router.js
    └─ HashRouter
        └─ Swith : Switch를 사용하면 여러 가지 Route 중 하나만 렌더링 할 수 있다.
            └─ Route
  ```

### 3.3 using router

- 함수 컴포넌트는 상태관리를 위해 훅스(Hooks)를 사용한다.
- `useState`는 인자로 [상태, 상태 관리 함수 이름]과 같은 형태의 배열을 입력받는다.
- `<Route exact path="/">` : Route 컴포넌트의 exact path="/" 프롭스는 처음 접속했을 때의 경로이다. -> 루트 페이지

#### 공식문서

- [리액트 상태](https://ko.reactjs.org/docs/faq-state.html)
- [리액트 훅스](https://ko.reactjs.org/docs/hooks-intro.html)
- [리액트 useState 함수](https://ko.reactjs.org/docs/hooks-state.html)
- [ES6 구조 분해 할당](https://ko.javascript.info/destructuring-assignment)
- [리액트 프롭스](https://ko.reactjs.org/docs/components-and-props.html)

### 4.1 setting firebase login

- 코드의 가독성을 위해 상대경로에서 절대경로로 변경한다. jsconfig.json파일을 만들고, 이 파일은 리액트에 사용할 자바스크립트를 위한 설정파일이다. 아래 코드는 src 폴더를 기준으로 폴더나 파일 경로를 적을 수 있어 import 문의 가독성이 좋아진다.
  ```
  {
  "compilerOptions" : {
    "baseUrl": "src"
  },
  "include": ["src"]
  }
  ```
- 절대 경로의 아쉬운 점은 파일 이름과 npn install로 설치한 패키지 이름이 같으면 오류가 발생한다. firebase라는 패키지를 설치하였기 때문에 파일 이름을 firebase에서 fbase로 바꾸어준다.
- 여러 모듈을 내보낼 수 있는 named export 적용하였다.

> **모듈 단위로 임포트 하는 이유**<br>
> 파이어베이스와 같은 노드 패키지에는 보통 여러가지 기능이 들어 있어 파일의 크기가 크다. 패키지 전체 내용을 임포트하면 프로그램이 무거워지고, 사용하지 않을 기능까지 임포드된다. 따라서 필요한 모듈만 임포트하여 사용한다.

> **`React.StrictMode`란**<br>
> CRA로 만든 리액트 프로젝트는 기본으로 index.js파일에 React.StrictMode를 설정한다. 이 설정을 지우지 않으면 console.log 함수가 2번 실행되는 현상이 나타난다. 이는 버그가 아니라 개발 상황에서 의도적으로 console.log함수를 2번 호출하도록 만든 것이고, 이를 통해 오류를 더 쉽게 포착할 수 있다. <br> [React.Stricmode](https://ko.reactjs.org/docs/strict-mode.html)

### 4.2 setting login form

> **submit 이벤트는 새로고침이 되는 문제가 있다**<br>
> submit 이벤트는 페이지를 새로고침한다. 이 때문에 리액트 상태가 초기화되는 현상이 발생하는데, 이 현상을 막기 위해 onSubmit 함수에서 이벤트의 기본값을 막는 event.preventDefault()를 사용한다.

#### 공식문서

- [input 엘리먼트와 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)

### 4.3 create user

- async & await : authService에 들어 있는 함수들은 서버로 값을 요청해서 결괏값을 수신 받기까지 시간이 걸린다. 수신받고 실행하라는 뜻이다.
- firebase에서 회원가입 정보 확인 가능하다. (email : good@gmail.com, password : goodgood)
- 로그인 유지하기

  ```
  <setPersistence의 세 가지 옵션>

  - local : 웹 브라우저를 종료해도 로그인 유지 (기본값)
  - session: 웹 브라우저의 탭을 종료하면 로그아웃
  - none : 새로고침하면 로그아웃
  ```

  ```
  <사용자 정보가 저장되어 있는 곳>

  개발자 도구 > Application > Storage > IndexedDB > firebaseLocalStorageDb - ... > firebaseLocalStorage
  의 Value 항목을 펼치면 사용자 정보를 확인할 수 있다. value.email에 회원가입 시 입력한 이메일이 들어있다.
  ```

  > **IndexedDB?**<br>
  > IndexedDB는 웹 브라우저에 내장된 데이터베이스이다. JSON 구조로 데이터를 저장하여 자바스크립트로 다루기 좋다. 여기서는 따로 데이터를 저장하기 위한 코드를 작성하지 않고, 파이어베이스가 처리해주었다.

#### 공식문서

- [async와 await](https://ko.javascript.info/async-await)

### 4.4 login

- 비동기 처리 과정
  - 파이어베이스와 현재 프로젝트는 연결되어 있지만 거리는 매우 멀다. 따라서 파이어베이스에서 로그인 처리를 마치고 프로젝트에서 그 신호를 받기까지 시간 간격이 생긴다. 그 사이에 currentUser를 확인한다면 null을 리턴한다.
  - 다시 말해, 파이어베이스에서 회원가입 및 로그인 처리를 마친 후, 프로젝트에 데이터를 보내주면, 우리는 그 데이터를 받아 화면에 나타내주어야 한다. 하지만 현재 코드는 이 데이터를 기다리고 있지 않기 때문에 currentUser가 null이다.
- useEffect
  - 특정한 시점에 실행되는 함수이다.
  - 2번째 인자를 `[]`로 지정 -> 컴포넌트가 최초로 렌더링이 완료되었을 때, 1회만 동작한다.
- 에러와 에러메시지 처리하기
  - 에러 메시지를 적용하려면 에러 코드, 메시지를 직접 준비해야 하고, 각 상황을 어떤 코드로 분기할 지, 분기한 곳에서 어떤 메시지를 보여줄 것인지 일일이 개발해야 한다. -> 파이어베이스는 이미 준비되어 있다.

#### 공식문서

- [리액트 useEffect](https://ko.reactjs.org/docs/hooks-effect.html)

### 4.5 social login

### 4.6 navigation and logout

- && : 자바스크립트 and 연산. && 왼쪽의 조건이 true이면 && 오른쪽에 있는 값을 반환한다.
- 로그아웃 후 주소 이동하기
  - 방법 1. Redirect 이용하기
    - Route 다음에 Redirect를 배치해서 Switch 내부에 있는 Route 조건이 다 맞지 않으면 Redirect가 지정한 곳으로 주소를 이동한다.
    - Redirect는 from 프롭스에 있는 값을 조건으로 생각해서 to 프롭스에 있는 값으로 주소를 이동시킨다.
  - 방법 2. useHistory 이용하기
    - 자바스크립트로 리다이렉트 시킨다. 로그아웃을 처리하는 자바스크립트 코드 마지막에 처음 화면으로 이동하라는 명령을 내린다.
    - useHistory의 push라는 함수가 주소를 이동시킨다.
    - 브라우저에는 사용자의 주소 이동 발자취를 기록해서 history에 저장하고, useHistory는 리액트에서 브라우저의 history를 사용할 수 있게 한다.

### 5.1 creating tweet

- Create : `add()`
- Read : `get()` -> 처음에 화면을 렌더링할 때만 실행된다.(실시간X)
- Update와 Delete는 파이어베이스에서 데이터를 구별하기 위해 아이디를 사용한다. -> `document.id`
- useEffect : async-await 문을 쓰는 함수가 useEffect에 포함되어 있으면, 그 함수는 따로 빼서 정의하고 useEffect에서 그 함수를 실행시켜야 한다.

#### 공식문서

- [전개구문(spread syntex)](https://ko.javascript.info/rest-parameters-spread#spread-syntax)

### 5.2 real-time database

- 실시간 데이터베이스는 채팅 애플리케이션을 만들 때 유용하다. 데이터베이스 변화를 실시간으로 감지하고, 변화가 감지되면 곧바로 파이어베이스 라이브러리 함수를 실생시킨다. 파이어베이스 데이터베이스 방법을 도입하면, 서버와 데이터를 주고 받는 것, 에러 및 결과 처리 등을 파이어베이스가 알아서 처리해준다. 또한 데이터베이스와 통신할 때 async-await 문을 쓰지 않아도 된다. 파이어베이스에서는 `get()`함수 대신 `onSnapshot()`함수를 사용한다.
- map 함수는 forEach함수보다 효율적이다. forEach함수는 배열 요소를 순회하면서 매 순회마다 배열을 만들어줘야하지만, map 함수는 순회하면서 배열을 리턴한다.

### 5.3 deleting tweet

- 컴포넌트 분리하기

#### 공식문서

- [리액트 JSX](https://ko.reactjs.org/docs/introducing-jsx.html)
- [default export와 named export](https://ko.javascript.info/import-export)
- [ES6 구조 분해 할당](https://ko.javascript.info/destructuring-assignment)
- [Importing a Component](https://create-react-app.dev/docs/importing-a-component/)
- [비주얼 스튜디오 코드 jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)
