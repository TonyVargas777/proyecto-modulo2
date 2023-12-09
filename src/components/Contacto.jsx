import React from 'react'

export const Contacto = () => {
  return (
    <div className='education'>
      <h1 className='heading'>Contacto:</h1>
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
      <form className="contact" action="mailto:tonacovargas@hotmail.com">
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />
      </form>

    </div>
  )
}
 