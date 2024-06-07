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
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
                <div className="wrapper">
                    <div className="navbar">
                        <img src={logo} className="nav_logo" alt="logo" />
                        <div className="navMenu">
                            <ul>
                                <li><Link to="/MainPage">Strona główna</Link></li>
                                {user && (
                                    <>
                                        <li><Link to="/TBR">Chcę przeczytać</Link></li>
                                        <li><Link to="/MojaPolka">Moja półka</Link></li>
                                        <li><Link to="/Favorites">Ulubione</Link></li>
                                    </>
                                )}
                                <li><Link to="/katalog">Katalog</Link></li>
                                <li><Link to="/Najlepsze">Najlepiej oceniane</Link></li>
                                <li><Link to="/SearchBox">Szukaj</Link></li>
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