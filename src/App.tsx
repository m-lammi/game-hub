import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"navbar" "main"`, // <= 1024px no sidepanel
        lg: `"navbar navbar" "sidepanel main"`, // > 1024px
      }}
    >
      <GridItem area="navbar">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidepanel">Sidepanel</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
