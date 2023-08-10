import React from 'react';
import './../../App.css';
import { Header } from '../header/Header';
import { Navigation } from '../nav/Navigation';
import { Profile } from '../profile/Profile';

function SocialNet() {
  return (
    <div>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}

export default SocialNet;
