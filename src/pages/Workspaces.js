import { DefaultLayout } from "components/layouts/default";
import { userState } from "core/state";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function Workspaces() {
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    console.debug(user.nickname);
  }, []);
  return (
    <DefaultLayout>
      <h1 className="text-xl">워크스페이스</h1>
    </DefaultLayout>
  );
}

export default Workspaces;
