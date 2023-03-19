import React,{useState} from 'react';
import {FiSearch} from "react-icons/fi"

export default function Search() {
  const [newText, setNewText] = useState<Object>({});
  
  const searchText = (e : React.ChangeEvent<HTMLInputElement>) => {
    // 텍스트를 입력하고 검색버튼을 누르면
    setNewText({newText : e.target.value})
  }
  const searchHandler = () => {
    // 상품을 sql문으로 검색을 하고 현재 상품을 담고 있는 state를 변경하여 
    // section의 상품 리스트를 변경시킨다.
    console.log(newText);
  }
  return (
    <div>
      <input type="text" onChange={searchText}/>
      <button onClick={searchHandler}>
        <FiSearch/>
      </button>
    </div>
  );
}

