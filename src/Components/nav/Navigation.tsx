import React from 'react';
import st from './../nav/Navigation.module.css';

export function Navigation() {
  return (
    <>
      <nav className={st.nav}>
        <div>
          <div className={st.item}>
            <a href="#">Profile</a>
          </div>
          <div className={st.item}>
            <a href="#">Messages</a>
          </div>
          <div className={`${st.item} ${st.active}`}>
            <a href="#">Friends</a>
          </div>
          <div className={st.item}>
            <a href="#">Music</a>
          </div>
          <div className={st.item}>
            <a href="#">Settings</a>
          </div>
        </div>
      </nav>
    </>
  );
}
