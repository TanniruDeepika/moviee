import React from 'react'

  
import { Data } from './Data'
import './App.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Desc from './Desc'
const Movies = () => {
  const[search,setSearch]=useState('')
  return (
    <div className='back1'>
    <div className='input'>
      <h1 className='search'>Search Movie</h1>
<h1><input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='input'/></h1> 
        {
            Data.filter(data=>data.Moviename.toLowerCase().includes(search.toLowerCase())).map(data=>{
               return <div> 
                
                <img src={data.image} className='img' key={data.id}/>
                <br/>
                <br/>
              <h1 className='title'>{data.Moviename}</h1> 
                <br/>
                <h2 className='para2'>About Movie :</h2>
              <p className='para'><h3>{data.desc}</h3></p> 
                <br/>
                <br/>
                </div>
            
               
            })}
</div>
</div>
   
  )
}

export default Movies
  