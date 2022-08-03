import React from "react";

import "./styles/style.scss";

export const CardComp = (props) => {

// console.log('====================================');
// console.log('props', props);
// console.log('====================================');

  let img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png".split('/');

const id_string = img_url[8].slice(0, -4).toString()



  return (


            <div className="card">
              <div className="card-img-top">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} width='250px' alt="" />
              </div>
              <div className="card-body">
                <h4 className="card-title"> {props.pokemon.name} </h4>
              </div>
              <div className="card-footer">
                <a href="#" className="btn">
                  ajoutez à mon pokedex
                </a>
              </div>
            </div>
       
  );
};
