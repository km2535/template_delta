import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom"
import Header from './components/header/Header';
import Comm from './components/comm/Comm';

function App() {

  return (
    <div className="App">
      <Header/>
      <Outlet />
      <Comm/>
    </div>
  );
}

export default App;
