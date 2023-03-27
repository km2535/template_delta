import React, { useEffect, useState } from 'react';
import { readNewItems } from '../../../../api/items/readNewItems';
import Item from '../Item/Item';
import { v4 as uuid } from "uuid";
import ItemsTypes, { optionsType } from '../../../../type/Type';
import { readPopularItems } from '../../../../api/items/readPopularItems';

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

        break;
    }
  },[option.ARRANGE, option.LIST_COUNT])
  return (
    <div>
      <div>
        {option.TITLE}
      </div>
      {item.map((value) => <Item key={uuid()} value={value} />)}
    </div>
  );
}

