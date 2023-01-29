import { createContext, useEffect, useState, useContext } from 'react';
export const DashBoardContext = createContext();
export const AppContextProvider = ({ children }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        username: '',
        gamePlayed: [],
    })

    useEffect(() => {
        console.log(data);
    }, [data])

    const values = { data, setData };

    return (
        <DashBoardContext.Provider value={values}>
            {children}
        </DashBoardContext.Provider>
    );
};
