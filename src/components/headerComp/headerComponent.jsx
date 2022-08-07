import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/style.scss'

export const HeaderComponent = () => {

  //const getCount = JSON.parse(localStorage.getItem('pokemon'));
  const pokedexCount = useSelector((state) => state.cart);

  console.log('p', pokedexCount?.length)

  return (
    <>
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
    </>
  )
}
