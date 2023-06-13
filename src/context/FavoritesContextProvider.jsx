import { createContext, useReducer, useState } from "react"

export const FavoritesContext = createContext();

const initialState = [];

const favoritesReducer = (state, action)=>{
    switch (action.type) {
        case "add":
            
            return [...state , action.payload]
        
        default:
            break;
    }
}

const FavoritesContextProvider = ({children}) => {

    
    const [state , dispatch] = useReducer(favoritesReducer , initialState)

    const data = {
        state, 
        dispatch
    }

  return (
    <FavoritesContext.Provider value={data}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider