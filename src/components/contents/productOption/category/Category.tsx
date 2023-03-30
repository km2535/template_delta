import React,{ useEffect, useState } from 'react';
import { NavbarMenu } from '../../../../api/navbarMenu/NavbarMenu';
import { navbar } from '../../../../type/Type';
import { v4 as uuid } from "uuid";
import { AiOutlinePlus } from "react-icons/ai"


export default function Category() {
   const [navbarMenu, setNavbarMenu] = useState<navbar[]>([]);

  useEffect(() => {
    NavbarMenu(setNavbarMenu)
  }, [])

  return (
    <>
      <div>
          <div>카테고리</div>
          <div><AiOutlinePlus/></div>
      </div>
      <div>
          {navbarMenu.map((list) =>
            <li key={uuid()}>{list.listName}</li>
          )}
      </div>
    </>
  );
}

