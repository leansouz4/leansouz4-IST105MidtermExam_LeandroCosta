// // Firebase configuration
const firebaseConfig = {
    // Coloque suas configurações do Firebase aqui
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check if user is authenticated
auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "index.html"; // Redirect to login page if not logged in
    }
});

// Logout function
document.getElementById('logoutButton').addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = "index.html"; // Redirect to login page after logout
    }).catch(error => {
        console.error("Error during logout:", error);
    });
});
