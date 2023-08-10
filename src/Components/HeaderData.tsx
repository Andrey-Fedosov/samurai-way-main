import React from 'react';
import './../../src/App.css';
import Logoimage from './../../src/assets/logo192.png';

type HeaderDataPropsType = {
  title: string;
};

export function HeaderData(props: HeaderDataPropsType) {
  return (
    <>
      <div className="logo">
        <img src={Logoimage} alt="" width="70px" />
      </div>

      <div className="title-h1-box">
        <h1 className="title-h1">{props.title}s</h1>
      </div>
    </>
  );
}
