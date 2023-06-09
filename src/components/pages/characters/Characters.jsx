import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {

  const URL_BASE = "https://rickandmortyapi.com/api";
  const [ characters , setCharacters ] = useState([]);


  useEffect(()=>{


    const getData = async () => {
      
      const getCharacters = axios.get(`${URL_BASE}/character`);
      const {data} = await getCharacters;
      console.log(data.results)
      setCharacters(data.results)
    
    }

    getData()

  }, [] )


  return <div>Characters</div>;
};

export default Characters;
