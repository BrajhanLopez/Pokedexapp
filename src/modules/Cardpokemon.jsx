import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cardpokemon = () => {
    const [idpokemon, setidpokemon] = useState({})
    const { id } = useParams()

let thp,tatk, tdef, tvel




    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setidpokemon(res.data))



    }, [id])
    thp = (Number(idpokemon.stats?.[0].base_stat)*10)/15
    tatk = (Number(idpokemon.stats?.[1].base_stat)*10)/15
    tdef = (Number(idpokemon.stats?.[2].base_stat)*10)/15
    tvel = (Number(idpokemon.stats?.[5].base_stat)*10)/15
    //console.log(idpokemon.types[0].type.name);

    const styl = `head-pokefull c-${idpokemon.types?.[0].type.name}` 
    const styl2 = `card-tip c-${idpokemon.types?.[0].type.name}` 
    //console.log(styl);
    return (
        <div>
            <header className="footer" >
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

            <main className='card-pokemonn'>
                <div className={styl}>
                    <img className='image-pokefull' src={idpokemon.sprites?.other['official-artwork'].front_default} alt="" />

                </div>

                <h1 className='h1-pokefull'>#{idpokemon.id}</h1>



                <h2 className='name-pokefull'>{idpokemon.name}</h2>
                <div className='peso-pokefull'>
                    <p>peso</p>
                    <p>altura</p>
                    <p> <b> {idpokemon.weight} </b></p>
                    <p> <b> {idpokemon.height} </b></p>
                </div>

                <div className='tipo-hab'>
                    <h3>Tipo</h3>
                    <h3>Habilidades</h3>
                </div>
                <div className='div-hab'>
                    <div className='tip'>
                        {

                            idpokemon.types?.map((ty, index) => (
                                <h3 className={`card-tip c-${ty.type.name}` } key={index}>
                                    {ty.type.name}
                                </h3>
                            ))

                        }

                    </div>

                    <div className='hab'>

                        {
                            idpokemon.abilities?.map((ty, index) => (
                                <h3 className='card-tip' key={index}>
                                    {ty.ability.name}
                                </h3>
                            ))

                        }
                       
                    </div>
                </div>

                <div className='stast'>
                    <h2>Stast</h2>
                    <div className='linea'> <hr />      </div>
                </div>
                <div className='stast-container'>
                    <span className='stast-name'>HP</span>
                    <div className='percent'>
                        <div className='progress' style={{width: `${thp}%`}}></div>
                    </div>
                    <span className='value'>{idpokemon.stats?.[0].base_stat}/150</span>

                </div>
                <div className='stast-container'>
                    <span className='stast-name'>Ataque</span>
                    <div className='percent'>
                        <div className='progress' style={{width: `${tatk}%`}}></div>
                    </div>
                    <span className='value'>{idpokemon.stats?.[1].base_stat}/150</span>

                </div>
                <div className='stast-container'>
                    <span className='stast-name'>Defensa</span>
                    <div className='percent'>
                        <div className='progress' style={{width: `${tdef}%`}}></div>
                    </div>
                    <span className='value'>{idpokemon.stats?.[2].base_stat}/150</span>

                </div>
                <div className='stast-container'>
                    <span className='stast-name'>Velocidad</span>
                    <div className='percent'>
                        <div className='progress' style={{width: `${tvel}%`}}></div>
                    </div>
                    <span className='value'>{idpokemon.stats?.[5].base_stat}/150</span>

                </div>

            </main>

            <div className='card-pokemonn marginb'>
                <br />
                <div className='stast'>
                    <h2>Movenments</h2>
                    <div className='linea'> <hr />      </div>
                </div>
                <div className='container-movs'>

                {
                            idpokemon.moves?.map((ty, index) => (
                                <div className='movements-i' key={index}>
                                    {ty.move.name}
                                </div>
                            ))

                        }


                    
                </div>

            </div>



        </div>
    );
};

export default Cardpokemon;