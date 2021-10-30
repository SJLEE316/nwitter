import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom"; // Redirect 삭제하기
// import Auth from "../routes/Auth";
// import Home from "../routes/Home";
import Auth from "routes/Auth"; // 절대경로로 바꾸어주었다.
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const Router = ({ isLoggedIn, userObj }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // App.js로 이동
  return (
    <HashRouter>
      {/* Navigation은 Switch에 포함시키지 않았다. -> 모든 페이지에서 보여지도록 함. 하지만 회원가입이나 로그인 페이지에는 보일 필요 없음. */}
      {/* 따라서 isLoggedIn이 true인 경우에만 Navigation이 보이도록 처리 */}
      {isLoggedIn && <Navigation />}
      <Switch>
        {/* Switch를 사용하면 여러 가지 Route 중 하나만 렌더링 할 수 있다. */}
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              {/* Route 컴포넌트의 exact path="/" 프롭스는 처음 접속했을 때의 경로이다. -> 루트 페이지 */}
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </HashRouter>
  );
};

export default Router;
