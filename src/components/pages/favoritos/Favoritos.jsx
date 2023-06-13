import { useContext } from "react"
import { FavoritesContext } from "../../../context/FavoritesContextProvider"



const Favoritos = () => {

const {state} = useContext(FavoritesContext)
console.log(state)

  return (
    <div>Favoritos</div>
  )
}

export default Favoritos