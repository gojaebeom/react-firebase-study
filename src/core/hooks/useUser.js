import { User } from "core/models";
import { userState } from "core/state";
import { getAuth } from "firebase/auth";
import { useRecoilState } from "recoil";

function useUser() {
  const [user, setUser] = useRecoilState(userState);

  // TODO: 로그아웃
  const logout = () => {
    setUser(new User({}));
    getAuth()
      .signOut()
      .then(() => {
        console.debug("로그아웃 성공");
      })
      .catch((err) => {
        console.debug(err);
        throw new Error(err);
      });
  };

  return {
    user,
    setUser,
    logout,
  };
}

export default useUser;
