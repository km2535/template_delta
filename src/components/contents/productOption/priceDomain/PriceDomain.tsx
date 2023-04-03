import React, {SetStateAction, useState} from 'react';
import { AiOutlinePlus } from "react-icons/ai"
import ItemsTypes from '../../../../type/Type';
import styles from "./PriceDomain.module.css";

export default function PriceDomain({ setLists }: { setLists: React.Dispatch<SetStateAction<ItemsTypes[]>> }) {
  const [price, setPrice] = useState<string>("1000000")
  const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
    // setLists((prev) => prev.filter((value)=> (Number(price) > Number(value.PRICE))))
  }
  // 검색버튼을 만들어 사용자 요청을 최소화 한다.
  return (
    <>
      <div className={styles.container}>
          <div className={styles.title}>가격</div>
          <div className={styles.plusBtn}><AiOutlinePlus/></div>
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.input} type={"range"} min={0} max={1000000} defaultValue={1000000} step={5000} onChange={onChangeHandler}></input>
        <div className={styles.content}>
          <div className={styles.info}>0원</div>
          <div className={styles.info}>~</div>
          <div className={styles.info}>{price}원</div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}


