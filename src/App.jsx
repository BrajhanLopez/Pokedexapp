import { HashRouter, Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'

import './App.css'
import Home from './modules/Home'
import Pokedex from './modules/Pokedex'
import axios from 'axios'
import Cardpokemon from './modules/Cardpokemon'
import Listpokedex from './modules/Listpokedex'
import ProtectedRoutes from './modules/Protectedroute'
import Pagination from './modules/Pagination'

function App() {

const [name, setname] = useState('')



  const [pokemon, setpokemon] =useState([])

  const [currentpage, setcurrentpage] = useState(1)
  const [postperpage, setpostperpage] = useState(20)

  useEffect(()=> {
  //1126
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200')
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
const indexoflastpost = currentpage * postperpage;
const indexoffirstpost = indexoflastpost - postperpage;
const currentpost = pokemon.slice(indexoffirstpost, indexoflastpost);

const paginate = (pageNumber) => setcurrentpage(pageNumber)

  return (

<HashRouter>
<div className="App">
    <Routes>
    
      <Route path='/' element={<Home getname ={getname}/>}/>

      <Route element={ <ProtectedRoutes name ={name}/> }> 
      <Route path='/pokedex' element={<Pokedex name={name} pokemon={currentpost} postperpage={postperpage}  totalpost={pokemon.length} paginate={paginate} p={pokemon}/>}/>
      
      <Route path='/pokedex/:id' element={ <Cardpokemon /> }/>
      </Route>

    </Routes>
    </div>
    </HashRouter>
      )
}

export default App
