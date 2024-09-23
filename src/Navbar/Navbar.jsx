import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../containe/Home'
import About from '../containe/About'
import Service from '../containe/Service'
import Prodect from '../containe/Prodect'



export default function Navbar() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Service">Service</Link>
    <Link to="/Prodect">Product</Link>
</div>
  )
}
