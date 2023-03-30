import React, { useEffect, useState } from 'react';
import { readNewItems } from '../../../../api/items/readNewItems';
import Item from '../Item/Item';
import { v4 as uuid } from "uuid";
import ItemsTypes, { optionsType } from '../../../../type/Type';
import { readPopularItems } from '../../../../api/items/readPopularItems';
import styles from "./IntroItems.module.css"
import {Swiper,SwiperSlide} from 'swiper/react';

export default function IntroItems({ option }: { option: optionsType }) {
  const [item, setItem] = useState<ItemsTypes[]>([]);

  useEffect(() => {
    switch (option.ARRANGE) {
      case "POPULAR":
        readPopularItems(option.LIST_COUNT, setItem)
        break;
      case "NEWITEMS":
        readNewItems(option.LIST_COUNT,setItem)
        break;
    
      default:
        console.log('일반')
        // 일반 카테고리 별 정렬
        break;
    }
  },[option.ARRANGE, option.LIST_COUNT])
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {option.TITLE}
      </div>
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
          {item.map((value) =>
            <SwiperSlide key={uuid()}>
              <Item value={value} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

