import axios from 'axios';


const getPokemon = async() => {

  /* const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")*/

    let url ='https://pokeapi.co/api/v2/pokemon/';

    const { data } = await axios.get(url);

    const item = await axios.get('https://pokeapi.co/api/v2/pokemon');
    console.log('====================================');
    console.log('item', item);
    console.log('====================================');
    return data.results;
    
}
export default getPokemon