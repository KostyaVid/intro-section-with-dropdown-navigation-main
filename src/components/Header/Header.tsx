import React, { useState } from 'react'
import { Button  } from '../Button'
import { MenuItems } from '../MenuItems';
import { Burger } from './Burger';
import s from './Header.module.css'

export interface ISubMenuItems{
   title: string;
   url: string;
   image?: string;
}

const featuresSubMenu:ISubMenuItems[] = [
   {title: 'Todo List', url: '/' ,image: './images/icon-todo.svg'},
   {title: 'Calendar', url: '/' ,image: './images/icon-calendar.svg'},
   {title: 'Reminders', url: '/' ,image: './images/icon-reminders.svg'},
   {title: 'Planning', url: '/' ,image: './images/icon-planning.svg'},
];

const companySubMenu:ISubMenuItems[] = [
   {title: 'History', url: '/'},
   {title: 'Our Team', url: '/'},
   {title: 'Blog', url: '/'}
];

const Header = () => {

   const [activeMobileMenu, setActiveMobileMenu] = useState(false);

   function clickBurger(){
      setActiveMobileMenu(!activeMobileMenu);
   }


  return (
    <header className={s.header}>
      <div className={s.logo}>
         <img src="./images/logo.svg" alt="SNAP" width="84" height="27"/>
      </div>
      {activeMobileMenu?<div className={s.overlay} onClick={clickBurger}></div>:''}
      <div className={[s.menu, activeMobileMenu?s.mobileMenuActive:''].join(' ')}>
         <nav className={s.nav}>
            <ul className={s.nav__ul}>
               <MenuItems subMenuItems={featuresSubMenu}>Features</MenuItems>
               <MenuItems subMenuItems={companySubMenu}>Company</MenuItems>
               <MenuItems>Careers</MenuItems>
               <MenuItems>About</MenuItems>
            </ul>
         </nav>
         <div className={s.profile}>
            <Button width={true}>Login</Button>
            <Button outline={true} width={true}>Register</Button>
         </div>
      </div>
      <Burger onClick={clickBurger} activeMobileMenu = {activeMobileMenu}/>
    </header>
  )
}

export default Header