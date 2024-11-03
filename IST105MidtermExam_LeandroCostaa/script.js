// Inicializa o Firebase
const firebaseConfig = {
    // suas credenciais do Firebase aqui
};

firebase.initializeApp(firebaseConfig);

document.getElementById("send-code").addEventListener("click", function() {
    const phoneNumber = document.getElementById("phone").value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('send-code', {
        'size': 'invisible',
        'callback': (response) => {
            // O reCAPTCHA foi resolvido, enviar o código de verificação
            sendVerificationCode(phoneNumber);
        }
    });

    appVerifier.verify().then(() => {
        sendVerificationCode(phoneNumber);
    });
});

function sendVerificationCode(phoneNumber) {
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            document.getElementById("code-section").style.display = "block";
            alert("Código de verificação enviado!");
        }).catch((error) => {
            console.error("Erro ao enviar código:", error);
        });
}

document.getElementById("verify-code").addEventListener("click", function() {
    const code = document.getElementById("code").value;
    confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        alert("Login bem-sucedido!");
        // Redirecione ou faça o que precisar após o login
    }).catch((error) => {
        console.error("Erro ao verificar código:", error);
        alert("Código incorreto. Tente novamente.");
    });
});
