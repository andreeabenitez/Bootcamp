import React from "react";

function Tarjeta({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <article className="tarjeta">
      <h2 className="tarjeta__title"> {nombre} </h2>
      <h2 className="tarjeta__surname"> {apellido} </h2>
      <p className="tarjeta__description"> {ocupacion} </p>
      <img className="image" src={imagenURL} alt="Imagen de la tarjeta" />
    </article>
  );
}
export default Tarjeta;
