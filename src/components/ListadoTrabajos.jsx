import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className="works">
        {trabajos.slice(0,limite).map((trabajo) => {
        return (
          <article key={trabajo.id} className="work-item">
            <div className="mask">
              {/* <img src={"../src/components/img/"+trabajo.id+".png"}/> */}
              {/* <img src={process.env.PUBLIC_URL + "/img/" + trabajo.id + ".png"}/> */}
              <img src={"/img/"+trabajo.id+".png"}/>

            </div>
            <div className="datos">
              <span>{trabajo.categorias}</span>
              <h2><Link to={trabajo.url} target="blank">{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </div>
          </article>
        );
      })}
      </section>
  );
};
