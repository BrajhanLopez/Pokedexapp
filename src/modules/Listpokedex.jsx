import React from 'react';
import Carditempok from './Carditempok';
import { Link } from 'react-router-dom';
const Listpokedex = ({ pokemon }) => {

  //console.log(pokemon[0].id);
  return (
    <div>

      <div className='container-list-pokemon'>

        <ul className='container-li1'>

          {
            pokemon.map((pok, index) => (
              <li className='lii' key={index}>
               
                <Link  className='link-crad' to={`/pokedex/${pok.id}`} >
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