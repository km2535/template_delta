import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Logo.module.css"


export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <img className={styles.img} onClick={()=>navigate("/")} src={`${process.env.REACT_APP_IMAGE_URL}/logo.png`} alt="" />
    </div>
  );
}

