import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "./styles/styles.scss";

export const Details = () => {
  const { id } = useParams();

  const [getPokemonDetail, setGetPokemonDetail] = useState();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getImage = getPokemonDetail?.sprites.other.dream_world;

  const getData = async () => {
    try {
      const pokemon = await axios.get(url);

      setGetPokemonDetail(pokemon.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container__details">
      <div className="container__contain">
        <div className="row">
          <div className="pokemon_img">
            <h3 className="name">{getPokemonDetail?.name}</h3>
            <img src={getImage?.front_default} alt={getPokemonDetail?.name} />
          </div>
          <div className="pokemon_desc">
            <div className="pokemon__container">
              <h1>N° 0{getPokemonDetail?.id} </h1>
            </div>
            <hr /> <br />
            <div className="statistique">
              <h3>statistique</h3>
            </div>
            <div className="stat__container">
              <div className="table-1">
                <div className="head">
                  <span>Type</span>
                  <span>Height</span>
                  <span>Weight</span>
                </div>

                <div className="body">
                  <div className="type">
                    {getPokemonDetail?.types.map((type, index) => (
                      <span key={index} style={{ display: "flex" }}>
                        {" "}
                        {type.type.name}{" "}
                      </span>
                    ))}
                  </div>

                  <span>{getPokemonDetail?.height} Cm</span>
                  <span>{getPokemonDetail?.weight} Lbs</span>
                </div>
              </div>

              <table className="table-2">
                <thead>
                  <tr>
                    {getPokemonDetail?.stats.map((stat, index) => (
                      <th key={index}> {stat.stat.name} </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {getPokemonDetail?.stats.map((stat, index) => (
                      <td key={index}> {stat.base_stat} </td>
                    ))}
                  </tr>
                </tbody>
              </table>

              <br />

              <div className="description">
                <div className="description__container">
                  <p className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aut vitae explicabo vero deserunt culpa eveniet libero
                    voluptate in, repudiandae ipsam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
