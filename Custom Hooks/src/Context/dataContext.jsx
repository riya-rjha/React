import {useState, useEffect, createContext} from 'react';

const dataContext = createContext();

export const DataProvider = ({children}) => {
    return (
        <dataContext.Provider value={{

        }}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;