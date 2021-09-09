import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA223OHjMiY8vWiq3aWskbzG9DtkUbFuRU",
    authDomain: "clone-d2219.firebaseapp.com",
    projectId: "clone-d2219",
    storageBucket: "clone-d2219.appspot.com",
    messagingSenderId: "1010349170943",
    appId: "1:1010349170943:web:aec82fd265df32ea256cca",
    measurementId: "G-8TMRMVGK1R"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();

  export { db, auth }