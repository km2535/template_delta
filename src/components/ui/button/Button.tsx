import React from 'react';
import styles from "./Button.module.css"

export default function Button({main, text, onClick}:{main : boolean,text:string, onClick:React.MouseEventHandler}) {
  return (
    <button className={main ? styles.btnBlack : styles.btnGray} onClick={onClick}>
      {text}
    </button>
  );
}

