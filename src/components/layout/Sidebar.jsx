import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault();
    let mi_busqueda = e.target.search_field.value;
    navegar("/buscar/" + mi_busqueda, { replace: true });
  };

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador:</h3>
        <form onSubmit={hacerBusqueda} aria-label="formulario">
          <input className="barra" width="100px" type="text" name="search_field" aria-label="búsqueda" />
          <input type="submit" id="search" value="Buscar:" aria-label="botón" />
        </form>
      </div>
    </aside>
  );
};
