// PhysiqueComponent.js

import React from 'react';
import { Link } from 'gatsby';  // Import Link from Gatsby
import Header from '../components/header';  // Check the correct path for Header and Footer components
import Footer from '../components/Footer';  // Check the correct path for Header and Footer components
import './Branche.css';

const Branche = () => {
  return (
    <div className="desktop">
      <Header />

      <div className="overlap-group-wrapper">
        <div className="overlap-group">
        <Link to="/Informatique"><div className="frame"></div>  </Link>
          <div className="div"></div>
          <div className="frame-2"></div>
          <div className="frame-3"></div>
          <div className="frame-4"></div>
          <div className="frame-5"></div>
          <div className="frame-6"></div>
          <div className="frame-7"></div>
          <div className="text-wrapper">
              Informatique
          </div>
          <div className="text-wrapper-2">Physique</div>
          <div className="text-wrapper-3">Mathematique</div>
          <div className="text-wrapper-4">Phylosophie</div>
          <div className="text-wrapper-5">Islamique</div>
          <div className="text-wrapper-6">SVT</div>
          <div className="text-wrapper-7">Francais</div>
          <div className="text-wrapper-8">Anglais</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Branche;
