import React from 'react'

export const Contacto = () => {
  return (
    <div className='jumbo'>
      <h1>Contacto:</h1>
      <form className="formulario" action="mailto:tonacovargas@hotmail.com">
        <div className='form-group'>
          <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />
      
        </div>
        </form>

    </div>
  )
}
 