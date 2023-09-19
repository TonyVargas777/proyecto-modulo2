import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");

  const guardarArticulo = async (e) => {
    e.preventDefault();
    let nuevoArticulo = formulario;

    const { datos } = await Peticion(
      Global.url + "crear",
      "POST",
      nuevoArticulo
    );
    
    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }

    const fileInput = document.querySelector("#file");

    if (datos.status === "success" && fileInput) {
      setResultado("guardado");

      const formData = new formData();
      formData.append("file0", fileInput.files);

      const subida = await Peticion(
        Global.url + "subir-imagen" + datos.articulo._id,
        "POST",
        formData,
        true
      );

      if (subida.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }
    }    
  };

  return (
    <div className="jumbo">
      <h1>Crear artículo:</h1>
      <p>Formulario para crear un artículo:</p>

      <strong>
        {resultado == "guardado" ? "Artículo guardado con éxito" : ""}
      </strong>
      <strong>{resultado == "error" ? "Los datos son incorrectos" : ""}</strong>

      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Año:</label>
          <input type="text" name="fecha" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>
        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
