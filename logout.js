import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"



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

//wyloguj
const logout = document.getElementById('logout_btn');
logout.addEventListener("click", function (event) {
    event.preventDefault()
    //input

    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "index.html"
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
})