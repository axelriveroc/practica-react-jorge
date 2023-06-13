import { Box, Button, Container, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";

const Mui = () => {
  return (
    <Container maxWidth="xs" sx={{ border: "1px solid purple", boxShadow: 3 }}>
      <h2>Prueba MUI</h2>

      <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
        Primary
      </Button>
      <Button variant="contained" sx={{backgroundColor:"primary.dark"}} startIcon={<DeleteIcon />}>
        primary Dark
      </Button>

      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        secondary
      </Button>
      <Button variant="contained" sx={{backgroundColor:"secondary.light"}} startIcon={<DeleteIcon />}>
        secondary ligth
      </Button>

      <Button variant="contained" color="tertiary" startIcon={<DeleteIcon />}>
        tertiary
      </Button>
      <Button variant="contained" sx={{backgroundColor:"tertiary-dark"}} startIcon={<DeleteIcon />}>
        tertiary dark
      </Button>

      <Button variant="contained">Normal</Button>

      <Container>
        <h2>prueba</h2>
      </Container>

      <IconButton aria-label="deletesadsa">
        {" "}
        <StarIcon />{" "}
      </IconButton>

      <Box
        sx={{
          width: 150,
          height: 150,
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        component="button"
      >
        Soy el Box-button
      </Box>
    </Container>
  );
};

export default Mui;
