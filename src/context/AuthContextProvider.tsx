import React from 'react';
import { useContext, createContext, useState, useEffect } from "react";
import { googleLogin } from '../api/login/googleLogin';
import { users } from '../type/Type';


const AuthContext = createContext({user : {id:"",email:"",name:"",picture:"", addAddress:"", agreeIndividual:false, agreeMarketing:false,detailAddress: "",phone:"",zipcode:"",IsAdmin:"false"},setUser : (user:users)=>{}});

export default function AuthContextProvider({ children } :{children:React.ReactNode}) {
  const [user, setUser] = useState<users>({id:"",email:"",name:"",picture:"", addAddress:"", agreeIndividual:false, agreeMarketing:false,detailAddress: "",phone:"",zipcode:"",IsAdmin:"false"});
  const [googleAccess, setGoogleAccess] = useState<string>("");
  // const [kakaoAccess, setKakaoAccess] = useState<string>("");
  // const [naverAccess, setNaverAccess] = useState<string>("");
  
  useEffect(() => {
    const key = window.sessionStorage.getItem("accessToken");
    key && setGoogleAccess(key);
  }, []);

  useEffect(() => {
    googleAccess && googleLogin(googleAccess, setUser);
    // kakaoAccess && kakaoLog(kakaoAccess, setUser);
    // naverAccess && naverLog(naverAccess, setUser);
  }, [googleAccess]);


  return (
     <AuthContext.Provider
      value={{ user, setUser } }
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}