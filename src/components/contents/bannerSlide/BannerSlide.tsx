import React, { useEffect, useState } from 'react';
import { Banner } from '../../../api/banner/Banner';
import { v4 as uuid } from "uuid";
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import { Autoplay } from "swiper";
import styles from "./BannerSlide.module.css"

export default function BannerSlide() {
  // 이미지를 api로부터 불러와서 이미지를 state에 저장하고
  // state에 보관되어 있는 이미지를 슬라이드로 만들어야한다.
  //이미지가 1개 이하일 경우 슬라이드는 동작하지 않는다.
  const [bannerImg, setBannerImg] = useState<string[]>([]);
  useEffect(() => {
    Banner(setBannerImg)
  }, []);
  return (
    <div className={styles.container}>
      {bannerImg && 
        <>
        <Swiper
          speed={1500}
          slidesPerView={1}
          autoplay={{
          delay:2000
          }}
          loop={true}
        modules={[Autoplay]}>
          {bannerImg.map((v) =>    
              <SwiperSlide key={uuid()}>
                <img className={styles.img} src={`${process.env.REACT_APP_API_URL}/data/banner/images/${v}`} alt="" />
              </SwiperSlide>
          )}  
        </Swiper>
      </>
      }
    </div>
  );
}

