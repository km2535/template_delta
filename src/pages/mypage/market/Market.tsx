import React from 'react';

export default function Market({ setMarket }: { setMarket: React.Dispatch<React.SetStateAction<boolean>> }) {
  const closing = () => {
    setMarket((prev) => !prev)
  }
  return (
    <div>
      마케팅
      <div onClick={closing}>X</div>
    </div>
  );
}

