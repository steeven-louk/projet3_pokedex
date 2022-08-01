import React from 'react'
import './styles/style.scss'

export const HeaderComponent = () => {
  return (
    <>
        <header>
            <div className="container">
                <nav>
                    <span className="navbar-brand">pokedex</span>
                    <span> cart(5) </span>
                </nav>
            </div>
        </header>
    </>
  )
}
