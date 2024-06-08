import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };