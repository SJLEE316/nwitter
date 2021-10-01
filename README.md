# Nwitter

Twitter (mini)clone with React and Firebase

# 프로젝트 구조

```
NWITTER
├─ src
│   ├─ components
│   │   ├─ App.js
│   │   └─ Router.js
│   │         └─ HashRouter
│   │             └─ Swith : Switch를 사용하면 여러 가지 Route 중 하나만 렌더링 할 수 있다.
│   │                 └─ Route
│   ├─ routes
│   │   ├─ Auth.js
│   │   ├─ Editprofile.js
│   │   ├─ Home.js
│   │   └─ Profile.js
│   ├─ firebase.js
│   └─ index.js
├─ .env
├─ .gitignore
├─ README.md
└─
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
