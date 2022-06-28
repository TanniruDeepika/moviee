import React from 'react'
import { Data } from './Data'
const Desc = () => {
  return (
    <div>
        {
            Data.map((value)=>
                <li key ={value.id}>
{value.desc}
                </li>
            )
}
    </div>
  )
}

export default Desc