import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Listpokedex from './Listpokedex';
import Pagination from './Pagination';

const Pokedex = ({ name, pokemon, postperpage, totalpost, paginate,p }) => {

    const [pok, setpok] = useState('')
    const [type, settype] = useState([])
    const [selec, setselec] = useState([])
    const navigate = useNavigate()

   // console.log(pokemon);

    const search = () => {
        //console.log(pok);
        navigate(`/pokedex/${pok}`)
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => settype(res.data.results))

    }, [])


    const filtertype = e => {

        //let newarr = pokemon.filter(po => po.name === 'bulbasaur')
        let newarr = []

        for (let i = 0; i < p.length; i++) {
            //console.log(pokemon[i].types[0].type.name);
            for (let u = 0; u < p[i].types.length; u++) {

                if (p[i].types[u].type.name === e.target.value) {
                    newarr.push(p[i])
                   // console.log(e.target.value);
                }


            }

        }

        //pokemon = newarr;
        if (newarr.length===0) {
            //alert('no hay resultados')
        }
        setselec(newarr)
    }


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
                        <input className='input-home input-poke' type="text" placeholder='Busca un pokemon'
                            onChange={e => setpok(e.target.value)}
                            value={pok}
                        />
                        <button className='button-home' onClick={search}>Buscar</button>
                    </div>
                    <div className="select">
                        <select onChange={filtertype}>
                            <option> Seleccione el tipo </option>
                            {
                                type.map((ty, index) => (

                                    <option value={ty.name} key={index}>{ty.name} </option>

                                ))


                            }
                        </select>
                        <div className="select_arrow">
                        </div>
                    </div>
                </div>
                            
                <Listpokedex pokemon={pokemon} selec={selec} />
                {
selec.length > 0 ?
<div></div>
:
<Pagination postperpage={postperpage}  totalpost={totalpost} paginate={paginate} selec={selec}/>


                }
                    
            </main>

        </div>
    );
};

export default Pokedex;