import React from 'react';
import '../zaloguj.css';

const LoginForm = () => {
    return (
        <div class="formBox">
            <div class="registerContainer" id="register">
                <div class="top">
                    
                    <header>Zaloguj się</header>
                </div>
                <div class="forms">
                    <div class="inputBox">
                        <input type="text" class="inputField" placeholder="Login"/>
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="inputBox">
                        <input type="text" class="inputField" placeholder="Email"/>
                        <i class="bx bx-envelope"></i>
                    </div>
                    <div class="inputBox">
                        <input type="text" class="inputField" placeholder="Hasło"/>
                        <i class="bx bx-lock-alt"></i>
                    </div>
                    <div class="inputBox">
                        <input type="submit" class="submit" value="Zaloguj"/>
                    </div>
                    <div class="columns">
                        <div class="checkbox">
                            <input type="checkbox" id="registerCheck"/>
                            <label for="registerCheck">Zapamiętaj mnie</label>
                        </div>
                        <div class="terms">
                            <span><a href="#">Regulamin</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    

    );
};

export default LoginForm;