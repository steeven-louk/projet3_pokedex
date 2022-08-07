import axios from "axios";

//function pour recuperer la liste de spokemon
export const getPokemon = async () => {

  let url = "https://pokeapi.co/api/v2/pokemon/";

  const { data } = await axios.get(url);

  return data.results;
};


//function pour recuperer les capacités du pokemon
export const getEvolution = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );

    const { data } = await axios.get(response.data.evolution_chain.url);

    return { data };
  } catch (error) {
    console.log("Error:", error.message);
  }
};
// //export {getPokemon, getPokemons}
