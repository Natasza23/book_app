import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase'; 
import { collection, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [toReadBooks, setToReadBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                loadUserData(user.uid);
            } else {
                setUser(null);
                setFavorites([]);
                setToReadBooks([]);
                setReadBooks([]);
            }
        });
        return () => unsubscribe();
    }, []);

    const loadUserData = async (uid) => {
        const userRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setFavorites(data.favorites || []);
            setToReadBooks(data.toReadBooks || []);
            setReadBooks(data.readBooks || []);
        }
    };

    const saveUserData = async (uid, data) => {
        const userRef = doc(db, 'users', uid);
        await setDoc(userRef, data, { merge: true });
    };

    const addToFavorites = (book) => {
        if (!favorites.some(fav => fav.id === book.id)) {
            const updatedFavorites = [...favorites, book];
            setFavorites(updatedFavorites);
            if (user) {
                saveUserData(user.uid, { favorites: updatedFavorites });
            }
        }
    };

    const removeFromFavorites = (bookId) => {
        const updatedFavorites = favorites.filter(book => book.id !== bookId);
        setFavorites(updatedFavorites);
        if (user) {
            saveUserData(user.uid, { favorites: updatedFavorites });
        }
    };

    const addToToReadBooks = (book) => {
        if (!toReadBooks.some(b => b.id === book.id)) {
            const updatedToReadBooks = [...toReadBooks, book];
            setToReadBooks(updatedToReadBooks);
            if (user) {
                saveUserData(user.uid, { toReadBooks: updatedToReadBooks });
            }
        }
    };

    const removeFromToReadBooks = (bookId) => {
        const updatedToReadBooks = toReadBooks.filter(book => book.id !== bookId);
        setToReadBooks(updatedToReadBooks);
        if (user) {
            saveUserData(user.uid, { toReadBooks: updatedToReadBooks });
        }
    };

    const addToReadBooks = (book) => {
        if (!readBooks.some(b => b.id === book.id)) {
            const updatedReadBooks = [...readBooks, book];
            setReadBooks(updatedReadBooks);
            if (user) {
                saveUserData(user.uid, { readBooks: updatedReadBooks });
            }
        }
    };

    const removeFromReadBooks = (bookId) => {
        const updatedReadBooks = readBooks.filter(book => book.id !== bookId);
        setReadBooks(updatedReadBooks);
        if (user) {
            saveUserData(user.uid, { readBooks: updatedReadBooks });
        }
    };

    return (
        <AppContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            toReadBooks,
            addToToReadBooks,
            removeFromToReadBooks,
            readBooks,
            addToReadBooks,
            removeFromReadBooks
        }}>
            {children}
        </AppContext.Provider>
    );
};