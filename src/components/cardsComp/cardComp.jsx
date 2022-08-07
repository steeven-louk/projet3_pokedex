import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import "./styles/style.scss";

import { useHistory } from "react-router-dom"


export const CardComp = (props) => {

  
  const [addToPokedex, setAddToPokedex] = useState('ajoutez à mon pokedex');
  const [addConfirm, setAddConfirm] = useState(false)




  const dispatch = useDispatch();




  const addToPokedexScreen = (props) => {


    dispatch(addToCart(props));
    history.push("/pokedex")

  /*  try {
      let pokemon = JSON.parse(localStorage.getItem("pokemon"));
      // console.log(article);

      if (pokemon) {
        pokemon.push(props);
        localStorage.setItem("pokemon", JSON.stringify(pokemon));
        setAddConfirm(true);
      setAddToPokedex('Supprimez de mon pokedex')
        
      } else {
        pokemon = [];
        pokemon.push(props);
        localStorage.setItem("pokemon", JSON.stringify(pokemon));
  
        
        setAddToPokedex('Supprimez de mon pokedex')
      }

       if(addToPokedex === "Supprimez de mon pokedex" ) {
        let index = pokemon.indexOf(-1);
        pokemon = pokemon.slice(index);

        localStorage.setItem("pokemon", JSON.stringify(pokemon));
        setAddToPokedex("ajoutez à mon pokedex")
      }

    } catch (error) {
      console.log('err', error)
    }*/
 
  }

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
      <div className={addToPokedex =="Supprimez de mon pokedex" ? "card-footer removePokedex" : "card-footer"}>
        <a  className="btn" onClick={()=>addToPokedexScreen(props)}>
          {addToPokedex}
        </a>
      </div> 
    </div>
  );
};
