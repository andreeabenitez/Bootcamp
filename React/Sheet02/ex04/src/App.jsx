import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Semaforo() {
  const [color, setColor] = useState("rojo");

  const cambiarLuz = () => {
    if (color == "rojo") {
      setColor("amarillo");
    } else if (color == "amarillo") {
      setColor("verde");
    } else {
      setColor("rojo");
    }
  };

  return (
    <div className="semaforo">
      <div className={`luz ${color === "rojo" ? "rojo activo" : "rojo"}`}></div>
      <div
        className={` luz ${
          color === "amarillo" ? "amarillo activo" : "amarillo"
        }`}
      ></div>
      <div
        className={` luz ${color === "verde" ? "verde activo" : "verde"}`}
      ></div>
      <button onClick={cambiarLuz}>Siguiente</button>
    </div>
  );
}
export default Semaforo;
