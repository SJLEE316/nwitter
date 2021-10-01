import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import App from "components/App"; // 절대경로로 바꾸어주었다.
// import firebase from "./firebase"; // firebase에서 export 해주는 것이 없기 때문에 에러가 발생한다.
// console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
