import React from 'react';
import styles from "./Button.module.css"

export default function Button({main, text, onClick, fontsize, isLoading}:{main : boolean,text:string, onClick:React.MouseEventHandler, fontsize:string, isLoading:boolean}) {
  return (
    <button style={{fontSize:`${fontsize}px`}} className={main ? styles.btnBlack : styles.btnGray} onClick={onClick}>
      {isLoading ?  <div className={styles.loader}></div> : text}
    </button>
  );
}

