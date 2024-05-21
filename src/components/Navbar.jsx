import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import SearchBox from './SearchBox';


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
                    
                    <li><Link to="/katalog"><h3>Katalog</h3></Link></li>
                    <li><a href="spolecznosc.html" class="link">Społeczność</a></li>
                    <li><a href="top100.html" class="link">Top 100</a></li>
                    <li><Link to="/Favorites"><h3>Ulubione</h3></Link></li>

                </ul>
            </div>
            <div class="search">
                <SearchBox/>
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