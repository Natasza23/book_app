import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://console.firebase.google.com/u/1/project/ksiazki-app/database/ksiazki-app-default-rtdb/data/~2F",

    apiKey: "AIzaSyDbLAoMJSmfJqEEXmirGedS-dMYTyqrIGs",

    authDomain: "ksiazki-app.firebaseapp.com",

    projectId: "ksiazki-app",

    storageBucket: "ksiazki-app.appspot.com",

    messagingSenderId: "444970370079",

    appId: "1:444970370079:web:e5ea117e6021efaa97012a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
var database = getDatabase(app);

// tu musi iść kod dotyczący bazy danych
