import axios from 'axios';


export const getPokemon = async() => {

  /* const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")*/

    let url ='https://pokeapi.co/api/v2/pokemon/';

    const { data } = await axios.get(url);

    return data.results;
    
}

// //export {getPokemon, getPokemons}