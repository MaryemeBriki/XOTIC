import React from 'react';
import { Link } from 'gatsby';
import '../style/style.css';
import '../style/index.css';
import Header from '../components/header';
import Footer from '../components/Footer';

const welecome = () => {
  return (
    <div>
      
      <div>
        <Header />
        <div className="login_box">
          <div className="login-header">
          <h1>Welcome to Your Website</h1>
            <p className="welcome-text">
            Welecome To Alumni you are know a member in our community.
            You can find some informations about the laureates of ENS.
            You can also contact with them thanks to the contact informations like emails or social media .
            You can chose the sector you intersted about, follow this <Link to="/Branche">Link, Different Sector</Link>            
            
              
            </p>
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default welecome;
