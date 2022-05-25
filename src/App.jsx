import { HashRouter, Routes, Route } from 'react-router-dom'

import { useState } from 'react'

import './App.css'
import Home from './modules/Home'
import Pokedex from './modules/Pokedex'

function App() {
 

  return (

<HashRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pokedex' element={<Pokedex />}/>
      


    </Routes>
    </HashRouter>
      )
}

export default App
