import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"
import {AiOutlinePlusSquare} from "react-icons/ai"

type navbarMenu = {
  navbarMenu : Object
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
        {Object.values(navbarMenu).length < 7 ? 
          Object.values(navbarMenu).map((v, i) => <div className={styles.list} key={i} onClick={() => navigate(`${process.env.REACT_APP_PRODUCT_URL}/${v}`)}>{v}</div>)
          : 
          <div className={styles.mainMenuContent}>
          {Object.values(navbarMenu).map((v, i) => i < 6 &&
            <div className={styles.list} key={i} onClick={() => navigate(`${process.env.REACT_APP_PRODUCT_URL}/${v}`)}>
              {v}
            </div>
            )}
            <div className={styles.all} onClick={()=>setIsAllMenu((prev)=> !prev)}><AiOutlinePlusSquare/>전체보기</div>
          </div>
        }
        <div className={isAllMenu ? styles.allListContainer : styles.allListHidden}>
          <div className={isAllMenu ? styles.allListContent: styles.allListContentHidden}>
            { Object.values(navbarMenu).map((v, i) => <div className={styles.allList } key={i} onClick={allMenuClickHandler }>{v}</div>)}
          </div>
        </div>
      </>
      }
    </div>
  );
}

