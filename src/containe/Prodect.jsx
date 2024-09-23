import React from 'react'
import Car from '../Prodect/Car'
import { Link } from 'react-router-dom'
export default function Prodect({data}) {
  return (
    <div>
      <Link to="/Car">Car</Link>

        <h1>this is  a prodect page</h1>
           {data.map((e,i)=>(
            <div key={i}>
                <p>{e.body}</p>
            </div>

           ))}

    </div>
  )
}
