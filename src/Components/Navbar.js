import React from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'
import Movies from './Movies'
const Navbar = () => {
  return (
    <div  >
      <ul>
        <li>
        <h1 className='title'>
        Movies App
       </h1>
        </li>
      <li>

      </li>

      <li>
        <NavLink to='/short'  className='link'><h4>Shorts</h4> </NavLink>
        </li>
        <li>
        <NavLink to='/login'  className='link'><h4>Sign in</h4> </NavLink>
        </li>
        
        
        
      </ul>
      
    </div>
  )
}

export default Navbar