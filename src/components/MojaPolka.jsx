import React, {useState, useEffect } from 'react' ;
import '../App.css';
import { useAppContext } from './context/appContext';
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReadBooks = () => {
    const {readBooks, favorites, addToFavorites, removeFromFavorites} = useAppContext(); //import funkcji zapisanych w appContext.js

    console.log("read books are", readBooks);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

    const navigate = useNavigate(); //trzeba było dodać ten fragment kodu od api żeby po kliknięciu w książkę pokazywał się opis...
    const[books, setBooks] = useState([]);

    useEffect(()=> {
        axios.get(API_URL).then(res=>{
            console.log (res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err));
    }
    ,[]); //...dotąd

    return (
        <div className='ReadBooks'>
            {readBooks.length > 0 ? readBooks.map ((book)=>(
                <div key={book.id} className="book">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#"  onClick={()=>navigate(`/books/${book.id}`)}/> {/*dodane otwarcie książki po naciśnięciu na jej zdjęcie*/}
                    </div>
                    <div>
                        {favoritesChecker(book.id) ? (
                        <button onClick={()=> removeFromFavorites(book.id)}>Usuń z ulubionych</button> //przycisk do dodawania/usuwania z ulubionych
                        ) : (
                        <button onClick={()=> addToFavorites(book)}>Dodaj do ulubionych</button>
                        )}
                    </div>
                </div>
            )):(<h1>Nie masz jeszcze przeczytanych książek!</h1>)}
        </div>
    );

};

export default ReadBooks;