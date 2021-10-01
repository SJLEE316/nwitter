import { useState } from "react";
// import Router from "./Router";
import Router from "components/Router"; // 절대 경로로 바꾸어주었다.
import { authService } from "fbase";

function App() {
  console.log(authService.currentUser); // null이 출력된다.
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // 초기값은 false이고, setInLoggedIn은 변수가 아니라 isLoggedIn을 변경할 때 사용하는 함수
  // currentUser에 따라서 로그인 상태를 바꿔준다.
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      {/* JSX에 자바스크립트 코드를 삽입할 때는 코드를 중괄호로 감사줘야 한다. 
      &copy; 는 JSX에서 copyright 기호를 출력한다.*/}
    </>
  );
}

export default App;
