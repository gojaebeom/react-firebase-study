class User {
  constructor({
    id = null,
    nickname = "",
    profileURL = "",
    email = "",
    exp = 0,
    level = 1,
  }) {
    this.id = id;
    this.nickname = nickname;
    this.profileURL = profileURL;
    this.email = email;
    this.exp = exp;
    this.level = level;
  }

  static fromFireStore({ userSnapshot = null }) {
    if (!userSnapshot) {
      alert("파이어베이스 회원정보 확인 불가");
      return;
    }
    const userData = userSnapshot.data();

    return {
      id: userSnapshot.id,
      nickname: userData.nickname,
      email: userData.email,
      exp: userData.exp,
      level: userData.level,
      profileURL: userData.profileURL,
    };
  }

  toFireStore() {
    return {
      nickname: this.nickname,
      profileURL: this.profileURL,
      email: this.email,
      exp: this.exp,
      level: this.level,
    };
  }
}

export default User;
