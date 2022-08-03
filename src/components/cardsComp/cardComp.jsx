import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.scss";

export const CardComp = (props) => {
  //let img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png".split('/');
  //const [getIndex, setGetIndex] = useState({});
  //const id_string = img_url[8].slice(0, -4).toString()
  //let indexI = props.index.toString()

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
      <div className="card-footer">
        <a href="#" className="btn">
          ajoutez à mon pokedex
        </a>
      </div>
    </div>
  );
};
