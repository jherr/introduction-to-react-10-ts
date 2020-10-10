import React, { useState } from "react";
import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";

import "./App.css";

import PokemonInfo from "./components/PokemonInfo";
import PokemonListLayout from "./components/PokemonListLayout";
import PokemonContext, { Pokemon } from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const [filter, filterSet] = useState<string>("");
  const [pokemon, pokemonSet] = useState<Pokemon[] | null>(null);
  const [selectedPokemon, selectedPokemonSet] = useState<Pokemon | null>(null);

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data: Pokemon[]) => pokemonSet(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemon,
        selectedPokemon,
        filterSet,
        pokemonSet,
        selectedPokemonSet,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <PokemonListLayout />
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
