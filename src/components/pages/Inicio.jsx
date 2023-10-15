import React from 'react'
import {Link} from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1 className='type'>Bienvenido a Mi_Blog</h1>
      <h2>Blog desarrollado con el MERN Stack</h2>
      <div className='img_inicio'>
        <div className='mern'>
          <img src="/img/mern7.jpeg" id='mern' alt=""/>
          <h6>(Mongo, Express, React y NodeJS)</h6> 
        </div>
        <div className='gif'>
          <img src="/img/DXKh.gif" id='gif' alt=""/>
          <h6>(Fully Responsive)</h6>
        </div>  
      </div>
      {/* <Link to="/articulos" className='button'>Ver los artículos</Link> */}
    </div>
  )
}
