import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"
import {AiOutlinePlusSquare} from "react-icons/ai"

type navbar = {
  id?: string,
  listName?:string
}
type navbarMenu = {
  navbarMenu : navbar[]
}
export default function Navbar({ navbarMenu }: navbarMenu) {
  const navigate = useNavigate();
  const [isAllMenu, setIsAllMenu] = useState(false);
  const allMenuClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`${process.env.REACT_APP_PRODUCT_URL}/${e.currentTarget.innerText}`);
    setIsAllMenu((prev) => !prev);
  }
  return (
    <div className={styles.content}>
      {navbarMenu && 
        <>
        {
          navbarMenu.length < 7 ? 
            navbarMenu.map((v) => <div className={styles.list} key={v.id} onClick={() => navigate(`${process.env.REACT_APP_PRODUCT_URL}/${v.listName}`)}>{v.listName}</div>)
            :
            <div className={styles.mainMenuContent}>
              {navbarMenu.map((v,i) => i < 6 && <div className={styles.list} key={v.id} onClick={() => navigate(`${process.env.REACT_APP_PRODUCT_URL}/${v.listName}`)}>{v.listName}</div>)}
              <div className={styles.all} onClick={()=>setIsAllMenu((prev)=> !prev)}><AiOutlinePlusSquare/>전체보기</div>
            </div>
        }
        <div className={isAllMenu ? styles.allListContainer : styles.allListHidden}>
          <div className={isAllMenu ? styles.allListContent: styles.allListContentHidden}>
            {navbarMenu.map((v) => <div className={styles.allList } key={v.id} onClick={allMenuClickHandler }>{v.listName}</div>)}
          </div>
        </div>
      </>
      }
    </div>
  );
}

