import React from "react";
import { useRoutes } from "react-router-dom";

import { Home, Workspaces } from "pages";
import { Loading, Private, Public } from "components/common";
import { useLogin } from "core/hooks";

function App() {
  const { isLogin, refreshInit } = useLogin();

  const route = useRoutes([
    {
      path: "/",
      element: (
        <Public restricted={true} isLogin={isLogin}>
          <Home />
        </Public>
      ),
    },
    {
      path: "/workspaces",
      element: (
        <Private isLogin={isLogin}>
          <Workspaces />
        </Private>
      ),
    },
  ]);

  return <Loading isLoading={!refreshInit}>{route}</Loading>;
}

export default App;
