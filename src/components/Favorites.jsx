import React, { useEffect } from 'react' ;
import '../App.css';
import { useAppContext } from './context/appContext';
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
    const navigate = useNavigate();

    const favoritesChecker = (id) => {
        return favorites.some((book) => book.id === id);
    };


    return (
        <div className='favorites'>
            {favorites.length > 0 ? favorites.map((book) => (
                <div key={book.id} className="book">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
                    </div>
                    <div>
                        {favoritesChecker(book.id) ? (
                            <button onClick={() => removeFromFavorites(book.id)}>Usuń z ulubionych</button>
                        ) : (
                            <button onClick={() => addToFavorites(book)}>Dodaj do ulubionych</button>
                        )}
                    </div>
                </div>
            )) : (<h1 className='answer'>Nie masz jeszcze ulubionych książek!</h1>)}
        </div>
    );
};

export default Favorites;