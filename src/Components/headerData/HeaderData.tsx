import React from 'react';
import st from './../headerData/HeaderData.module.css';
import Logoimage from './../../assets/logo192.png';

type HeaderDataPropsType = {
  title: string;
};

export function HeaderData(props: HeaderDataPropsType) {
  return (
    <>
      <div className="logo">
        <img src={Logoimage} alt="" width="70px" />
      </div>

      <div className={st.titleH1Box}>
        <h1 className="titleH1">{props.title}s</h1>
      </div>
    </>
  );
}
