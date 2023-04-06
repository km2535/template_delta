import { userInfo } from "../../type/Type";
import { v4 as uuid } from "uuid";

export const UserInfo = async (userInfo: userInfo) => {
  const formData = new FormData();
  
  formData.append("id", uuid());
  formData.append("email", userInfo.email);
  formData.append("name", userInfo.name);
  formData.append("agreeIndividual", userInfo.agreeIndividual.toString());
  formData.append("agreeMarketing", userInfo.agreeMarketing.toString());
  formData.append("phone", userInfo.phone);
  formData.append("zipcode", userInfo.zipcode);
  formData.append("detailAddress", userInfo.detailAddress);
  formData.append("addAddress", userInfo.addAddress);
  fetch(`${process.env.REACT_APP_FETCH_URL}/user/createUser.php`, {
    method: "POST",
    body:formData
  }).then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
