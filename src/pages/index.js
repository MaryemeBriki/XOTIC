import React from 'react';
import { Link } from 'gatsby';
import '../style/style.css';
import '../style/index.css';
import Header from '../components/header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      
      <div>
        <Header />
        <div className="login_box">
          <div className="login-header">
          <h1>Welcome to Your Website</h1>
            <p className="welcome-text">
            Welcome to the homepage of our educational platform, Alumni! We are delighted to have you here. Log in now to enjoy exclusive features. Our platform holds the data of students from Mohamed V University, allowing you to discover contacts of students from various schools and faculties within the university. Additionally, you have the option to find the contact information of each student, facilitating the maintenance of connections with your classmates and alumni. This feature is extremely useful for staying in touch with the entire community! 😊🎓            </p>
            <p>
            Don't have an account yet?{' '}
              <Link to="/Signup">Sign up here</Link>  and join our community today!
            </p>
            <p>
            Already a member?{' '}
              <Link to="/Login">Log in here</Link> to access your account.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
