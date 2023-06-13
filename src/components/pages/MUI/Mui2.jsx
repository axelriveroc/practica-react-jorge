import { Container, Grid } from "@mui/material";

const Mui = () => {
  return (

      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <h2 style={{ border: "1px solid yellow" }}>xs=2</h2>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};

export default Mui;
