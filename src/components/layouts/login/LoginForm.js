import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    type: "login", // or register
  });

  const isLoginType = () => {
    return form.type === "login";
  };

  const inputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "email") setForm({ ...form, email: value });
    else if (name === "password") setForm({ ...form, password: value });
  };

  const loginSubmit = () => {
    console.debug("로그인 요청");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.email)
      .then((userCredential) => {
        const user = userCredential.user;
        console.debug(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.debug(errorCode);
        console.debug(errorMessage);
      });
  };

  const registerSubmit = () => {
    console.debug("회원가입 요청");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.email)
      .then((userCredential) => {
        const user = userCredential.user;
        console.debug(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.debug(errorCode);
        console.debug(errorMessage);
      });
  };

  const changeType = ({ type = "login" }) => {
    setForm({ ...form, type: type });
  };

  return (
    <form className="flex flex-col p-4 border w-[400px]">
      <div>
        <button
          className="border"
          type="button"
          onClick={() => changeType({ type: "login" })}
        >
          로그인하기
        </button>
        <button
          className="border"
          type="button"
          onClick={() => changeType({ type: "register" })}
        >
          회원가입하기
        </button>
      </div>
      <legend className="text-xl">{form.type}</legend>
      <input
        placeholder="이메일"
        value={form.email}
        name="email"
        onChange={inputChange}
        className="border"
      />
      <input
        placeholder="비밀번호"
        value={form.password}
        name="password"
        onChange={inputChange}
        className="border"
      />

      {isLoginType() ? (
        <button type="button" onClick={loginSubmit}>
          로그인ㄱㄱ
        </button>
      ) : (
        <button type="button" onClick={registerSubmit}>
          회원가입ㄱㄱ
        </button>
      )}
    </form>
  );
}

export default LoginForm;
