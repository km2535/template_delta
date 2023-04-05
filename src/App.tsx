import React, { useState } from 'react';
import './App.css';
import {Outlet} from "react-router-dom"
import Header from './components/header/Header';
import Comm from './components/comm/Comm';
import Footer from './components/footer/Footer';
import AuthContextProvider from './context/AuthContextProvider';
import AccessLogin from './components/ui/login/AccessLogin';

function App() {
  const [commFix, setCommFix] = useState(false); 

  return (
    <div className="App">
      <AuthContextProvider>
        <AccessLogin/>
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        <Comm commFix={commFix} />
        <Footer setCommFix={setCommFix}/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
