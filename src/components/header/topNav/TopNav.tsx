import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TopNav.module.css"
import { useAuthContext } from '../../../context/AuthContextProvider';

export default function TopNav() {
  //context에서 로그인 여부를 확인하고
  // 로그인이 되어 있으면 해당 아이디의 이름을 전달 받고 
  // 마이페이지 메뉴와 관리자라면 관리자 메뉴를 활성화 한다.
  const {user} = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <ul className={styles.ul}>
        {user.id ? <li className={styles.li} onClick={()=>navigate("/myinfo")}>{user?.name}</li> : <li className={styles.li} onClick={()=>navigate("/login")}>로그인</li>} 
        <li className={styles.li}>주문배송</li>
        <li className={styles.li}>이벤트</li>
        <li className={styles.li}>공지사항</li>
        {user.id && <li className={styles.li} onClick={()=>navigate("/logout")} >로그아웃</li>}
      </ul>
    </div>
  );
}

