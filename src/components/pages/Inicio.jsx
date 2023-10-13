import React from 'react'
import {Link} from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1 className='type'>Bienvenido a Mi_Blog</h1>
      <h2>Blog desarrollado con el MERN Stack</h2>
      <img src="/img/mern7.jpeg" id='mern' alt=""/>
      <h3>(Mongo, Express, React y NodeJS)</h3>      
      <h3>(FULLY RESPONSIVE)</h3>     
      <Link to="/articulos" className='button'>Ver los artículos</Link>
    </div>
  )
}
