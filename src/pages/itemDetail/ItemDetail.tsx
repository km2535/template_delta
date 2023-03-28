import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemOptions from './itemOptions/ItemOptions';
import { v4 as uuid } from "uuid";
import ItemDescribe from './itemDescribe/ItemDescribe';
import { textOption } from '../../type/Type';

export default function ItemDetail() {
  //id에 따른 상품 디테일을 보여주면 됨.
  const [text, setText] = useState<textOption[]>([]);
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
    setText(Object.values(JSON.parse(INFO)))
  },[INFO])
  
  console.log(MORE_INFO)
  return (
    <div>
      <div>
        <span>{CATEGORY1}</span>
        <span>{CATEGORY2}</span>
        <span>{CATEGORY3}</span>
      </div>
      <div>
        <div>
          <img src={`${process.env.REACT_APP_API_URL}/data/items/sub/${ID}/${IMG_URL}`} alt="" />
        </div>
        <div>
          <div>
            <p>{BRAND}</p>
            <p>{TITLE}</p>
          </div>
          <div>
            <div>
              <p>판매가</p>
              <p>{PRICE}</p>
            </div>
            <div>
              <p>적립금</p>
              <p>{EVENT_PRICE}</p>
            </div>
            <div>
              <p>배송비</p>
              <p>{DELIVERY_PRICE}</p>
            </div>
            <div>
              <p>무이자할부</p>
              <p>{NONE_TAX}</p>
            </div>
            <div>
              <p>예상수령일</p>
              <p>{DELIVERY_DATE}</p>
            </div>
            <p>---</p>
            <div>
              {(Object.entries(JSON.parse(OPTIONS)).map((v) =>
                <ItemOptions option={v} key={uuid()} />             
              ))
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        {text.map((v) =>
          <ItemDescribe option={v} key={uuid()} ID={ID} />             
              )}
      </div>
    </div>
  );
}

