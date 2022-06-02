import React from 'react';
import Carditempok from './Carditempok';
import { Link } from 'react-router-dom';
const Listpokedex = ({ pokemon, selec }) => {

  //console.log(selec);
  return (
    <div>

      <div className='container-list-pokemon'>

        <ul className='container-li1'>

          {
            selec.length > 0 ?
            selec.map((pok, index) => (
              <li className='lii' key={index}>
               
                <Link  className='link-crad' to={`${pok.id}`} >
              <Carditempok name={pok.name} img={pok.sprites?.other['official-artwork'].front_default} pok={pok}/>
              </Link>
          </li>
            ))


            : 
            
            pokemon.map((pok, index) => (
              
              <li className='lii' key={index}>
               
                <Link  className='link-crad' to={`${pok.id}`} >
              <Carditempok name={pok.name} img={pok.sprites?.other['official-artwork'].front_default} pok={pok}/>
              </Link>
          </li>
            ))
            
          }




        </ul>

      </div>
    </div>
  );
};

export default Listpokedex;