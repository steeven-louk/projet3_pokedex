import React, { useState, useEffect } from "react";

import "./styles/styles.scss";
import getPokemon from "../../services/services";
import axios from "axios";

import { CardComp } from "../../components/cardsComp/cardComp";

export const Home = () => {
  const [pokemon, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true)
    getPokemon().then((data) => {
      setPokemons(data)
    
    });
    setLoading(false)
  }, []);

  return (
    <>
      <div className="container__home">
        <div className="filtre">
          <input type="text" name="filtre" />
        </div> 
       
       <div className="card__container">
         <div className="card_list">
       {loading ? (<h1>LOADING.....</h1>)
        
        :
        (
           pokemon?.map((item, index) =>(
           <CardComp pokemon={item} index={index} key={index} />
      ))
        )
      }
       </div>
       
       </div>
      
      </div>
    </>
  );
};
