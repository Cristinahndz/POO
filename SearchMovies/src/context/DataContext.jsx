import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();//pasa datos a traves de jerarquia de componentes

export const DataProvider = ({ children }) => {//componente proporcuina datos a los componentes secundarios
    const [query, setQuery] = useState("superman");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (//devuelve componente DataProvider
    //proporciona datos SetQuery, etc a componente secundarios
        <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
            { children }
        </DataContext.Provider>
    )
}
