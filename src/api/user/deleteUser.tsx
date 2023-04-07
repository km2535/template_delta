import { users } from "../../type/Type";

export const deleteUser = async (user: users,setUser: (user: users) => void) => {

    const accessToken = window.sessionStorage.getItem("accessToken");
    const code = window.sessionStorage.getItem("code");
    const state = window.sessionStorage.getItem("state");
    const kakaAccess = window.sessionStorage.getItem("kakaAccess");
    const naverAccess = window.sessionStorage.getItem("naverAccess");
    accessToken && window.sessionStorage.removeItem("accessToken");
    code && window.sessionStorage.removeItem("code");
    state && window.sessionStorage.removeItem("state");
    kakaAccess && window.sessionStorage.removeItem("kakaAccess");
    naverAccess && window.sessionStorage.removeItem("naverAccess");
    setUser({id:"",email:"",name:"",picture:"", addAddress:"", agreeIndividual:false, agreeMarketing:false,detailAddress: "",phone:"",zipcode:"",IsAdmin:"false"});
   
  
  const formData = new FormData();
  formData.append("id", user.id);
  //저장된 사용자 여부를 검사하고 사용자가 있다면 업데이트를 없다면 insert를 한다.
  fetch(`${process.env.REACT_APP_FETCH_URL}/user/removeUser.php`, {
    method: "POST",
    body:formData
  }).then((res) => res).then(()=>window.location.replace('/') )
    .catch((err) => {
      return err;
    });
};