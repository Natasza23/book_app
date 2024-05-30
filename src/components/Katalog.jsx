import React, {useState, useEffect } from 'react' ;
import '../App.css';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const Katalog = () => {

    const[books, setBooks] = useState([]);

    const {readBooks, addToReadBooks, toReadBooks, addToToReadBooks, removeFromToReadBooks} = useAppContext();

    console.log("read books are", readBooks);
    
    const navigate = useNavigate();

    const readBooksChecker = (id) => {
        const boolean = readBooks.some((book) => book.id === id);
        return boolean;
    };

    const toReadBooksChecker = (id) => {
        const boolean = toReadBooks.some((book) => book.id === id);
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
                        {readBooksChecker(book.id) ? (
                        <button>Dodano do przeczytanych</button> //dodany przycisk który nic nie robi tylko wyświetla tekst po dodaniu przeczytanej książki
                        ) : (
                        <button onClick={()=> addToReadBooks(book)}>Dodaj do przeczytanych</button>
                        )}
                    </div>
                    <div>
                        {toReadBooksChecker(book.id) ? (
                        <button onClick={()=> removeFromToReadBooks(book.id)}>Usuń z do przeczytania</button> //dodany przycisk "do przeczytania"
                        ) : (
                        <button onClick={()=> addToToReadBooks(book)}>Dodaj do przeczytania</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Katalog;