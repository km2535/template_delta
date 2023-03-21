import React,{useState} from 'react';
import Qna from './qna/Qna';
import styles from "./Comm.module.css"
import {BsChatDots} from "react-icons/bs"

export default function Comm() {
  const [menuActive, setMenuActive] = useState(false);
  const menuHandler = () => {
    setMenuActive((prev) => !prev);
  }
  return (
    <div className={menuActive ? styles.containerActive : styles.container}>
      <div className={styles.icons} onClick={menuHandler}><BsChatDots /></div>
      <menu className={menuActive ? styles.itemsWrapper : styles.itemsWrapperHidden}>
        <div className={styles.item}>
          <Qna imgUrl={`${process.env.REACT_APP_IMAGE_URL}/kakaoTalk.png`} serviceName='kakaoTalk' serviceUrl='serviceUrl' />
        </div>
        <div className={styles.item}>
          <Qna imgUrl={`${process.env.REACT_APP_IMAGE_URL}/naverTalk.png`} serviceName='naverTalk' serviceUrl='serviceUrl' />
        </div>
        <div className={styles.item}>
          <Qna imgUrl={`${process.env.REACT_APP_IMAGE_URL}/qnaTallk.png`} serviceName='qnaTallk' serviceUrl='serviceUrl' />
        </div>
      </menu>
    </div>
  );
}

