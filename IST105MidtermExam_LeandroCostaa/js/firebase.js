// Importa as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAl0FqiZkI2HXevSLagtLCFLZD9y4vwlpQ",
  authDomain: "ist105midtermexam-leandrocosta.firebaseapp.com",
  projectId: "ist105midtermexam-leandrocosta",
  storageBucket: "ist105midtermexam-leandrocosta.appspot.com",
  messagingSenderId: "854385990503",
  appId: "1:854385990503:web:a01afa814b7f05921cedc2"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta o auth para ser usado em outros arquivos
export { auth, signInWithPhoneNumber, RecaptchaVerifier };
