import React from "react";
import { Button } from "@material-ui/core";

import { Pokemon } from "../PokemonContext";

type PokemonRowProps = {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
};

const PokemonRow = ({ pokemon, onClick }: PokemonRowProps) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
);

export default PokemonRow;
