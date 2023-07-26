import React, { useState } from 'react';
import '../styles/Information.css'



const Information = () => {
  const [nombre, setNombre] = useState('');
  const [detalles, setDetalles] = useState('');
  const [fecha, setFecha] = useState('');
  const [enlace, setEnlace] = useState('');
  const [imagen, setImagen] = useState(null);
  const [mostrarValores, setMostrarValores] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleDetallesChange = (e) => {
    setDetalles(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleEnlaceChange = (e) => {
    setEnlace(e.target.value);
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarValores(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-entrance shadow-xl transform hover:scale-105 transition duration-500'>
        <div className="campo_form" >
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div className="campo_form" >
          <label htmlFor="detalles">Descripcion:</label>
          <input
            type="text"
            id="detalles"
            value={detalles}
            onChange={handleDetallesChange}
          />
        </div>
        <div className="campo_form" >
          <label htmlFor="fecha">Modelo:</label>
          <input
            type="text"
            id="fecha"
            value={fecha}
            onChange={handleFechaChange}
          />
        </div>
        <div className="campo_form" >
          <label htmlFor="enlace">Precio:</label>
          <input
            type="text"
            id="enlace"
            value={enlace}
            onChange={handleEnlaceChange}
          />
        </div>
        <div className="campo_form" >
          <label htmlFor="imagen">Imagen:</label>
          
          <input
            className='boton'
            type="file"
            id="imagen"
            onChange={handleImagenChange}
            
          />
          
        </div>
        <button className='boton' type="submit">Guardar</button>
      </div>

      {mostrarValores && (
        <div className='card-form'>
          {imagen && (
            <div className='card-form__img'>
              <img src={URL.createObjectURL(imagen)} alt="Imagen ingresada" />
            </div>
          )}
          <p className='card-form__nombre'>{nombre}</p>
          <p className='card-form__detalles'>{detalles}</p>
          <p className='card-form__fecha'>{fecha}</p>
          <p className='card-form__link'>{"S/. "}{enlace}</p>
          
          
        </div>
      )}
    </form>
  );
};

export default Information;
