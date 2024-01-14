import React from 'react';
import './Footer.css'; // You can import the CSS file or include the styles directly in your component
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer>

      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Best Developer</a>
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href=""><i class="bi bi-github"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="bi bi-facebook"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
