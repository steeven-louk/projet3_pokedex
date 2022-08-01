import React from 'react';
import './styles/styles.scss'

export const Details = () => {
  return (
   <div className="container__details">
        <div className="container__contain">
          <div className="row">
              <div className="pokemon_img">
              <h3 className="name">umbreon</h3>
                <img src="/imgs/pok.jpg" alt="" />
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
                    <th>Type</th>
                    <th>Height</th>
                    <th>Weight</th>
                  </thead>
                  <tbody>
                    <td>Grass</td>
                    <td>70 Cm</td>
                    <td>69 Lbs</td>
                  </tbody>
                </table>

                <table className="table-2">
                  <thead>
                    <th>Hp</th>
                    <th>Attack</th>
                    <th>Defense</th>
                  </thead>
                  <tbody>
                    <td>45</td>
                    <td>49</td>
                    <td>49</td>
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
