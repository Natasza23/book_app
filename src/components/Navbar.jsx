import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import AuthForms from './AuthForms';
import { useAuth } from './context/AuthContext';
import logo from '../logo.png';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <header className="header">
                <div className="wrapper">
                    <div className="navbar">
                        <img src={logo} className="nav_logo" alt="logo" />
                        <div className="navMenu">
                            <ul>
                                <li><Link to="/MainPage"><h3>Strona główna</h3></Link></li>
                                {user && (
                                    <>
                                        <li><Link to="/TBR"><h3>Chcę przeczytać</h3></Link></li>
                                        <li><Link to="/MojaPolka"><h3>Moja półka</h3></Link></li>
                                        <li><Link to="/Favorites"><h3>Ulubione</h3></Link></li>
                                    </>
                                )}
                                <li><Link to="/katalog"><h3>Katalog</h3></Link></li>
                                <li><Link to="/Najlepsze"><h3>Najlepiej oceniane</h3></Link></li>
                                <li><Link to="/SearchBox"><h3>Szukaj</h3></Link></li>
                            </ul>
                            {!user ? (
                                <button className="button" id="form-open">Zaloguj</button>
                            ) : (
                                <button className="button" onClick={logout}>Wyloguj</button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <AuthForms />
        </>
    );
};

export default Navbar;