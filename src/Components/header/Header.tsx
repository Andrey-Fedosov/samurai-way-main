import React from 'react';
import st from './../header/Header.module.css';
import { HeaderData } from '../headerData/HeaderData';

export function Header() {
  return (
    <>
      <header className={st.header}>
        <HeaderData title="React Masters" />
      </header>
    </>
  );
}
