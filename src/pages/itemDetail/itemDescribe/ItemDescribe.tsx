import React from 'react';
import { textOption } from '../../../type/Type';
import styles from "./ItemDescribe.module.css";
import "./ItemDescribe.css";

export default function ItemDescribe({ option,ID }: { option: textOption,ID:string }) {
  
  return (
    <div>
      {option.IMG ? 
      <p className={option['text-align']}>  
        <img src={`${process.env.REACT_APP_API_URL}/data/items/content/${ID}/${option.IMG_URL}`} alt="" />
      </p>
      :
      <p style={{ fontSize: option['font-size'], fontStyle: option['font-style'], fontWeight: option['font-weight'] }} className={`${styles.p} ${option['text-align']}`}>
        {option.text}
      </p>
      }
    </div>
  );
}

