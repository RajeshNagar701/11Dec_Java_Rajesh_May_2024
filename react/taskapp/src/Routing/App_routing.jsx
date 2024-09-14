import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import PNG from './Pages/PNG'



function App_routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='*' element={<PNG/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App_routing