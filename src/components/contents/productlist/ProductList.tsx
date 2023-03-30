import React, { useEffect, useState,SetStateAction  } from 'react';
import { Params } from 'react-router-dom';
import { readProdcutList } from '../../../api/items/readProductList';
import ItemsTypes from '../../../type/Type';
import { v4 as uuid } from "uuid";
import Item from '../introProduct/Item/Item';
import styles from "./ProductList.module.css"
import {Swiper,SwiperSlide} from 'swiper/react';
import NoProduct from '../../ui/noProduct/NoProduct';

export default function ProductList({ param,lists, setLists }: { param: Readonly<Params<string>>,lists:ItemsTypes[], setLists:React.Dispatch<SetStateAction<ItemsTypes[]>> }) {
  const [startNum] = useState(0)
  useEffect(() => {
    const pageCnt = 100;
    param.id !== undefined &&
     readProdcutList(startNum.toString(),pageCnt.toString(),setLists, param.id)
  }, [param.id, setLists, startNum])
  // param에 따라서 상품의 리스트들을 보여줌
  console.log(lists)
  return (
    <>
      {lists.length > 0 || <NoProduct/>}
    <div className={styles.container}>
      <div className={styles.img}>
        <Swiper slidesPerView={4} spaceBetween={100}
         breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          }}>
          
          {lists.map((value) => 
          <SwiperSlide key={uuid()}>  
            <Item value={value}/>
          </SwiperSlide>
        )}
        </Swiper>
      </div>
    </div>
    </>
  );
}

