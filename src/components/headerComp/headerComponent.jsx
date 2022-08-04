import React from 'react'
import './styles/style.scss'

export const HeaderComponent = () => {
  return (
    <>
        <header>
            <div className="container__nav">
                <nav>
                    <span className="navbar-brand">
                      <img src="/imgs/pokemon.png" width='100px' alt="pokemon" />
                     </span>
                    <div className='pokeball'><img src="/imgs/pokeball.png" alt="pokeball" /> <span><em>(5)</em></span> </div>
                </nav>
            </div>
        </header>
    </>
  )
}
