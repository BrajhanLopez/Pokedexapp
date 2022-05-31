import React from 'react';
import Listpokedex from './Listpokedex';

const Pokedex = ({ name, pokemon}) => {


    return (
        <div>
            <header className="footer">
                <div className='rectangle-red'>
                    <div className='rectangle-black'>
                    </div>
                </div>
                <div className='circle-big circlebigh'>
                    <div className='circle-small circlesmallh'>

                    </div>
                </div>


                <img className='pokeimg' src="https://i.postimg.cc/jSJHr8Xy/imagepoke.png" alt="" />
            </header >

            <main className='main2'>
                <h3>Bienvenido {name} <span className='sp'>, aqui podras encontrar tu pokemon favorito</span> </h3>
                <div className='container-search'>
                <div className='input-button'>
                <input className='input-home input-poke' type="text" placeholder='Busca un pokemon' />
                <button className='button-home' onClick={() => { }}>Buscar</button>
                </div>
                <div className="select"> 
                <select>
                    <option>Todos los pokemones</option>
                    <option>Hello 1</option>
                    <option>Hello 2</option>
                    <option>Hello 3</option>
                    <option>Hello 4</option>
                </select>
                <div className="select_arrow">
                 </div>
                </div>
                </div>

                <Listpokedex pokemon={pokemon}/>

            </main>

        </div>
    );
};

export default Pokedex;