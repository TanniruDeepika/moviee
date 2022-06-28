import React from 'react'
import File1 from './File1.mp4';
import File2 from './File2.mp4';
import File3 from './File3.mp4';
import File4 from './File4.mp4';
import './Components/App.css'
const Shorts = () => {
  return (
    <div className='videos'>
        <center>
            <h2 className='title'>Shorts</h2>
            <video width="600px" height="250" className='video' controls >
                <source src={File1}/>
            </video>
            <br></br>
            <br></br>
            <br></br>
            <h3 className='vid'>Cute cat vlogs</h3>
        
            <video width="600px" height="250" className='video' controls >
                <source src={File2}/>
            </video>
            <br></br>
            <br></br>
            <br></br>
            <h3 className='vid'>Lion vlogs</h3>
        
            <video width="600px" height="250" className='video' controls >
                <source src={File3}/>
            </video>
            <br></br>
            <br></br>
            <br></br>
            <h3 className='vid'>Lion vlogs</h3>
        
            <video width="600" height="250" className='video' controls>
                <source src={File4}/>
            </video>
            <br></br>
            <br></br>
            <br></br>
            <h3 className='vid'>Cute cat vlogs</h3>
        
        </center>
    </div>
  )
}

export default Shorts
