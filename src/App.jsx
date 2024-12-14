import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Download from './components/Download'
import Plugins from './components/Plugins'
import About from './components/About'
import Cloud from './components/Cloud'


function App() {
  return (

    <BrowserRouter >
    <div class="container">
       <Navbar/>
    
        
<Routes>

<Route path='/' element={<Download/>} />
<Route path='/plugins' element={<Plugins/>} />
<Route path='/about' element={<About/>} />
<Route path='/cloud' element={<Cloud/>} />



</Routes>

    </div>


</BrowserRouter>


  )
}

export default App