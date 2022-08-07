import axios from 'axios';
import { useState } from 'react';


export const getPokemon = async() => {

  /* const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")*/

    let url ='https://pokeapi.co/api/v2/pokemon/';

    const { data } = await axios.get(url);

    return data.results;
    
}

export const getEvolution = async(name) => {



  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
       
      const  {data} = await axios.get(response.data.evolution_chain.url)
      console.log('====================================');
      console.log(response.data.evolution_chain.url);
      console.log('====================================');

      return {data};
  } catch (error) {
    console.log("Error:", err.message)
  }

    
            // console.log('evo',response.data.evolution_chain.url);
  /* const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")*/

    //console.log('evvvv', getEv)

  
    
}
// //export {getPokemon, getPokemons}