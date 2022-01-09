/* eslint-disable react-hooks/exhaustive-deps */
import { User } from "core/models";
import { userState } from "core/state";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function useLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [refreshInit, setRefreshInit] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();

    const stop = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setIsLogin(true);

        let userSnapshot = await getDoc(doc(db, "users", u.uid));

        if (!userSnapshot.data()) {
          //유저 메탸데이터가 없음, 새로 저장해주기
          console.debug("유저 메타데이터 존재하지 않음 -> 생성");
          userSnapshot = await setDoc(
            doc(db, "users", u.uid),
            new User({
              email: u.email,
              nickname: u.email.split("@")[0],
              profileURL: "https://picsum.photos/200",
              exp: 0,
              level: 1,
            }).toFireStore()
          );
        }

        const user = User.fromFireStore({ userSnapshot: userSnapshot });
        setUser(user);
      } else {
        setIsLogin(false);
      }

      setRefreshInit(true);
    });

    return () => stop();
  }, []);

  return {
    isLogin,
    refreshInit,
  };
}

export default useLogin;
