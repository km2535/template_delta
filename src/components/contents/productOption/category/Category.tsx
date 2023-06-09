import React,{ useEffect, useState } from 'react';
import { NavbarMenu } from '../../../../api/navbarMenu/NavbarMenu';
import { navbar } from '../../../../type/Type';
import { v4 as uuid } from "uuid";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import styles from './Category.module.css'
import { useNavigate } from 'react-router-dom';


export default function Category() {
  const [navbarMenu, setNavbarMenu] = useState<navbar[]>([]);
  const [view, setView] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    NavbarMenu(setNavbarMenu)
  }, []);
  
  const listView = () => {
    setView((prev) => !prev)
  }

  return (
    <>
      <div className={styles.container}>
          <div className={styles.title}>카테고리</div>
          <div className={styles.plusBtn} onClick={listView}>{view ? <AiOutlineMinus /> : <AiOutlinePlus/>}</div>
      </div>
      <div className={view ? styles.listContainer : styles.none}>
          {navbarMenu.map((list) =>
            <li className={styles.list} key={uuid()} onClick={() => navigate(`${process.env.REACT_APP_PRODUCT_URL}/${list.listName}`)}>{list.listName}</li>
          )}
      </div>
      <div className={styles.line}></div>
    </>
  );
}

