import React, {useState, useEffect } from 'react' ;
import '../App.css';
import { useAppContext } from './context/appContext';
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    console.log("favorites are", favorites);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

    const navigate = useNavigate();
    const setBooks = useState([]);

    useEffect(()=> {
        axios.get(API_URL).then(res=>{
            console.log (res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err));
    }
    ,[]);

    return (
        <div className='favorites'>
            {favorites.length > 0 ? favorites.map ((book)=>(
                <div key={book.id} className="book">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
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