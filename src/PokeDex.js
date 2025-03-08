import React from "react";
import {v1 as uuid} from "uuid";
import {useAxios} from "./hooks.js";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/** Renders a list of Pokémon cards.
 * Can also add a new card at random, or from a dropdown of available Pokémon. */

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/", false);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your Pokémon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Clear all Pokémon cards</button> {/* ✅ Clear button */}
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={uuid()}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

   
export default PokeDex;
