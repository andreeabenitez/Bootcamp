import Tarjeta from "./Tarjeta";
import React from "react";

function ListaDeTarjeta({ tarjetas }) {
  return (
    <div className="ListadeTarjetas">
      <Tarjeta
        nombre="Juan"
        apellido="Pérez"
        ocupacion="Desarrollador"
        imagenURL="https://pinguinodigital.com/wp-content/uploads/2020/07/Qu%C3%A9-es-una-URL-ejemplos-3.png"
      />
      <Tarjeta
        nombre="Ana"
        apellido="Gómez"
        ocupacion="Diseñadora"
        imagenURL="https://pinguinodigital.com/wp-content/uploads/2020/07/Qu%C3%A9-es-una-URL-ejemplos-3.png"
      />
      <Tarjeta
        nombre="Luis"
        apellido="Martínez"
        ocupacion="Gerente"
        imagenURL="https://pinguinodigital.com/wp-content/uploads/2020/07/Qu%C3%A9-es-una-URL-ejemplos-3.png"
      />
    </div>
  );
}

export default ListaDeTarjeta;
