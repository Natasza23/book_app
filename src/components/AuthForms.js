import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import '../App.css';

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

            // Usuwamy wcześniej przypisane event listenery, aby uniknąć podwójnego przypisania
            const loginSubmit = document.getElementById('loginBtn');
            const signUpSubmit = document.getElementById('signUpBtn');
            const reset = document.getElementById('reset');

            if (loginSubmit) {
                loginSubmit.removeEventListener("click", handleLogin);
                loginSubmit.addEventListener("click", handleLogin);
            }

            if (signUpSubmit) {
                signUpSubmit.removeEventListener("click", handleSignUp);
                signUpSubmit.addEventListener("click", handleSignUp);
            }

            if (reset) {
                reset.removeEventListener("click", handleReset);
                reset.addEventListener("click", handleReset);
            }
        }

        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    login(userCredential.user);
                    navigate("/LoggedIn");
                })
                .catch((error) => {
                    alert(error.message);
                });
        }

        function handleSignUp(event) {
            event.preventDefault();
            const email = document.getElementById('signUpEmail').value;
            const password = document.getElementById('signUpPassword').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    login(userCredential.user);
                    alert("Konto utworzone");
                    navigate("/LoggedIn");
                })
                .catch((error) => {
                    alert(error.message);
                });
        }

        function handleReset(event) {
            event.preventDefault();
            const email = document.getElementById('resetEmail').value;

            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Wysłano email ze zmianą hasła");
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }, [navigate, login]);

    if (user) {
        return null;
    }

    return (
        <section className="home">
            <div className="form_container">
                <i className="uil uil-times form_close"></i>
                <div className="form login_form">
                    <form action="#">
                        <h2>Zaloguj się</h2>
                        <div className="input_box">
                            <input type="email" placeholder="Wpisz swój email" id="loginEmail" required />
                            <i className="uil uil-envelope-alt email"></i>
                        </div>
                        <div className="input_box">
                            <input type="password" placeholder="Wpisz swoje hasło" id="loginPassword" required />
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
                            <input type="email" placeholder="Wpisz swój email" id="signUpEmail" required />
                            <i className="uil uil-envelope-alt email"></i>
                        </div>
                        <div className="input_box">
                            <input type="password" placeholder="Wpisz swoje hasło" id="signUpPassword" required />
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