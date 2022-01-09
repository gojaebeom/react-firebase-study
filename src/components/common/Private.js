import { Navigate } from "react-router-dom";

function Private({ isLogin = false, children }) {
  return isLogin ? <>{children}</> : <Navigate to="/" />;
}

export default Private;
