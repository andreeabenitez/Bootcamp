import React from "react";

function Tarjeta({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <div className="ListadeTarjetas">
      <h2>
        {nombre} {apellido}
      </h2>
      <p>{ocupacion} </p>
      <img src={imagenURL} alt="Imagen de la tarjeta" />
    </div>
  );
}
export default Tarjeta;
