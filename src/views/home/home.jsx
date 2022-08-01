import React from 'react'
import { CardComp } from '../../components/cardsComp/cardComp';
import './styles/styles.scss';

export const Home = () => {
  return (
    <>
        <div className="container">
        
          <div className="filtre">
            <input type="text" name="filtre"/>
          </div>

          <div className="">
            <CardComp />
          </div>
            
        </div>
    </>
  )
}
