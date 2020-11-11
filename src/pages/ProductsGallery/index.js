import {
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

function ProductsGallery() {
  return (
    <Container fixed>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            navegacao
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductsGallery;
