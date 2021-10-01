import { React, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 초기값은 false이고, setInLoggedIn은 변수가 아니라 isLoggedIn을 변경할 때 사용하는 함수
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
