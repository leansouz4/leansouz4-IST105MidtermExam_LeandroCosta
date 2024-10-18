window.addEventListener('load', function () {

    // Listen for auth state changes

    document.getElementById('sign-in-button').addEventListener('click', function () {

        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Login successful', result.user);
                location.href = 'home.html';
            })
            .catch(function (error) {
                console.error('Login failed', error);
                alert('Google login failed. Please try again.');
            });
    });

    document.getElementById('sign-in-2').addEventListener('click', function () {

        let emailTxt = document.getElementById('email').value;
        let passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                console.log('Login successful');
                alert('Login successful!');
                location.href = 'culturalconnections.html';
            })
            .catch((error) => {
                let errorMessage = error.message;
                console.error('Login failed', errorMessage);
                alert('Email/Password login failed. ' + errorMessage);
            });

    });
});

// Function for Phone Number login
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
            console.error('Phone login failed:', error);
            alert('Phone login failed. Please check your number and try again.');
        });
}
