import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Navbar from './components/Navbar';
import TBR from './components/TBR';
import MojaPolka from './components/MojaPolka';
import Katalog from './components/Katalog';
import Najlepsze from './components/Najlepsze';
import Favorites from './components/Favorites';
import SearchBox from './components/SearchBox';
import Profile from './components/Profile';
import AuthForms from './components/AuthForms';
import BookDetails from './components/BookDetail';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/TBR" element={<PrivateRoute><TBR /></PrivateRoute>} />
                    <Route path="/MojaPolka" element={<PrivateRoute><MojaPolka /></PrivateRoute>} />
                    <Route path="/katalog" element={<Katalog />} />
                    <Route path="/Najlepsze" element={<Najlepsze />} />
                    <Route path="/Favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
                    <Route path="/SearchBox" element={<SearchBox />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/AuthForms" element={<AuthForms />} />
                    <Route path="/books/:id" element={<BookDetails />} />
                </Routes>
        </AuthProvider>
    );
};

export default App;