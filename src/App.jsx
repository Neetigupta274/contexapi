
import React from 'react'
import { createContext , useState , useEffect} from 'react'
export let Global = createContext()

import Navbar from './Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './containe/Home'
import About from './containe/About'
import Service from './containe/Service'
import Prodect from './containe/Prodect'
import Car from "./Prodect/Car"

export default function App() {

  let [data , setdata] =useState([])

  useEffect(()=>{
    async function getdata(){
      let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        res = await res.json()
        console.log(res);
        setdata(res)
    }
    getdata()
  },[])

  return (
    <div>
      <Global.Provider  value={data}>
        <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path= '/' element = {<Home/>}/>
    <Route path= '/about' element = {<About data ={data}/>}/>
    <Route path= '/Service' element = {<Service data ={data}/>}/>
    <Route path= '/Prodect' element = {<Prodect data ={data}/>}/>
    <Route path="/Car" element={<Car data={data}/>}/>
     
  </Routes>
  </BrowserRouter>
   
  </Global.Provider>
    </div>
  )
}
