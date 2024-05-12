import React from 'react' ;
import '../App.css';
import { useAppContext } from './context/appContext';

const Favorites = () => {
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    console.log("favorites are", favorites);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };
    return (
        <div className='favorites'>
            {favorites.length > 0 ? favorites.map ((book)=>(
                <div key={book.id} className="book">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#" />
                    </div>
                    <div>
                        {favoritesChecker(book.id) ? (
                        <button onClick={()=> removeFromFavorites(book.id)}>Usuń z ulubionych</button>
                        ) : (
                        <button onClick={()=> addToFavorites(book)}>Dodaj do ulubionych</button>
                        )}
                    </div>
                </div>
            )):(<h1>Nie masz jeszcze ulubionych książek!</h1>)}
        </div>
    );

};

export default Favorites;