import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import { getEvolution } from "../../services/services";

import "./styles/styles.scss";

export const Details = () => {

  const { id } = useParams();

  const [getPokemonDetail, setGetPokemonDetail] = useState();
  const [getPokemonSpecie, setGetPokemonSpecie] = useState();
  const [getPokemonEvolution, setGetPokemonEvolution] = useState();

  //url pour recuperer un pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // url pour recuperer les capacités du  pokemon
  const url_species = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  //recupereation de l'image
  const getImage = getPokemonDetail?.sprites.other.dream_world;

  //function pour recuperer le pokemon
  const getData = async () => {
    try {
      const pokemon = await axios.get(url);

      setGetPokemonDetail(pokemon.data);
    } catch (error) {
      console.log("error", error);
    }
  }  ;

  //function pour recuperer les capacités du  pokemon
  const getSpecies = async () => {

    try {
      const pokemon_Species = await axios.get(url_species);
      setGetPokemonSpecie(pokemon_Species?.data);

      return pokemon_Species;
    } catch (error) {
      console.log("error", error);
    }
  };


  //ensemble de constante pour recuperer l'evolution

  //recupereation du tableau d'evolution
  const evolve = getPokemonEvolution?.evolves_to.map((item) => {
    return item.evolves_to;
  }
  );

  //recuperation du tableau des nom de l'evolution
  const getEvolveSpecie = evolve?.map((item) => {
    return item[0].species.name;
  });
 

  useEffect(() => {
    getData();
    getSpecies();
    getEvolution(getPokemonDetail && getPokemonDetail?.name).then((data) => {
      setGetPokemonEvolution(data.data?.chain);
    });
  }, []);


  return (
    <div className="container__details">
      <div className="container__contain">
        <div className="row">
          <div>
            <div className="pokemon_img">
              <h3 className="name">{getPokemonDetail?.name}</h3>
              <img src={getImage?.front_default} alt={getPokemonDetail?.name} />
            </div>

            <div className="evolution">
              <h1>EVOLUTION</h1>

              <div className="evolution__container">
                <h1>{getPokemonEvolution?.species.name}</h1>
                <div className="arrow">
                  <h1> &#10147; </h1>{" "}
                </div>
                <h1> {getEvolveSpecie} </h1>
              </div>
            </div>
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
                  <span>Egg groups</span>
                  <span>capture rate</span>
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
                  <div className="egg_group type">
                    {getPokemonSpecie?.egg_groups.map((egg, index) => (
                      <span key={index} style={{ display: "flex" }}>
                        {" "}
                        {egg.name}{" "}
                      </span>
                    ))}
                  </div>
                  <span> {getPokemonSpecie?.capture_rate} %</span>
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
                    {getPokemonSpecie?.flavor_text_entries[0].flavor_text}
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
