import React from 'react';
import styles from "./Button.module.css"

export default function Button({main, text, onClick, fontsize}:{main : boolean,text:string, onClick:React.MouseEventHandler, fontsize:string}) {
  return (
    <button style={{fontSize:`${fontsize}px`}} className={main ? styles.btnBlack : styles.btnGray} onClick={onClick}>
      {text}
    </button>
  );
}

