// AuthForms.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import '../App.css'; // Zakładając, że style są w App.css
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDbLAoMJSmfJqEEXmirGedS-dMYTyqrIGs",
    authDomain: "ksiazki-app.firebaseapp.com",
    projectId: "ksiazki-app",
    storageBucket: "ksiazki-app.appspot.com",
    messagingSenderId: "444970370079",
    appId: "1:444970370079:web:e5ea117e6021efaa97012a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthForms = () => {
    const navigate = useNavigate();
    const { login, user } = useAuth();

    useEffect(() => {
        const formOpenBtn = document.querySelector("#form-open");
        const home = document.querySelector(".home");
        const formContainer = document.querySelector(".form_container");
        const formCloseBtn = document.querySelector(".form_close");
        const signupBtn = document.querySelector("#signup");
        const loginBtn = document.querySelector("#login");
        const pwShowHide = document.querySelectorAll(".pw_hide");

        if (formOpenBtn && home && formCloseBtn && signupBtn && loginBtn) {
            formOpenBtn.addEventListener("click", () => home.classList.add("show"));
            formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

            pwShowHide.forEach((icon) => {
                icon.addEventListener("click", () => {
                    let getPwInput = icon.parentElement.querySelector("input");
                    if (getPwInput.type === "password") {
                        getPwInput.type = "text";
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    } else {
                        getPwInput.type = "password";
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    }
                });
            });

            signupBtn.addEventListener("click", (e) => {
                e.preventDefault();
                formContainer.classList.add("active");
            });

            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                formContainer.classList.remove("active");
            });

            const loginSubmit = document.getElementById('loginBtn');
            if (loginSubmit) {
                loginSubmit.addEventListener("click", (event) => {
                    event.preventDefault();
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;

                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            login(userCredential.user);
                            navigate("/Profile");
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                });
            }

            const signUpSubmit = document.getElementById('signUpBtn');
            if (signUpSubmit) {
                signUpSubmit.addEventListener("click", (event) => {
                    event.preventDefault();
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;

                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            login(userCredential.user);
                            alert("Konto utworzone");
                            navigate("/Profile");
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                });
            }

            const reset = document.getElementById('reset');
            if (reset) {
                reset.addEventListener("click", (event) => {
                    event.preventDefault();
                    const email = document.getElementById('email').value;

                    sendPasswordResetEmail(auth, email)
                        .then(() => {
                            alert("Wysłano email ze zmianą hasła");
                        })
                        .catch((error) => {
                            alert(error.message);
                        });
                });
            }
        }
    }, [navigate, login]);

    if (user) {
        return null; // Ukryj formularz, gdy użytkownik jest zalogowany
    }

    return (
        <section className="home">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
            <div className="form_container">
                <i className="uil uil-times form_close"></i>
                <div className="form login_form">
                    <form action="#">
                        <h2>Zaloguj się</h2>
                        <div className="input_box">
                            <input type="email" placeholder="Wpisz swój email" id="email" required />
                            <i className="uil uil-envelope-alt email"></i>
                        </div>
                        <div className="input_box">
                            <input type="password" placeholder="Wpisz swoje hasło" id="password" required />
                            <i className="uil uil-lock password"></i>
                            <i className="uil uil-eye-slash pw_hide"></i>
                        </div>
                        <div className="option_field">
                            <span className="checkbox">
                                <input type="checkbox" id="check" />
                                <label htmlFor="check">Zapamiętaj mnie</label>
                            </span>
                            <a href="#" className="forgot_pw">Zapomniałeś hasła?</a>
                        </div>
                        <button className="button" id="loginBtn">Zaloguj się</button>
                        <div className="login_signup">Nie masz konta? <a href="#" id="signup">Zarejestruj się</a></div>
                    </form>
                </div>
                <div className="form signup_form">
                    <form action="#">
                        <h2>Zarejestruj się</h2>
                        <div className="input_box">
                            <input type="email" placeholder="Wpisz swój email" id="email" required />
                            <i className="uil uil-envelope-alt email"></i>
                        </div>
                        <div className="input_box">
                            <input type="password" placeholder="Wpisz swoje hasło" id="password" required />
                            <i className="uil uil-lock password"></i>
                            <i className="uil uil-eye-slash pw_hide"></i>
                        </div>
                        <button className="button" id="signUpBtn">Zarejestruj się</button>
                        <div className="login_signup">Masz już konto? <a href="#" id="login">Zaloguj się</a></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AuthForms;