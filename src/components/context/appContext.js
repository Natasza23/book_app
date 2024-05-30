import {createContext, useContext} from "react";
import { useState } from "react";


const AppContext = createContext(null); 

export const useAppContext = () => {
    const context = useContext(AppContext);

        if (context === undefined){ 
            throw new Error ("Appcontext must be within appContextProvider");
        }

        return context;
    };




const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [toReadBooks, setToReadBooks] = useState([]);

    const addToFavorites = (book) => {
        setFavorites((prevFavorites) => [...prevFavorites, book]);
    };
    
    const removeFromFavorites = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((book) => book.id !== id));
    };

    const addToReadBooks = (book) => {
        setReadBooks ((prevReadBooks)=> [...prevReadBooks, book]);
    };
    
    

    const addToToReadBooks = (book) => {
        setToReadBooks ((prevToReadBooks)=> [...prevToReadBooks, book]);
    };
    const removeFromToReadBooks = (id) => {
        setToReadBooks ((prevToReadBooks)=> prevToReadBooks.filter((book) => book.id !== id));
    };


   

    return (
        <AppContext.Provider value={{favorites, addToFavorites, removeFromFavorites, readBooks, addToReadBooks, toReadBooks, addToToReadBooks, removeFromToReadBooks}}>
            {children}
        </AppContext.Provider>
    );
};
 export default AppContextProvider;