import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajos";
import image_html from "./img/html_css_js1.png";
import image_react from "./img/reactjs-ar21.png";
import image_node from "./img/nodejs-ar21.png";
import image_mongo from "./img/Mongo-db-logo.png";
import image_express from "./img/express.png";
import image_photo from "./img/perfil.jpg";
import BotonSubir from './BotonSubir'

export const Inicio = () => {
  return (
    <div className="home">
      <div className="my_self">
        <div className="container">
          <img className="avatar" src={image_photo} alt="photo" />
        </div>
        <div className="my_self_type">
          <h1 className="ancho_home">
            Hola, soy <strong className="type">Tony Vargas</strong> y soy
            Desarrollador Web.
          </h1>
        </div>
      </div>
      <h2 className="texts">
        Vivo en Barcelona, y ofrezco mis servicios de{" "}
        <strong> programación</strong> y <strong>desarrollo </strong>
        en todo tipo de proyectos web.
      </h2>
      <div>
        <img className="skills" src={image_html} alt="" />
      </div>
      <h1>MERN STACK</h1>
      <div>
        <img className="skills1" src={image_mongo} alt="MONGO" />
        <img className="skills1" src={image_express} alt="EXPRESS" />
        <img className="skills1" src={image_react} alt="REACT" />
        <img className="skills1" src={image_node} alt="NODE" />
      </div>
      <h2 className="texts">
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        relevancia en internet.
      </h2>
      <h2>
        <Link to="/contacto" align="center">
          Contacta conmigo
        </Link>
      </h2>
      <div align="center" className="redes">
        <div>
          <a
            href="https://linkedin.com/in/tony-vargas-garcía-122b1424b"
            target="blank"
          >
            <img
              className="red"
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="LinkedIn"
              height="40px"
              width="40px"
            ></img>
          </a>
        </div>

        <div>
          <a
            href="https://twitter.com/tonaco777"
            alt="tony777."
            height="40px"
            width="40px"
          >
            <img
              className="red"
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
              alt="twitter"
              height="40px"
              width="40px"
            ></img>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/tonaco777/"
            alt="instagram"
            height="40px"
            width="40px"
          >
            <img
              className="red"
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
              alt="instagram"
              height="40px"
              width="40px"
            ></img>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/TonyVargas777"
            alt="github"
            height="40px"
            width="40px"
          >
            <img
              className="red"
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="github"
              height="40px"
              width="40px"
            ></img>
          </a>
        </div>
        <div>
          <a href="mailto:tonacovargas@hotmail.com" target="blank">
            <img
              className="red"
              align="center"
              src="img/email.jpg"
              alt="email"
              height="40"
              width="40"
            ></img>
          </a>
        </div>
      </div>

      <section className="lasts-works">
        <h2 className="heading">Mi último proyecto:</h2>
        <p className="heading2">Miniatura de mi último proyecto:</p>
        <div className="works">
          <ListadoTrabajos limite="1" />
        </div>
      </section>
    </div>
  );
};
