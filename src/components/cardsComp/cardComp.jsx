import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import "./styles/style.scss";

import { useNavigate } from "react-router-dom"


export const CardComp = (props) => {

  
  const [addToPokedex, setAddToPokedex] = useState('ajoutez à mon pokedex');
  const [addConfirm, setAddConfirm] = useState(false)




  const dispatch = useDispatch();

const navigate = useNavigate()


  const addToPokedexScreen = (props) => {


    dispatch(addToCart(props));
     //navigate("/pokedex")

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
