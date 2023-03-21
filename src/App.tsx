import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom"
import Header from './components/header/Header';
import Comm from './components/comm/Comm';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Comm />
      <Footer/>
    </div>
  );
}

export default App;
