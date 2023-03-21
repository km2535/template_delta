import React from 'react';
import { useParams } from 'react-router-dom';

export default function Prodcuts() {
  //제목을 받아서 해당 카테고리에 있는 상품을 필터한다음
  // 리스트로 뿌려줌
  const param = useParams();
  return (
    <div>
      물건리스트 : 
      {param?.id}
    </div>
  );
}

