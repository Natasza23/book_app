import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"



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
const submit = document.getElementById('signUpBtn');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    //input

    var email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Konto utworzone")
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
