import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('auth_token') || document.cookie.split('=')[1];
        if (token) {
            axios
                .get('http://localhost:3000/get-user', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setUser(response.data);
                })
                .catch((err) => {
                    console.error('User verification failed', err);
                    localStorage.removeItem('auth_token');
                });
        }
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('auth_token', token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };