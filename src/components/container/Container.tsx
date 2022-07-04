import React, { PropsWithChildren } from 'react';
import s from './Container.module.css';

const Container = ({children}:PropsWithChildren<{}>) => {
  return (
    <div className={s.Container}>{children}</div>
  )
}

export default Container;