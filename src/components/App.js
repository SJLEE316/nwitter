import { useEffect, useState } from "react";
// import Router from "./Router";
import Router from "components/Router"; // 절대 경로로 바꾸어주었다.
import { authService } from "fbase";

function App() {
  console.log(authService.currentUser); // null이 출력된다.
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // 초기값은 false이고, setInLoggedIn은 변수가 아니라 isLoggedIn을 변경할 때 사용하는 함수
  // currentUser에 따라서 로그인 상태를 바꿔준다.
  // setInterval(() => console.log(authService.currentUser), 2000); // 2초마다 실행하여 currentUser가 변하는 것을 확인한다.

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  // useEffect는 특정한 시점에 실행되는 함수.
  // 파이어베이스 로그인 정보를 받게 되었을 때(파이어베이스가 초기화되는 시점)의 시점을 useEffect 함수로 잡아내어 로그인 완료 이후 보여줄 화면을 렌더링한다. -> onAuthStateChanged 사용
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []); // 1회만 동작

  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : "initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      {/* JSX에 자바스크립트 코드를 삽입할 때는 코드를 중괄호로 감사줘야 한다. 
      &copy; 는 JSX에서 copyright 기호를 출력한다.*/}
    </>
  );
}

export default App;
