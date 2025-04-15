import React from "react";

function Producto({ nombre, precio, descripcion }) {
  return (
    <article className="producto">
      <h2 className="producto__title"> {nombre} </h2>
      <p className="producto__description"> {descripcion} </p>
      <p className="producto__price"> {precio} </p>
    </article>
  );
}
export default Producto;
