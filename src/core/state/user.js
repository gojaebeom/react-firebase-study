import { User } from "core/models";
import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: new User({}),
});

export default userState;
