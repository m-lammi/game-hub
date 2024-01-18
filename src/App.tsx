import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"navbar" "main"`, // <= 1024px no sidepanel
        lg: `"navbar navbar" "sidepanel main"`, // > 1024px
      }}
    >
      <GridItem area="navbar" bg="coral">
        Navbar
      </GridItem>
      <Show above="lg">
        <GridItem area="sidepanel" bg="grey">
          Sidepanel
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
