import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tarjeta from "./Tarjeta.jsx";

function App() {
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

export default App;
