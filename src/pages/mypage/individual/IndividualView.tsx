import React from 'react';

export default function IndividualView({setindividual} : {setindividual: React.Dispatch<React.SetStateAction<boolean>>}
) {
  const closed = () => {
    setindividual((prev) => !prev)
  }
  return (
    <div>
      개인정보처리지침
      <div onClick={closed}>X</div>
    </div>
  );
}

