import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        {/* Switch를 사용하면 여러 가지 Route 중 하나만 렌더링 할 수 있다. */}
        <Route />
      </Switch>
    </HashRouter>
  );
};

export default Router;
