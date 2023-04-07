import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemOptions from './itemOptions/ItemOptions';
import { v4 as uuid } from "uuid";
import ItemDescribe from './itemDescribe/ItemDescribe';
import { textOption } from '../../type/Type';
import Button from '../../components/ui/button/Button';
import styles from "./ItemDetail.module.css"
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from "react-icons/io"
import moment from 'moment';

export default function ItemDetail() {
  //id에 따른 상품 디테일을 보여주면 됨.
  const [text, setText] = useState<textOption[]>([]);
  const [subText, setSubText] = useState<textOption[]>([]);
  const [imgList, setImgList] = useState<string[]>([]);
  const [delivery, setDelivery] = useState<string>();
  const { state: {
    ID,
    BRAND,
    TITLE,
    CATEGORY1,
      CATEGORY2,
      CATEGORY3,
      PRICE,
      EVENT_PRICE,
      DELIVERY_PRICE,
      NONE_TAX,
      DELIVERY_DATE,
      OPTIONS,
      INFO,
      MORE_INFO,
      IMG_URL,
    }
  } = useLocation();
  useEffect(() => {
    setText(Object.values(JSON.parse(INFO)));
    setSubText(Object.values(JSON.parse(MORE_INFO)));
    setImgList(IMG_URL.split(","));
    setDelivery(moment().add(Number(DELIVERY_DATE),'day').format("M월 D일 예정"))
  }, [DELIVERY_DATE, IMG_URL, INFO, MORE_INFO]);

  const buyProduct = () => {
    //상품구매를 하는 로직이 있는 함수
    console.log('상품구매')
  }
  const putInBocket = () => {
    //장바구니로 담는 로직이 있는 함수
    console.log('장바구니')
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span className={styles.category1}>{CATEGORY1}</span>
        <span className={styles.category2}>{CATEGORY2}</span>
        <span className={styles.category3}>{CATEGORY3}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.productImg}>
          <button className={styles.prev} id='arrow-prev'><IoIosArrowDropleftCircle/></button>
          <Swiper modules={[Navigation]}  loop={true} navigation={{ nextEl: "#arrow-next", prevEl: "#arrow-prev" }}>
            {imgList.map((url: string) => 
              <SwiperSlide key={uuid()}>
               <img className={styles.img} src={`${process.env.REACT_APP_API_URL}/data/items/sub/${ID}/${url}`} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
          <button className={styles.next} id='arrow-next'><IoIosArrowDroprightCircle/></button>
         
        </div>
        <div className={styles.productInfoContainer}>
          <div className={styles.title}>
            <p className={styles.brand}>{BRAND}</p>
            <p className={styles.subTitle}>{TITLE}</p>
          </div>
          <p className={styles.line}></p>
          <div className={styles.productInfoMain}>
            <div className={styles.productInfoContent}>
              <p className={styles.infoTitle}>판매가</p>
              <p className={styles.infoDescribe}>{PRICE}원</p>
            </div>
            <div className={styles.productInfoContent}>
              <p className={styles.infoTitle}>적립금</p>
              <p className={styles.infoDescribe}>{EVENT_PRICE}p</p>
            </div>
            <div className={styles.productInfoContent}>
              <p className={styles.infoTitle}>배송비</p>
              <p className={styles.infoDescribe}>{DELIVERY_PRICE}원</p>
            </div>
            <div className={styles.productInfoContent}>
              <p className={styles.infoTitle}>무이자할부</p>
              <p className={styles.infoDescribe}>{NONE_TAX}개월</p>
            </div>
            <div className={styles.productInfoContent}>
              <p className={styles.infoTitle}>예상수령일</p>
              <p className={styles.Date}>{delivery}</p>
            </div>
            <p className={styles.line}></p>
            <div className={styles.options}>
              {(Object.entries(JSON.parse(OPTIONS)).map((v) =>
                <ItemOptions option={v} key={uuid()} />             
              ))
              }
            </div>
            <div className={styles.btn}><Button main={true} text='상품구매'  onClick={buyProduct} fontsize='22'isLoading={false}/></div>
            <div className={styles.btn}><Button main={false} text='장바구니'  onClick={putInBocket} fontsize='22'isLoading={false}/></div>
          </div>
        </div>
      </div>
      <p className={styles.line}></p>
      <p  className={styles.detailInfoTitle}>제품 상세 정보</p>
      <div >
        {text.map((v) =>
          <ItemDescribe option={v} key={uuid()} ID={ID} />             
              )}
      </div>
      <p className={styles.line}></p>
      <p  className={styles.detailInfoTitle}>추가 정보</p>
      <div >
        {subText.map((v) =>
          <ItemDescribe option={v} key={uuid()} ID={ID} />             
              )}
      </div>
    </div>
  );
}

