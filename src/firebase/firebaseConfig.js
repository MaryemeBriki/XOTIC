import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpcYhg5ttfRRAVA1JzKysnymlVZnw79N4",
    authDomain: "alumni-337f2.firebaseapp.com",
    projectId: "alumni-337f2",
    storageBucket: "alumni-337f2.appspot.com",
    messagingSenderId: "834435876291",
    appId: "1:834435876291:web:b40539fab07e7953552976",
    measurementId: "G-NT0283WR1G"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);