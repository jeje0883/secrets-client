import {createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
    const storedUser = localStorage.getItem('user');
    const [ user, setUser ] = useState(storedUser ? JSON.parse(storedUser) : null);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContext, UserProvider};