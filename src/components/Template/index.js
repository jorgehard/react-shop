import { AppBar, Typography, Toolbar, Container } from "@material-ui/core";

function Template(props) {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Menu</Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Container>{props.children}</Container>
    </>
  );
}

export default Template;
