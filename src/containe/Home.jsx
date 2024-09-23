
import React from 'react'
import { useContext } from 'react'
import { Global } from '../App'

export default function Home() {
    let data = useContext(Global)

  return (
    <div>{
        data.map((e,i)=>(
            <div key={i}>

                <h3>{e.title}</h3>
            
            </div>
        ))
       
    }
 
  
</div>
  )
}
