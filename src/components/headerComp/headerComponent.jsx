import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './styles/style.scss'

export const HeaderComponent = () => {

  const getCount = JSON.parse(localStorage.getItem('pokemon'));

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
                            {getCount?.length > 0 ? <span><em> ({getCount?.length})</em></span> : ""}
                        </div>
                     </Link>
                    
                </nav>
            </div>
        </header>
    </>
  )
}
