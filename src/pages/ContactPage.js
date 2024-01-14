import React from 'react';
import './ContactPage.css'; // You can import the CSS file or include the styles directly in your component
import Header from '../components/header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Header/>
    <section className="contact">
      <div className="content">
        <br/><br/><br/><h2>Contact Us</h2>
        <br/>  <br/>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem numquam id reprehenderit, sunt laudantium enim possimus repellat debitis et quis!
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><ion-icon name="location-outline"></ion-icon></div>
            <div className="text">
              <h3>Address</h3>
              <p>402671 Sugar Camp Road,<br />Owatonna,Minnesota,<br />55025060</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><ion-icon name="call-outline"></ion-icon></div>
            <div className="text">
              <h3>Phone</h3>
              <p>000-000-0000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><ion-icon name="mail-outline"></ion-icon></div>
            <div className="text">
              <h3>Email</h3>
              <p>wrub7d78i0e@temporary-mail</p>
            </div>
          </div>
          <h2 className="txt">Connect with us</h2>
          <ul className="sci">
            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
          </ul>
        </div>

        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
       
      </div>
    </section>
    <Footer/>
    </div>

  );
};

export default ContactPage;
