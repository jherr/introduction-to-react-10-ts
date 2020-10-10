import React from "react";

export type Pokemon = {
  id: number;
  name: {
    english: string;
  };
  type: string[];
  base: { [key: string]: string };
};

export type PokemonContextType = {
  filter: string;
  pokemon: Pokemon[] | null;
  selectedPokemon: Pokemon | null;
  filterSet: (filter: string) => void;
  pokemonSet: (pokemon: Pokemon[]) => void;
  selectedPokemonSet: (pokemon: Pokemon | null) => void;
};

const PokemonContext = React.createContext<PokemonContextType>({
  filter: "",
  pokemon: [],
  selectedPokemon: null,
  filterSet: () => {},
  pokemonSet: () => {},
  selectedPokemonSet: () => {},
});

export default PokemonContext;
