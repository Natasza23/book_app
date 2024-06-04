import React, {useState, useEffect } from 'react' ;
import '../App.css';
import { useAppContext } from './context/appContext';
import { API_URL } from '../API';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ToReadBooks = () => {
    const {toReadBooks, addToToReadBooks, removeFromToReadBooks} = useAppContext();

    const navigate = useNavigate();
    const[books, setBooks] = useState([]);

    useEffect(()=> {
        axios.get(API_URL).then(res=>{
            console.log (res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err));
    }
    ,[]);

    return (
        <div className='toReadBooks'>
            {toReadBooks.length > 0 ? toReadBooks.map ((book)=>(
                <div key={book.id} className="book">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
                    </div>
                    <div>
                        <button onClick={()=> removeFromToReadBooks(book.id)}>Usuń z do przeczytania</button>
                    </div>
                </div>
            )):(<h1 className='answer'>Nie masz jeszcze książek do przeczytania!</h1>)}
        </div>
    );

};

export default ToReadBooks;