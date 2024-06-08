import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"



const firebaseConfig = {

    apiKey: "AIzaSyDbLAoMJSmfJqEEXmirGedS-dMYTyqrIGs",

    authDomain: "ksiazki-app.firebaseapp.com",

    projectId: "ksiazki-app",

    storageBucket: "ksiazki-app.appspot.com",

    messagingSenderId: "444970370079",

    appId: "1:444970370079:web:e5ea117e6021efaa97012a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//zarejestruj
const submit = document.getElementById('loginBtn');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    //input

    var email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "strona_uzytkownika.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})

const reset = document.getElementById('reset');
reset.addEventListener("click", function (event) {
    event.preventDefault()
    //input

    var email = document.getElementById('email').value;


    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Wysłano email ze zmianą hasła")
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})