import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './styles/styles.scss';
export const Pokedex = () => {

  const [getPokemonInPokedex, setGetPokemonInPokedex] = useState(null);
    
    const getPokemon = async () => {
      try {
        const getCount = JSON.parse(localStorage.getItem('pokemon'));
        setGetPokemonInPokedex(getCount);
      } catch (error) {
        console.log("err", error.message);
      }
    };
  
   useEffect(() => {
    getPokemon();
   }, []);


    const deletePokemon = (id) =>{
            
		let index = getPokemonInPokedex.indexOf(id);

		if(index == -1){
		
			getPokemonInPokedex.splice(index, 1);
			localStorage.setItem('pokemon', JSON.stringify(getPokemonInPokedex));

      setGetPokemonInPokedex(JSON.parse(localStorage.getItem('pokemon')));
			
		}
	}


  return (

    <div className='e'>

      {getPokemonInPokedex == null ? <h1>Empty....</h1> :
      

    
      getPokemonInPokedex?.map((pokemon, index) =>(
         <div className="card" key={index}>
  <Link to={`/about/${pokemon.index}`}>
    <div className="card-img-top">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.index}.png`}
        width="250px"
        alt=""
      />
    </div>
    <div className="card-body">
      <h4 className="card-title"> {pokemon?.pokemon.name} </h4>
    </div>
  </Link>
  <div className="card-footer">
    <a  className="btn" onClick={deletePokemon}>
    Supprimez de mon pokedex
    </a>
  </div>
</div>
  ))}
      



    </div>
   
  )
}
