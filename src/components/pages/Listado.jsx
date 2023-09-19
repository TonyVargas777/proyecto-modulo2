import React from 'react'
import { Link } from 'react-router-dom'
import {Global} from "../../helpers/Global"
import { Peticion } from '../../helpers/Peticion'

export const Listado = ({articulos, setArticulos}) => {
  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url+"articulo/"+id, "DELETE");
    if(datos.status == "success"){
      let articulosActualizados = articulos.filter(articulo => articulo._id != id);
      setArticulos(articulosActualizados)
    }
  }
  return (
    articulos.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              {articulo.imagen != "default.png" && <img src={Global.url+"imagen/"+articulo.imagen} />}
              {articulo.imagen == "default.png" && <img src="https://www.idsplus.net/wp-content/uploads/js-logo-badge-512.png" />}
            </div>         
            <div className="datos">
              <h3 className="title"><Link to={"/articulo/"+articulo._id}>{articulo.titulo}</Link></h3>
              <p className="descripcion"><b>{articulo.fecha}</b></p>
              <p className="descripcion">{articulo.contenido}</p>
              
              {/* <Link to={"/editar/"+articulo._id} className="edit">Editar</Link>
              <button className="delete" onClick={()=>{
                eliminar(articulo._id)
              }}>Borrar</button> */}
            </div>
          </article>
        );
      })
  )
}
