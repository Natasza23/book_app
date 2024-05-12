import React from 'react';
import '../App.css';



const Navbar = () => {
    return (
        
        <div class="wrapper">
        <div className="navbar">
            <div class="logo">
                <p>LOGO</p>
            </div>
            <div class="navMenu">
                <ul>
                    <li><a href="index.html" class="link">Strona główna</a></li>
                    <li><a href="Nowosci.html" class="link">Nowości</a></li>
                    <li><a href="katalog.html" class="link">Katalog</a></li>
                    <li><a href="spolecznosc.html" class="link">Społeczność</a></li>
                    <li><a href="top100.html" class="link">Top 100</a></li>
                    <li><a href="/Favorites" class="link">Ulubione</a></li>

                </ul>
            </div>
            <div class="navButton">
                <button class="button" id="logIn">Zaloguj</button>
                <button class="button" id="signIn">Zarejestruj</button>
            </div>
            <div class="navMenuButton">
                <i class="bx bx-menu"></i>
            </div>
        </div>
        </div>
    );

};

export default Navbar;