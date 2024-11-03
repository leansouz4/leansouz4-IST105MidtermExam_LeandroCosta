// Importando as funções necessárias do SDK Firebase
import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALgiY-zLXvBmv-b9rflTAoLJ4ZQdscfv0",
    authDomain: "newwproject-abfec.firebaseapp.com",
    projectId: "newwproject-abfec",
    storageBucket: "newwproject-abfec.firebasestorage.app",
    messagingSenderId: "178437666218",
    appId: "1:178437666218:web:98e3d883ac965b1d0267d3",
    measurementId: "G-Z7NNF5QMB6"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para enviar link de autenticação por e-mail
export const sendSignInLink = (email) => {
    const actionCodeSettings = {
        // URL para redirecionamento após o link de autenticação
        url: 'https://yourapp.com/finishSignUp?cartId=1234',
        handleCodeInApp: true,
    };

    return sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // O link foi enviado com sucesso
            window.localStorage.setItem('emailForSignIn', email);
            console.log('Link de autenticação enviado para:', email);
        })
        .catch((error) => {
            console.error('Erro ao enviar link de autenticação:', error);
        });
};

// Função para lidar com o login via link enviado por e-mail
export const handleSignInWithEmailLink = (email, emailLink) => {
  if (isSignInWithEmailLink(auth, emailLink)) {
      return signInWithEmailLink(auth, email, emailLink)
          .then((result) => {
              // Login bem-sucedido
              console.log('Usuário autenticado:', result.user);
              // Redirecionar para culturalconnections.html
              window.location.href = 'culturalconnections.html'; // Altere para o caminho correto
          })
          .catch((error) => {
              console.error('Erro na autenticação:', error);
          });
  }
};
