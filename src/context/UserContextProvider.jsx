import {  createContext, useState } from "react"

export const UserContext = createContext();

const UserContextProvider = ( { children } ) => {


  const [ userData , setUserData] = useState("");

  const handlerSetUserData = (userName)=>{
    setUserData(userName)
  }

  let data = {
    userData,
    handlerSetUserData,
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;