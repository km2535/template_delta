import React, {SetStateAction, useState} from 'react';
import ItemsTypes from '../../../type/Type';
import Category from './category/Category';
import PriceDomain from './priceDomain/PriceDomain';
import styles from './ProductOption.module.css'
import Button from '../../ui/button/Button';
import { Params } from 'react-router-dom';
import { readProductListSearch } from '../../../api/items/readProductListSearch';

export default function ProductOption({ setLists, param }: { setLists: React.Dispatch<SetStateAction<ItemsTypes[]>>, param: Readonly<Params<string>> }) {
  const [price, setPrice] = useState<string>("1000000");
  const serchHandler = () => {
    param.id && 
    readProductListSearch("0","100",setLists, param.id, price)
  }
  const initHander = () => {
    setPrice("1000000")
    param.id && 
    readProductListSearch("0","100",setLists, param.id,"1000000")
  }
  return (
    <div className={styles.container}>
      <div>
        <Category/>
      </div>
      <div>
        <PriceDomain setPrice={setPrice} price={price} />
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.btn}>
          <Button main={true} onClick={serchHandler} text='검색' fontsize='22' />
        </div>
        <div>
          <Button main={false} onClick={initHander} text='초기화' fontsize='22' />
        </div>
      </div>
    </div>
  );
}

