import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import styles from "./ItemOptions.module.css";

export default function ItemOptions({ option }: { option: [string, any] }) {
  const [optionList] = useState<string[]>(option[1]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.optionTitle}>{option[0]}</p>
        <p className={styles.options}>
          <select className={styles.select} name="" id="">
            {optionList.map((list) => <option key={uuid()}>{list}</option>)}
          </select>
        </p>
      </div>
    </div>
  );
}

