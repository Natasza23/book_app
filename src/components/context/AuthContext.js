import React, { createContext, useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.error('Error logging out:', error);
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);