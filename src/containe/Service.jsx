import React from 'react'

export default function Service({data}) {
  return (
    <div>
        <h1>this is services page</h1>
        {
            data.map((e,i)=>(
                <div key={i}>
                    <h5> title:{e.title}</h5>
                </div>
            ))        }
    </div>
  )
}
