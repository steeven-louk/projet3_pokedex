import React, { useEffect, useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromPokedex } from "../../redux/cartSlice";


import "./styles/styles.scss";
export const Pokedex = () => {
  const [getPokemonInPokedex, setGetPokemonInPokedex] = useState(null);

   const pokedex = useSelector((state) => state.cart);


  const dispatch = useDispatch();

  const handleRemoveFromPokedex = (pokemon) => {
    dispatch(removeFromPokedex(pokemon));
  };


  console.log("pokedex", pokedex);

  return (
    <div className="e">
      {pokedex?.cartItems == 0 ? (
        <h1>Empty....</h1>
      ) : (
        pokedex.cartItems?.map((pokemon, index) => (
          <div className="card" key={pokemon?.index}>
            <Link to={`/about/${pokemon.index}`}>
              <div className="card-img-top">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.index}.png`}
                  width="250px"
                  alt={pokemon.pokemon.name}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title"> {pokemon.pokemon.name} </h4>
              </div>
            </Link>
            <div className="card-footer">
              <a
                className="btn"
                onClick={() => handleRemoveFromPokedex(pokemon)}
              >
                Supprimez de mon pokedex
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
