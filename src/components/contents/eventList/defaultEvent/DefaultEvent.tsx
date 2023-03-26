import React from 'react';
import styles from "./DefaultEvent.module.css"

export default function DefaultEvent() {
  return (
   <div className={styles.container}>
      <img className={styles.img} src={`${process.env.REACT_APP_API_URL}/images/default.png`} alt="" />
    </div>
  );
}

