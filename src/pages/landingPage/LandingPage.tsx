import React from 'react';
import BannerSlide from '../../components/contents/bannerSlide/BannerSlide';
import EventList from '../../components/contents/eventList/EventList';
import IntroProduct from '../../components/contents/introProduct/IntroProduct';
import styles from "./LandingPage.module.css"

export default function LandingPage() {
// 최대 100개 미만의 상품 정보를 가져온다.
// 페이지 랜더 시 가져올 api목록
// 배너 이미지, 이벤트 이미지, 사용자 정의 상품 목록(100개 상품 정보를 정렬하여 나열한다.)

  return (
    <div className={styles.container}>
      <BannerSlide />
      <EventList/>
      <IntroProduct/>
    </div>
  );
}

