import React from "react";
import PokemonContext, { Pokemon } from "../PokemonContext";

import PokemonRow from "./PokemonRow";

export default () => {
  const { pokemon, filter, selectedPokemonSet } = React.useContext(
    PokemonContext
  );

  return (
    <table width="100%">
      <tbody>
        {(pokemon ?? [])
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon: Pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              onClick={(pokemon) => selectedPokemonSet(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};
