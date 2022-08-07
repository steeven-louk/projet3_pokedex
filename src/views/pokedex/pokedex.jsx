import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromPokedex } from "../../redux/cartSlice";

import { Link } from "react-router-dom";

import EmptyPokedex from "../../components/loading/emptyPokedex";

import "./styles/styles.scss";

export const Pokedex = () => {
  

  const pokedex = useSelector((state) => state.pokedex);

  const dispatch = useDispatch();

  const handleRemoveFromPokedex = (pokemon) => {
    const result = window.confirm("voulez vous supprimer ce pokemon de votre pokedex?")

    if (result) {
       dispatch(removeFromPokedex(pokemon));
    }
   
  };


  return (
    <div className="pokedex_container">
      {pokedex?.pokemonItems == 0 ? (
        <EmptyPokedex />
      ) : (
        pokedex.pokemonItems?.map((pokemon) => (
          <div className="card_pokedex" key={pokemon?.index}>
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
            <div
              className="card-footer"
              onClick={() =>handleRemoveFromPokedex(pokemon)}
            >
              <a className="btn">Supprimez de mon pokedex</a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
