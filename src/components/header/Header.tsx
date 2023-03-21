import React, { useEffect, useState } from 'react';
import { NavbarMenu } from '../../api/navbarMenu/NavbarMenu';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import Search from './search/Search';
import TopNav from './topNav/TopNav';
import styles from "./Header.module.css"

export default function Header() {
  // 데이터와 통신하여 메뉴의 갯수를 navbar로 전달한다.
  const [navbarMenu, setNavbarMenu] = useState<Object>({});

  useEffect(() => {
    NavbarMenu(setNavbarMenu)
  }, [])
  return (
    <div className={styles.container}>
      <Search />
      <Logo />
      <TopNav />
      <Navbar navbarMenu={navbarMenu}  />
    </div>
  );
}

