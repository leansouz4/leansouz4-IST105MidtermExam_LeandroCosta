// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl0FqiZkI2HXevSLagtLCFLZD9y4vwlpQ",
  authDomain: "ist105midtermexam-leandrocosta.firebaseapp.com",
  projectId: "ist105midtermexam-leandrocosta",
  storageBucket: "ist105midtermexam-leandrocosta.appspot.com",
  messagingSenderId: "854385990503",
  appId: "1:854385990503:web:a01afa814b7f05921cedc2"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);