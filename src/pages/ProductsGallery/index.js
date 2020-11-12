import {
  Card,
  Grid,
  CardContent,
  Container,
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import "./style.css";
import ImgBanner from "../../assets/product-banner.png";

function ProductsGallery() {
  return (
    <Container fixed>
      <Card className="card-layout">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={ImgBanner} alt="Imagem banner" />
            </Grid>
            <Grid item xs={8}>
              textos
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className="card-layout">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <form row={true} noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end">
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </form>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className="card-layout">
            <CardContent>
              <Box>
                <Typography color="#000" gutterBottom>
                  x Gender: Woman
                </Typography>
                <Typography color="#000" gutterBottom>
                  x Category: Dresses
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  Color
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          items
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductsGallery;
