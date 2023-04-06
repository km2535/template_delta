import React from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import { Navigate } from 'react-router-dom';


export default function ProtectPage({ children, requireAdmin }: { children:JSX.Element, requireAdmin: boolean }) {
  
  const {user}  = useAuthContext();

  if (!user || (requireAdmin && !user.IsAdmin)) {
    return <Navigate to={"/"} replace/>
  }
  return children
}

