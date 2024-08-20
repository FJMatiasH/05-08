import { createContext, useState } from "react";

//crear el contexto - el que hay que consumir
export const FiltersContext = createContext()

//crear el Provider - el que prove de aceso al contexot
export function FiltersProvider ({children}){
    const [filters, setFilters] = useState({
        category:'all',
        minPrice:'0'
    })

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters 
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}