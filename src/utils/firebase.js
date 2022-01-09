// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbgP-N_YapAirFRF80Vi321qzr9caXAos",
  authDomain: "twitter-clone-628ed.firebaseapp.com",
  projectId: "twitter-clone-628ed",
  storageBucket: "twitter-clone-628ed.appspot.com",
  messagingSenderId: "658671718283",
  appId: "1:658671718283:web:f68a9c305002ca7c9ce98e",
  measurementId: "G-5GMRM99V60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
