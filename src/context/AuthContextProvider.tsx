import React from 'react';
import { useContext, createContext, useState, useEffect } from "react";
import { googleLogin } from '../api/login/googleLogin';
import { user } from '../type/Type';

const AuthContext = createContext<user|undefined>(undefined);

export default function AuthContextProvider({ children } :{children:React.ReactNode}) {
  const [user, setUser] = useState<user>();
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
      value={ user }
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}