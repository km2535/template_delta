import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

export default function ItemOptions({ option }: { option: [string, any] }) {
  const [optionList] = useState<string[]>(option[1]);
  return (
    <div>
      <div>
        <p>{option[0]}</p>
        <p>
          <select name="" id="">
            {optionList.map((list) => <option key={uuid()}>{list}</option>)}
          </select>
        </p>
      </div>
    </div>
  );
}

