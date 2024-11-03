// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALgiY-zLXvBmv-b9rflTAoLJ4ZQdscfv0",
  authDomain: "newwproject-abfec.firebaseapp.com",
  projectId: "newwproject-abfec",
  storageBucket: "newwproject-abfec.firebasestorage.app",
  messagingSenderId: "178437666218",
  appId: "1:178437666218:web:98e3d883ac965b1d0267d3",
  measurementId: "G-Z7NNF5QMB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);