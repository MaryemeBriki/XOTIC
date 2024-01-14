// MyComponent.js

import React from 'react';
import './Informatique.css';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/Footer';

const MyComponent = () => {
  return (
    <div className="desktop1">
      <Header/>
      <div className="overlap-group-wrapper1">
        <div className="overlap-group">
          <div className="frame"></div>
          <div className="div"></div>
          <div className="frame-2"></div>
         <div className="frame-3"></div>
          <div className="text-wrapper">Laureat 2024</div>
          <div className="text-wrapper-2">Laureat 2022</div>
          <div className="text-wrapper-3">Laureat 2023</div>
          <div className="text-wrapper-4"><a href='/laur2024'>Laureat 2024</a></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyComponent;
