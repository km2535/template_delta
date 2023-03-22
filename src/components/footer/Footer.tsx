import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import {SiInstagram, SiNaver} from "react-icons/si"
import {AiOutlineFacebook} from "react-icons/ai"
import styles from "./Footer.module.css"


export default function Footer({setCommFix} : {setCommFix:Function}) {
  // const navigate = useNavigate();
  useEffect(() => {
    const footer = document.getElementById("footer");
    const showTitle = new IntersectionObserver(
      (entries) => {
        // 푸터가 보이면 state를 변경하여 comm 요소가 fix에서 relative로 position 변경하도록 함.
         entries.forEach((ent) => setCommFix(ent.isIntersecting));
      },
      {
        // rootMargin: "0px",
        // threshold: 0,
      }
    );
    footer && showTitle.observe(footer);
  }, [setCommFix]);
  return (
    <div className={styles.container} id="footer">
      <div className={styles.topInfo}>
        <div
          className={styles.personal}
          // onClick={() =>
          //   navigate(
          //     process.env.REACT_APP_API_SUB_URL +
          //       process.env.REACT_APP_API_PERSONAL_URL
          //   )
          // }
        >
          개인정보처리방침
        </div>
        <div
          className={styles.email}
          // onClick={() =>
          //   navigate(
          //     process.env.REACT_APP_API_SUB_URL +
          //       process.env.REACT_APP_API_EMAIL_URL
          //   )
          // }
        >
          이메일무단수집금지
        </div>
        <div
          className={styles.use}
          // onClick={() =>
          //   navigate(
          //     process.env.REACT_APP_API_SUB_URL +
          //       process.env.REACT_APP_API_USE_URL
          //   )
          // }
        >
          이용약관
        </div>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.logo}>
          <img
            className={styles.img}
            src={process.env.REACT_APP_API_URL + "/images/logo_white.png"}
            alt=""
          />
        </div>
        <div className={styles.Info}>
          {/* <div className={styles.company}>민스필라테스</div> */}
          <div className={styles.addr}>
            서울특별시 중랑구 00로 000-00 민빌딩 | 대표이사 이강민
          </div>
          <div className={styles.companyNum}>
            통신판매신고번호 제2017-경기-000호
          </div>
        </div>
        <div className={styles.sideInfo}>
          <div className={styles.subNabar}>
            <div
              className={styles.menu1}
              // onClick={() => navigate(`${process.env.REACT_APP_API_SUB_URL}`)}
            >
              주문내역
            </div>
            <div
              className={styles.menu2}
              // onClick={() =>
              //   navigate(`${process.env.REACT_APP_API_SUB_OPTION_FIVE_URL}`)
              // }
            >
              장바구니
            </div>
            <div
              className={styles.menu3}
              // onClick={() =>
              //   navigate(`${process.env.REACT_APP_API_SUB_OPTION_ONE_URL}`)
              // }
            >
              쿠폰내역
            </div>
            {/* <div
              className={styles.menu4}
              onClick={() =>
                navigate(`${process.env.REACT_APP_API_SUB_OPTION_THREE_URL}`)
              }
            >
              서비스 제공
            </div> */}
          </div>
          <div className={styles.snsContainer}>
            <div className={styles.instar}>
              <SiInstagram />
            </div>
            <div className={styles.facebook}>
              <AiOutlineFacebook />
            </div>
            <div className={styles.naver}>
              <SiNaver />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

