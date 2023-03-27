import React, { useEffect, useState } from 'react';
import { ItemsArrangeMethod } from '../../../api/items/ItemsArrangeMethod';
import IntroItems from './introItems/IntroItems';
import { v4 as uuid } from "uuid";
import { optionsType } from '../../../type/Type';

export default function IntroProduct() {
  const [options, setOptions] = useState<optionsType[]>([]);
    useEffect(()=>{
    ItemsArrangeMethod(setOptions);
    }, [])
  
  return (
    <div>
      {options.length > 0 && 
        options.map((option) => options && <IntroItems key={uuid()} option={option} />)
      }
    </div>
  );
}

