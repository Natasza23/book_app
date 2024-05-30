import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import SearchBox from './SearchBox';


const Navbar = () => {
    return (
        
        <div class="wrapper">
        <div className="navbar">
            <div class="logo">
                <p>Book App</p>
                
            </div>
            <div class="navMenu">
                <ul>
                    
                    
                    <li><Link to="/MainPage"><h3>Strona główna</h3></Link></li>
                    <li><Link to="/TBR"><h3>Chcę przeczytać</h3></Link></li>
                    <li><Link to="/MojaPolka"><h3>Moja półka</h3></Link></li>
                    <li><Link to="/katalog"><h3>Katalog</h3></Link></li>
                    <li><Link to="/Najlepsze"><h3>Najlepiej oceniane</h3></Link></li>
                    <li><Link to="/Favorites"><h3>Ulubione</h3></Link></li>
                    <li><Link to="/SearchBox"><h3>Szukaj</h3></Link></li>
                   

                </ul>
            </div>
            
            <div class="navButton">
                <Link to="/zaloguj"><button class="button" id="logIn">Zaloguj</button></Link>
                <Link to="/zarejestruj"><button class="button" id="signIn" >Zarejestruj</button></Link>
            </div>
            <div class="navMenuButton">
                <i class="bx bx-menu"></i>
            </div>
        </div>
        </div>
    );

};

export default Navbar;