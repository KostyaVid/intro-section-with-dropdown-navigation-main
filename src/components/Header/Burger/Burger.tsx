import React from 'react';
import s from './Burger.module.css'

interface IBurger{
   onClick:()=>void;
   activeMobileMenu:boolean;
}

const Burger = ({onClick,activeMobileMenu}:IBurger) => {
   function openClick(){
      if(onClick) onClick();
   }



  return (
   <div className={[s.burger, activeMobileMenu?s._active:''].join(' ')} onClick={openClick}><span></span></div>
  )
}

export default Burger