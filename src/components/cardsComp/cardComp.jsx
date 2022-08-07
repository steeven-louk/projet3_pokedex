import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart, removeFromPokedex } from "../../redux/cartSlice";

import "./styles/style.scss";


export const CardComp = (props) => {
  const [addToPokedex, setAddToPokedex] = useState("ajoutez à mon pokedex");

  const dispatch = useDispatch();

  const addToPokedexScreen = (props) => {
        dispatch(addToCart(props));
        setAddToPokedex("Supprimez de mon pokedex");

    if(addToPokedex === "Supprimez de mon pokedex"){
      const result = window.confirm("voulez vous supprimer ce pokemon de votre pokedex?")

    if (result) {
       dispatch(removeFromPokedex(props));
       setAddToPokedex("ajoutez à mon pokedex");
    }
    }
  };

  return (
    <div className="card">
      <Link to={`/about/${props.index}`}>
        <div className="card-img-top">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.index}.png`}
            width="250px"
            alt=""
          />
        </div>
        <div className="card-body">
          <h4 className="card-title"> {props.pokemon.name} </h4>
        </div>
      </Link>
      <div
        className={
          addToPokedex == "Supprimez de mon pokedex"
            ? "card-footer removePokedex"
            : "card-footer"
        }
      >
        <a type="submit" className="btn" onClick={() => addToPokedexScreen(props)}>
        {addToPokedex}
        </a>
      </div>
    </div>
  );
};
