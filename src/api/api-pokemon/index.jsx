import React, { useState } from "react";
import axios from "axios";

export default function GetPokemon() {
    const [pokedex, setPokedex] = useState(null);
    const [pokemon, setPokemon] = useState(null);

    async function handlePokenon() {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            );
            setPokedex(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center gap-5">  
            <div className="flex items-center justify-center flex-col gap-5">
                <h1>Procure seu Pokemon Favorito!</h1>
                <input  type="text" 
                onChange={(e) => setPokemon (e.target.value)}
                className="p-2 border-solid  border-indigo-500 rounded-md"
                 />
                 <button onClick={handlePokenon} className="flex items-center justify-center w-14 bg-indigo-500 rounded-md p-2 text-white">Buscar</button>
            </div>
       
        
        {pokedex && (
            <div className="mb-3 shadow 2x1 shadow-gray-600 mt-11 rounded-lg p-4 flex flex-col items-center justify-center w-20 h-30 gap-3">
            <p>{pokedex.name}</p>
            <img src={pokedex.sprites.front_default} alt="" />
            <p>shiny:</p>
            <img src={pokedex.sprites.front_shiny} alt="" />
          </div>
        )}
          </div>   
        

    );
}