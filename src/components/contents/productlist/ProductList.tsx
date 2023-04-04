import React, { useEffect, useState,SetStateAction  } from 'react';
import { Params } from 'react-router-dom';
import { readProdcutList } from '../../../api/items/readProductList';
import ItemsTypes from '../../../type/Type';
import { v4 as uuid } from "uuid";
import Item from '../introProduct/Item/Item';
import styles from "./ProductList.module.css"
import NoProduct from '../../ui/noProduct/NoProduct';

export default function ProductList({ param,lists, setLists }: { param: Readonly<Params<string>>,lists:ItemsTypes[], setLists:React.Dispatch<SetStateAction<ItemsTypes[]>> }) {
  const [startNum] = useState(0)
  useEffect(() => {
    const pageCnt = 100;
    param.id !== undefined &&
     readProdcutList(startNum.toString(),pageCnt.toString(),setLists, param.id)
  }, [param.id, setLists, startNum])

  return (
    <>
      {lists.length > 0 || <NoProduct/>}
    <div className={styles.container}>
          {lists.map((value) => 
            <div className={styles.img} key={uuid()}>
              <Item value={value}  />
            </div>
        )}
    </div>
    </>
  );
}

