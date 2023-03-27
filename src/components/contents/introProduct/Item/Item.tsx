import React from 'react';
import ItemsTypes from '../../../../type/Type';

export default function Item({ value }: { value: ItemsTypes }) {
  // 아이템 카드를 만들면 됨.
  return (
    <div>
      {value.TITLE}
    </div>
  );
}

