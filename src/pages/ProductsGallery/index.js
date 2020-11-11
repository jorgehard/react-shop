import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import "./style.css";

function ProductsGallery() {
  return (
    <Container fixed>
      <Card className="card-layout">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-layout">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <form action="">
                <select>
                  <option value="">Gender</option>
                  <option value="">Text</option>
                  <option value="">Text</option>
                  <option value="">Text</option>
                </select>
              </form>
            </Grid>
            <Grid item xs={3}>
              item 1
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className="card-layout">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
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
