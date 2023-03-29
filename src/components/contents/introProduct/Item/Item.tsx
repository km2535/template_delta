import React from 'react';
import ItemsTypes from '../../../../type/Type';
import {BsBookmarkHeartFill} from "react-icons/bs"
import styles from "./Item.module.css"
import { useNavigate } from 'react-router-dom';

export default function Item({ value }: { value: ItemsTypes }) {
  // 아이템 카드를 만들면 됨.
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgContent}>
        <img className={styles.img} src={`${process.env.REACT_APP_API_URL}/data/items/thumb/${value.ID}/${value.THUMB}`} alt="상품이미지" onClick={()=>navigate(`${process.env.REACT_APP_ITEM_URL}/${value.ID}`, {state : value})}/>
      </div>
      <div className={styles.describe}>
        
        <div className={styles.category}>
          <div className={styles.cate}>
            {value.CATEGORY1}
          </div >
          <div className={styles.cate}>
            {value.CATEGORY2}
          </div>
          <div className={styles.cate}>
            {value.CATEGORY3}
          </div>
        </div>
        <div className={styles.title}>
          {value.TITLE}
        </div>
        <div className={styles.price}>
          {value.PRICE}
        </div>
        <div className={styles.likeContent}>
          <div className={styles.icon}><BsBookmarkHeartFill/></div>
          <div className={styles.like}>{value.LIKE}</div>
        </div>
      </div>
    </div>
  );
}

