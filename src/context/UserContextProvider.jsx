import {  createContext, useState } from "react"

export const UserContext = createContext();

const UserContextProvider = ( { children } ) => {


  const [ userData , setUserData] = useState("")

  let data = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;