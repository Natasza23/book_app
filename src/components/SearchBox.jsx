import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    
    const { readBooks, addToReadBooks, toReadBooks, addToToReadBooks, removeFromToReadBooks } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://example-data.draftbit.com/books/');
                setBooks(response.data);
            } catch (error) {
                console.error("There was an error fetching the books data!", error);
            }
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        const results = books.filter(book =>
            (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (book.authors && book.authors.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (book.genres && book.genres.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredBooks(results);
    }, [searchTerm, books]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const readBooksChecker = (id) => {
        return readBooks.some((book) => book.id === id);
    };

    const toReadBooksChecker = (id) => {
        return toReadBooks.some((book) => book.id === id);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Wyszukaj książki po tytule, autorze lub gatunku..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            <div className="book-list">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="book">
                            <div>
                                <h3>{book.title}</h3>
                            </div>
                            <div>
                                <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
                            </div>
                            <div>
                                {readBooksChecker(book.id) ? (
                                    <button>Dodano do przeczytanych</button>
                                ) : (
                                    <button onClick={() => addToReadBooks(book)}>Dodaj do przeczytanych</button>
                                )}
                            </div>
                            <div>
                                {toReadBooksChecker(book.id) ? (
                                    <button onClick={() => removeFromToReadBooks(book.id)}>Usuń z do przeczytania</button>
                                ) : (
                                    <button onClick={() => addToToReadBooks(book)}>Dodaj do przeczytania</button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Brak wyników</p>
                )}
            </div>
        </div>
    );
};

export default SearchBox;