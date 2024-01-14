import React from 'react';
import Ellipse77 from '../images/ellipse-77.png';
import './Nisrine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPhone, faMinus } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import Footer from '../components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ProfileComponent = () => {
  return (
    <div className="desktopNi">
      <Header/>
      <div className="div">
        <div className="overlap-group">
        <img className="ellipse" src={Ellipse77} alt="Ellipse 2" />          
          <div className="AIDA-nisrine">AIDA&nbsp;&nbsp;Nisrine</div>
          <div className="overlap">
            <div className="text-wrapper">nisrineaida2001@gmail.com</div>
          </div>
          <div className="overlap-2">
            <div className="rectangle"></div>
            <div className="text-wrapper-2">nisrine_aida</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle"></div>
            <div className="text-wrapper-3">000000000</div>
          </div>
          <FontAwesomeIcon className="instagram" icon={faInstagram} />
          <FontAwesomeIcon className="phone-fill" icon={faPhone} />
          <FontAwesomeIcon className="subtract" icon={faMinus} />
          <div className="text-wrapper-4">Information Personnel</div>
          <div className="text-wrapper-5">Information Universitaire</div>
          <div className="overlap-4">
            <div className="text-wrapper-6">Contact</div>
            <p className="nom-complet-AIDA">
              <span className="span">Nom Complet</span>
              <span className="text-wrapper-7">: AIDA Nisrine<br /></span>
              <span className="span">Genre:</span>
              <span className="text-wrapper-7"> Femme <br /></span>
              <span className="span">Ville</span>
              <span className="text-wrapper-7">: Salé<br /></span>
              <span className="span">Date de naissance</span>
              <span className="text-wrapper-7">: 2001 <br /></span>
              <span className="span">Age</span>
              <span className="text-wrapper-7">: 22</span>
            </p>
            <p className="universit-universit">
              <span className="span">Université</span>
              <span className="text-wrapper-7">: Université Med 5<br /></span>
              <span className="span">Ecole:</span>
              <span className="text-wrapper-7"> ENS Rabat <br /></span>
              <span className="span">Filiere:</span>
              <span className="text-wrapper-7"> Informatique<br /></span>
              <span className="span">Année d&#39;inscritption</span>
              <span className="text-wrapper-7">: 2021<br /></span>
              <span className="span">Anneé de diplomation</span>
              <span className="text-wrapper-7"> 2024 <br /></span>
            </p>
          </div>
          
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default ProfileComponent;
