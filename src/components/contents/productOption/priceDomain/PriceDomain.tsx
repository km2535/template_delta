import React, {SetStateAction, useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import styles from "./PriceDomain.module.css";


export default function PriceDomain({ setPrice ,price}: { setPrice:React.Dispatch<SetStateAction<string>>,price:string}) {
  const [view, setView] = useState(true);
  const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }
  const listView = () => {
    setView((prev) => !prev)
  }
  // 검색버튼을 만들어 사용자 요청을 최소화 한다.
  return (
    <>
      <div className={styles.container}>
          <div className={styles.title}>가격</div>
        <div className={styles.plusBtn} onClick={listView}>{view ? <AiOutlineMinus /> : <AiOutlinePlus/>}</div>
      </div>
      <div className={view ? styles.inputContainer : styles.none}>
        <input className={styles.input} type={"range"} min={0} max={1000000}  value={price} step={5000} onChange={onChangeHandler}></input>
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


