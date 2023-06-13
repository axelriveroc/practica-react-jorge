import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavoritesContext } from "../../../context/FavoritesContextProvider";


export default function CardProductsList({ product }) {

  const { dispatch } = useContext(FavoritesContext);
  
  const handleFavorite = (e, product)=>{
    console.log(product)
    dispatch({type: "add" , payload: product})
  }

  return (
    <Card sx={{ maxWidth: 345, width: 300, backgroundColor: "transparent" }}>
      <CardHeader
        sx={{
          minWidth: "300px",
          minHeight: "160px",
          "& .MuiTypography-root": {
            fontSize: "1rem",
          },
        }}
        title={product.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
        sx={{ objectFit: "contain" }}
      />
      <CardActions disableSpacing onClick={(e)=> handleFavorite(e, product)}>
          <FavoriteIcon  />
      </CardActions>
    </Card>
  );
}
