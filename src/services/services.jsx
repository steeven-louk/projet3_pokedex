import axios from 'axios';
import { useState, useEffect } from 'react';

const getPokemon = async() => {

  /*  const [pokemons, setPokemons] = useState([]);
    const [getAllPokemon, setGetAllPokemon] = useState([])
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")*/

    let url ='https://pokeapi.co/api/v2/pokemon/';

    const { data } = await axios.get(url);

    const item = await axios.get('https://pokeapi.co/api/v2/pokemon');
    console.log('====================================');
    console.log('item', item);
    console.log('====================================');
    return data.results;


    
}
export default getPokemon

    /* 
         try {
          const {data} = await axios.get(url);
          let res = data.results
              setPokemons(data);
            
  
             res.map(async(pokemons)=> {
                 const pokemon = await axios.get(pokemons.url)
                  setGetAllPokemon(pokemon.data);
              })
            
         } catch (err) {
          console.log('err', err)
         }
  
  
  
      useEffect(() => {
          fetchData();
      }, [url]); 
  
      return {getAllPokemon, pokemons}
  }
  
  export const getAll = async(res) =>{
         res && res.map(async(item) => {
          const result = await axios.get(item.url);
          console.log('====================================');
          console.log(result);
          console.log('====================================');
         })
      }
  
  */
  
