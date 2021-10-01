import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import Auth from "../routes/Auth";
// import Home from "../routes/Home";
import Auth from "routes/Auth"; // 절대경로로 바꾸어주었다.
import Home from "routes/Home";

const Router = ({ isLoggedIn }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // App.js로 이동
  return (
    <HashRouter>
      <Switch>
        {/* Switch를 사용하면 여러 가지 Route 중 하나만 렌더링 할 수 있다. */}
        {isLoggedIn ? (
          <Route exact path="/">
            {/* Route 컴포넌트의 exact path="/" 프롭스는 처음 접속했을 때의 경로이다. -> 루트 페이지 */}
            <Home />
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </HashRouter>
  );
};

export default Router;
