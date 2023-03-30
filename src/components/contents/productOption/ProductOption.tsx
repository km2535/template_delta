import React, {SetStateAction  } from 'react';
import ItemsTypes from '../../../type/Type';
import Category from './category/Category';
import PriceDomain from './priceDomain/PriceDomain';
import styles from './ProductOption.module.css'

export default function ProductOption({setLists}:{setLists:React.Dispatch<SetStateAction<ItemsTypes[]>>} ) {
 
  return (
    <div className={styles.container}>
      <div>
        <Category/>
      </div>
      <div>
        <PriceDomain setLists={setLists} />
      </div>
      <div>

      </div>
    </div>
  );
}

