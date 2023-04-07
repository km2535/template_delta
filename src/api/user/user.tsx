import {  users } from "../../type/Type";
import { v4 as uuid } from "uuid";
import { checkAdmin } from "../login/googleLogin";

export const UserInfo = async (userInfo: users,setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, setUser:(user:users) => void ) => {
  const formData = new FormData();
  formData.append("email", userInfo.email);
  //저장된 사용자 여부를 검사하고 사용자가 있다면 업데이트를 없다면 insert를 한다.
  fetch(`${process.env.REACT_APP_FETCH_URL}/user/checkUser.php`, {
    method: "POST",
    body:formData
  }).then((res) => res.text()).then((data) => data ? updateUser(userInfo) : createUser(userInfo)).then(()=>setTimeout(() => {
    checkAdmin(userInfo,setUser)
  }, 2000)).finally(() => {  window.alert("저장이 완료되었습니다."); setIsLoading(false);})
    .catch((err) => {
      return err;
    });
};

const createUser = (userInfo:users) => {
  const formData = new FormData();
  
  formData.append("id", uuid());
  formData.append("email", userInfo.email);
  formData.append("name", userInfo.name);
  formData.append("picture", userInfo.picture);
  formData.append("agreeIndividual", userInfo.agreeIndividual.toString());
  formData.append("agreeMarketing", userInfo.agreeMarketing.toString());
  formData.append("phone", userInfo.phone);
  formData.append("zipcode", userInfo.zipcode);
  formData.append("detailAddress", userInfo.detailAddress);
  formData.append("addAddress", userInfo.addAddress);
  formData.append("IsAdmin", userInfo.IsAdmin.toString());
  fetch(`${process.env.REACT_APP_FETCH_URL}/user/createUser.php`, {
    method: "POST",
    body:formData
  })
}

const updateUser = (userInfo:users) => {
  const formData = new FormData();
  
  formData.append("id", uuid());
  formData.append("email", userInfo.email);
  formData.append("name", userInfo.name);
  formData.append("picture", userInfo.picture);
  formData.append("agreeIndividual", userInfo.agreeIndividual.toString());
  formData.append("agreeMarketing", userInfo.agreeMarketing.toString());
  formData.append("phone", userInfo.phone);
  formData.append("zipcode", userInfo.zipcode);
  formData.append("detailAddress", userInfo.detailAddress);
  formData.append("addAddress", userInfo.addAddress);
  formData.append("IsAdmin", userInfo.IsAdmin.toString());

  fetch(`${process.env.REACT_APP_FETCH_URL}/user/updateUser.php`, {
    method: "POST",
    body:formData
  })
}