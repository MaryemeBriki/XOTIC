import React, { useState } from 'react';
import { Link } from 'gatsby';
import { faUser, faDesktop,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.css';
import '../components/index.module.css'; // Import the CSS file for styling

const HomePage = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  return (
    <div className="background text-center flex flex-col items-end p-8">
      <Header />

      <div className="flex flex-col items-end ml-right">
        <Link to="/play?opponent=player">
          <button className="bg-yellow-500 hover:bg-pink-700 text-white font-bold py-8 px-16 rounded mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Play VS Player
          </button>
        </Link>
        <Link to="/play?opponent=computer">
          <button className="bg-pink-500 hover:bg-yellow-700 text-white font-bold py-8 px-16 rounded">
            <FontAwesomeIcon icon={faDesktop} className="mr-2" />
            Play VS Computer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
