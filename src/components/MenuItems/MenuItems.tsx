import React, { ReactNode, useEffect, useRef } from 'react'
import { useState } from 'react';
import { ISubMenuItems } from '../Header/Header';
import s from './MenuItems.module.css';

interface IMenuItems{
   children?: ReactNode;
   subMenuItems?:ISubMenuItems[];
}

const MenuItems = ({subMenuItems, children}:IMenuItems) => {
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const wrapperRef = useRef<HTMLLIElement>(null);

   function ClickOpenSubMenu(){
      setOpenSubMenu(!openSubMenu);
   }

   useEffect(()=>{
      function handleClickOutside(event:MouseEvent) {
         if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {            
            setOpenSubMenu(false);
         }
       }
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
         document.removeEventListener("mousedown", handleClickOutside);
       };
   },[wrapperRef]);
  return (
    <>
      <li className={s.item} onClick = {ClickOpenSubMenu} ref={wrapperRef}>
         <span className={s.title}>
            {children}
            {subMenuItems?openSubMenu?<img src='./images/icon-arrow-up.svg' alt = 'Close Menu' className={s.arrow}/>:<img src='./images/icon-arrow-down.svg' alt = 'Open Menu' className={s.arrow}/>:''}
         </span>
            {subMenuItems&&openSubMenu?<div className={[s.subMenu, (children?.toString() === 'Features')?s.fistSubMenu:''].join(' ')}>
            <ul>
               {subMenuItems.map((item, index)=><li key={item.title + index} className={s.subItem}>
                  <a href = {item.url}>
                        {item.image?<img src={item.image} alt={item.title}/>:''}
                        {item.title}
                     </a>
                  </li>)}
            </ul>
         </div>:''}
      </li>
    </>
  )
}

export default MenuItems