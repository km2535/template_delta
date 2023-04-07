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

export const checkAdmin = async (USER: users, setUser: (user: users) => void) => {
  if (USER) {
    const formData = new FormData();
    formData.append("USER_EMAIL", USER.email);
    await fetch(`${process.env.REACT_APP_FETCH_URL}/user/checkAdmin.php`, {
      method: "POST",
      body: formData,
    })
      .then((data) => data.json())
      .then((res:users[]) =>
        res.length > 0
          ?
          res.map((user) => user.IsAdmin === "true" ?  setUser({
              id : user.id,
              email: user.email || "",
              name: "관리자",
              picture: user.picture || "",
              zipcode: user.zipcode || "",
              addAddress: user.addAddress || "",
              detailAddress: user.detailAddress || "",
              phone : user.phone || "",
              agreeIndividual: user.agreeIndividual.toString() === "true" ? true : false,
              agreeMarketing: user.agreeMarketing.toString() === "true" ? true : false,
              IsAdmin: user.IsAdmin,
            }) : setUser({
              id : user.id,
              email: user.email || "",
              name: user.name,
              picture: user.picture || "",
              zipcode: user.zipcode || "",
              addAddress: user.addAddress || "",
              detailAddress: user.detailAddress || "",
              phone : user.phone || "",
              agreeIndividual: user.agreeIndividual.toString() === "true" ? true : false,
              agreeMarketing: user.agreeMarketing.toString() === "true" ? true : false,
              IsAdmin: user.IsAdmin,
            }))
          : setUser({
              id: USER.id,
              email: USER.email || "",
              name: USER.name || "",
              picture: USER.picture || "",
              zipcode: USER.zipcode || "",
              addAddress: USER.addAddress || "",
              detailAddress: USER.detailAddress || "",
              phone : USER.phone || "",
              agreeIndividual: USER.agreeIndividual || false,
              agreeMarketing: USER.agreeMarketing || false,
              IsAdmin: USER.IsAdmin || "false",
            })
      );
  }
};