import React from 'react';
import './laur2024.css';
import { Link } from 'gatsby';  // Import Link from Gatsby
import Header from '../components/header';  // Check the correct path for Header and Footer components
import Footer from '../components/Footer';
import Ellipse69 from '../images/ellipse-69.png';
import Ellipse77 from '../images/ellipse-77.png';
import Ellipse75 from '../images/ellipse-75.png';
import Ellipse70 from '../images/ellipse-70.png';


const laur2024 = () => {
  return (
    <div className="desktop22">
        <Header/>
        <br/>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <div className="frame"></div>
            <div className="text-wrapper">laureat 2024</div>
          </div>
          <img className="ellipse" src={Ellipse69} alt="Ellipse 1" />
          <img className="img" src={Ellipse77} alt="Ellipse 2" />
          <img className="ellipse-2" src={Ellipse77} alt="Ellipse 3" />
          <img className="ellipse-3" src={Ellipse70} alt="Ellipse 4" />
         <img className="ellipse-4" src={Ellipse70} alt="Ellipse 5" />
          <img className="ellipse-5" src={Ellipse69} alt="Ellipse 6" />
          <img className="ellipse-6" src={Ellipse70} alt="Ellipse 7" />
          <img className="ellipse-7" src={Ellipse70} alt="Ellipse 8" />
          <img className="ellipse-8" src={Ellipse75} alt="Ellipse 9" />
          <img className="ellipse-9" src={Ellipse77} alt="Ellipse 10" />
          <a href='/Nisrine'><img className="ellipse-10" src={Ellipse77} alt="Ellipse 11" /></a>
          <div className="div">ABIDY Yasser</div>
         <a href='/Nisrine'><div className="text-wrapper-2">AIDA Nisrine</div></a> 
          <div className="text-wrapper-3">BAHSSI Hfsa</div>
          <div className="text-wrapper-4">BELKBIR Kaoutar</div>
          <div className="text-wrapper-5">BENAOUI Chaimae</div>
          <div className="text-wrapper-6">BENAZZEDDINE Med Nour</div>
          <div className="text-wrapper-7">BENLHOMES Youness</div>
          <div className="text-wrapper-8">BENMOUMEN Oumaima</div>
          <div className="text-wrapper-9">BOUCHKARA Nassima</div>
          <div className="text-wrapper-10">BOUDRAA Anas</div>
          <div className="text-wrapper-11">BRIKI Maryem</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default laur2024;
