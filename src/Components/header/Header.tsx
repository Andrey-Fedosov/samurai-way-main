import React from 'react';
import './../../../src/App.css';
import { HeaderData } from '../HeaderData';

export function Header() {
  return (
    <>
      <header className="header">
        <HeaderData title="React Masters" />
      </header>
    </>
  );
}
