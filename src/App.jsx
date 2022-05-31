import { HashRouter, Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'

import './App.css'
import Home from './modules/Home'
import Pokedex from './modules/Pokedex'
import axios from 'axios'
import Cardpokemon from './modules/Cardpokemon'
import Listpokedex from './modules/Listpokedex'

function App() {

const [name, setname] = useState('')



  const [pokemon, setpokemon] =useState([])
  useEffect(()=> {
  
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .then(res=> {

      for (let i = 0; i < res.data.results.length; i++) {
        axios.get(res.data.results[i].url)
        .then(result => {

          setpokemon(prevarray => [...prevarray, result.data])
        })
      }

    }) 
   
    
    
    },[])






 const getname = name => {
   setname(name)
 }


  return (

<HashRouter>
<div className="App">
    <Routes>
    
      <Route path='/' element={<Home getname ={getname}/>}/>
      <Route path='/pokedex' element={<Pokedex name={name} pokemon={pokemon} />}/>
      <Route path='/pokedex/:id' element={ <Cardpokemon /> }/>
       

    </Routes>
    </div>
    </HashRouter>
      )
}

export default App
