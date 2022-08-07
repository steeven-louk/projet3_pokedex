import React from 'react'

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import './styles/style.scss'

export const HeaderComponent = () => {

  const pokedexCount = useSelector((state) => state.pokedex);

  return (
    
        <header>
            <div className="container__nav">
                <nav>
                <Link to="/">
                        <span className="navbar-brand">
                        <img src="/imgs/pokemon.png" width='100px' alt="pokemon" />
                        </span>
                     </Link>
                     <Link to="/pokedex">
                        <div className='pokeball'>
                            <img src="/imgs/pokeball.png" alt="pokeball" />   
                            {pokedexCount?.pokemonItems.length > 0 ? <span><em> ({pokedexCount?.pokemonItems.length})</em></span> : ""}
                        </div>
                     </Link>
                    
                </nav>
            </div>
        </header>
    
  )
}
