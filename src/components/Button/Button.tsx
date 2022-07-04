import React, { PropsWithChildren } from 'react'
import s from './Button.module.css';

interface IButton{
   fill?: boolean;
   outline?:boolean;
   onClick?:()=>{};
   width?:boolean;
}

const Button = ({children, fill, outline, onClick,width}:PropsWithChildren<IButton>) => {
  return (
    <div className={[s.Button, outline?s.outline:'', fill?s.fill:'', width?s.width:''].join(' ')}
    onClick = {onClick}>{children}</div>
  )
}

export default Button