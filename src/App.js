import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Navbar from './components/Navbar';
/*import MainPage from './components/MainPage';*/
import TBR from './components/TBR';
import MojaPolka from './components/MojaPolka';
import Katalog from './components/Katalog';
import Najlepsze from './components/Najlepsze';
import Favorites from './components/Favorites';
import SearchBox from './components/SearchBox';
import Profile from './components/Profile';
import AuthForms from './components/AuthForms';
import BookDetails from './components/BookDetail';

const App = () => {
    return (
        <AuthProvider>
                <Navbar />
                <Routes>
                    {/*<Route path="/MainPage" element={<MainPage />} />*/}
                    <Route path="/TBR" element={<TBR />} />
                    <Route path="/MojaPolka" element={<MojaPolka />} />
                    <Route path="/katalog" element={<Katalog />} />
                    <Route path="/Najlepsze" element={<Najlepsze />} />
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/SearchBox" element={<SearchBox />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/AuthForms" element={<AuthForms />} />
                    <Route path="/books/:id" element={<BookDetails />} />
                </Routes>
        </AuthProvider>
    );
};

export default App;