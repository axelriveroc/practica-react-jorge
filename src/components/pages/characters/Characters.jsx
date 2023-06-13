import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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


  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", alignItems:"center", gap:"10px"}}>
        {characters.map((character)=>{
          return (
            <Card sx={{ maxWidth: 345, width: "350px" }} key={character.id}>
              <CardActionArea sx={{ height: "400px" }}>
                <CardMedia
                  component="img"
                  height="77%"
                  image={character.image}
                  alt="green iguana"
                  width="200px"
                />
                <CardContent sx={{ backgroundColor: "#000000b8" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#ffffff6b"
                  >
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="#ffffff6b">
                    {character.species} & {character.status}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    
    </div>
  )
};

export default Characters;
