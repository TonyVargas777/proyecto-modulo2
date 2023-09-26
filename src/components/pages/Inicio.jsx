import React from 'react'
import {Link} from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1 className='type'>Bienvenido a Mi_Blog</h1>
      <h3>Blog desarrollado con el MERN Stack</h3>
      <h3>(Mongo, Express, React y NodeJS)</h3>
      <br/>
      <Link to="/articulos" className='button'>Ver los artículos</Link>
    </div>
  )
}
