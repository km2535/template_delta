import React from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import Search from './search/Search';
import TopNav from './topNav/TopNav';

export default function Header() {
  // 데이터와 통신하여 메뉴의 갯수를 navbar로 전달한다.
  
  return (
    <div>
      <Search />
      <Logo />
      <TopNav />
      <Navbar/>
    </div>
  );
}

