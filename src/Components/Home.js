import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { Carousel } from 'bootstrap'
const Home = () => {
  return (
   <div className='post'>
    <Navbar/> 
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"  >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.pensivly.com/wp-content/uploads/2020/10/Dadagiri-2-Maanagaram-2019-New-Hindi-Dubbed-Movie-Sundeep.jpg" class="d-block w-100" alt="first" className='img'/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/3f/71/d7/3f71d7fdde423b3e5d5d0d423ec4d552.jpg" class="d-block w-100" alt="second" className='img'/>
    </div>
    
    <div class="carousel-item">
      <img src="https://crazum.com/wp-content/uploads/2020/11/Ek-Aur-Rakshak.jpg" className='img'/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/Z5os4ErwOo8/maxresdefault.jpg" className='img'/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" className='title1'>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" className='title2'>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<NavLink to='/movies' className='get'>Get Started</NavLink>
   </div>
  )
}

export default Home