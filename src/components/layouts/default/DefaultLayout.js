import { useUser } from "core/hooks";
import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  const { user, logout } = useUser();
  return (
    <div className="w-full">
      <header className="flex items-center justify-between w-full p-4 border-b">
        <div>
          <Link to="/" className="mr-4">
            홈
          </Link>
          <Link to="/" className="mr-4">
            워크스페이스 목록
          </Link>
        </div>

        {user.id && (
          <div className="flex items-center justify-center">
            <img
              src={user.profileURL}
              alt="img"
              className="w-10 h-10 rounded-full"
            />
            <button onClick={logout}>로그아웃</button>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}

export default DefaultLayout;
