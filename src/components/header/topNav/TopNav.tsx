import React from 'react';

export default function TopNav() {
  //context에서 로그인 여부를 확인하고
  // 로그인이 되어 있으면 해당 아이디의 이름을 전달 받고 
  // 마이페이지 메뉴와 관리자라면 관리자 메뉴를 활성화 한다.
  return (
    <div>
      <ul>
        <li>로그인</li>
        <li>주문배송</li>
        <li>이벤트</li>
        <li>공지사항</li>
      </ul>
    </div>
  );
}

