import React, {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';

import axios from 'axios';
import './styles/styles.scss'

export const Details = () => {

  const {id} = useParams()

  const [getPokemonDetail, setGetPokemonDetail] = useState();

  const url =`https://pokeapi.co/api/v2/pokemon/${id}`

  const getImage = getPokemonDetail?.sprites.other.dream_world

  const getData = async() =>{
    try {
      const pokemon = await axios.get(url);

      setGetPokemonDetail(pokemon.data)

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log('====================================');
  console.log('pok', getPokemonDetail);
  console.log('====================================');


  return (

   <div className="container__details">
        <div className="container__contain">
          <div className="row">
              <div className="pokemon_img">
                <h3 className="name">{getPokemonDetail?.name}</h3>
                <img src={getImage?.front_default} alt={getPokemonDetail?.name} />
              </div>
              <div className="pokemon_desc">
                <h3>stat de base:</h3>
                <hr /> <br />
                <div className="name">
                  <div className="name__container">
                    <h3>blase</h3>
                  </div>
                </div>

                <div className="stat__container">
                <table className="table-1">
                  <thead>
                      <tr>  
                        <th>Type</th>
                        <th>Height</th>
                        <th>Weight</th>
                      </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Grass</td>
                      <td>{getPokemonDetail?.height} Cm</td>
                      <td>{getPokemonDetail?.weight} Lbs</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-2">
                  <thead>
                    <tr>
                      <th>Hp</th>
                      <th>Attack</th>
                      <th>Defense</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>45</td>
                      <td>49</td>
                      <td>49</td>
                    </tr>
                    
                  </tbody>
                </table>

                <br />

                <div className="description">
                  <div className="description__container">
                    <p className="desc">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut vitae explicabo vero deserunt culpa eveniet libero voluptate in, repudiandae ipsam.
                    </p>
                  </div>
                </div>
                </div>

              </div>
          </div>
        </div>
   </div>
  )
}
