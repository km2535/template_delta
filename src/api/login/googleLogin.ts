import { users } from "../../type/Type";

export const googleLogin = (accessToken:string, setUser :React.Dispatch<React.SetStateAction<users>>) => {
  // 추가로 db내에 관리자 아이디와 같다면 isAdmin을 true로 저장한다
  fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => {
      checkAdmin(data, setUser);
    });
};

const checkAdmin = async (USER:users, setUser : React.Dispatch<React.SetStateAction<users>>) => {
  if (USER) {
    const formData = new FormData();
    formData.append("USER_EMAIL", USER.email);
    await fetch(`${process.env.REACT_APP_API_USER_URL}/checkAdmin.php`, {
      method: "POST",
      body: formData,
    })
      .then((data) => data.text())
      .then((res) =>
        res
          ? setUser({
              id : USER.id,
              email: USER.email || "",
              name: "관리자",
              picture: USER?.picture || "",
              IsAdmin: true,
            })
          : setUser({
              id: USER.id,
              email: USER.email || "",
              name: USER?.name || "",
              picture: USER?.picture || "",
              IsAdmin: false,
            })
      );
  }
};