import React, {useState, useEffect } from 'react' ;
import '../App.css';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const Katalog = () => {

    const[books, setBooks] = useState([]);

    const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

    console.log("favorites are", favorites);
    
    const navigate = useNavigate();

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

    useEffect(()=> {
        axios.get(API_URL).then(res=>{
            console.log (res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err));
    }
    ,[]);

    return (
        <div className='book-list'>
            {books.map ((book)=>(
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
            ))}
        </div>
    );
};

export default Katalog;