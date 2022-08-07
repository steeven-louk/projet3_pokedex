import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/style.scss'

export const HeaderComponent = () => {

  const pokedexCount = useSelector((state) => state.cart);

  return (
    
        <header>
            <div className="container__nav">
                <nav>
                    <a href="/"> 
                    <span className="navbar-brand">
                      <img src="/imgs/pokemon.png" width='100px' alt="pokemon" />
                     </span>
                     </a>
                     
                     <Link to="/pokedex">
                        <div className='pokeball'>
                            <img src="/imgs/pokeball.png" alt="pokeball" />   
                            {pokedexCount?.cartItems.length > 0 ? <span><em> ({pokedexCount?.cartItems.length})</em></span> : ""}
                        </div>
                     </Link>
                    
                </nav>
            </div>
        </header>
    
  )
}
