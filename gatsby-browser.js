import './src/styles/global.css'
import './src/components/layout.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import React from 'react';
import { MyContextProvider } from './src/context/MyContext';

export const wrapRootElement = ({ element }) => {
  return <MyContextProvider>{element}</MyContextProvider>;
};
const firebaseConfig = {
    apiKey: "AIzaSyDnviuEEoxRvC_e4gye7B5e-XB4UFA4V7Q",
    authDomain: "projet1-1ade1.firebaseapp.com",
    projectId: "projet1-1ade1",
    storageBucket: "projet1-1ade1.appspot.com",
    messagingSenderId: "591026537663",
    appId: "1:591026537663:web:2a3bd5228c8f7055a6320a",
    measurementId: "G-RMLZEVL7DD"
  };
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
