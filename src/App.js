import React from 'react'
import { Data } from './Components/Data'
import Movies from './Components/Movies'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import { NavLink } from 'react-router-dom'
import Desc from './Components/Desc'
import Signin from './Components/Signin'
import Shorts from './Shorts'
const App = () => {
  return (
    <div>

<Router>
  <Routes>
  
  <Route path='/' element={<Home/>} />
  <Route path='/movies' element={<Movies/>} />
  <Route path='/desc' element={<Desc/>} />
  <Route path='/login' element={<Signin/>} />
  <Route path='/short' element={<Shorts/>} />
  </Routes>
  
</Router>

       
    </div>
  )
}

export default App