// js/main.js
window.addEventListener('load', function () {
    // Login com Google
    document.getElementById('sign-in-button').addEventListener('click', function () {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Logging successfully', result.user);
                location.href = 'home.html';
            })
            .catch(function (error) {
                console.log('Logging failed', error);
            });
    });

    // Login com Email e Senha
    document.getElementById('sign-in-2').addEventListener('click', function () {
        let emailTxt = document.getElementById('email').value;
        let passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                console.log('Logging successfully');
                alert('Logging successfully');
                location.href = 'culturalconnections.html';
            })
            .catch((error) => {
                console.log('Logging failed', error.message);
            });
    });
});

// Função de Login com Telefone
function signInWithPhone() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmationResult => {
            const code = window.prompt('Enter the verification code sent to your phone:');
            return confirmationResult.confirm(code);
        })
        .then(result => {
            console.log('User signed in successfully:', result.user);
            window.location.href = "culturalconnections.html";
        })
        .catch(error => {
            console.error('Error during sign in:', error);
        });
}
