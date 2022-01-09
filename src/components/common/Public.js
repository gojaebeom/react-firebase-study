import { Navigate } from "react-router-dom";

function Public({ isLogin = false, restricted = false, children }) {
  return isLogin && restricted ? (
    <Navigate to="/workspaces" />
  ) : (
    <>{children}</>
  );
}

export default Public;
