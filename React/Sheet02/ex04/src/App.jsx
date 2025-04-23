import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Semaforo() {
<<<<<<< HEAD
  const [color, setColor] = useState("rojo"); // Estado inicial: rojo

  const handleNextColor = () => {
    // Cambiar el color del semáforo en orden
    if (color === "rojo") {
      setColor("amarillo");
    } else if (color === "amarillo") {
=======
  const [color, setColor] = useState("rojo");

  const cambiarLuz = () => {
    if (color == "rojo") {
      setColor("amarillo");
    } else if (color == "amarillo") {
>>>>>>> bb5e5b7843146d6e367302f50ca856f02087e166
      setColor("verde");
    } else {
      setColor("rojo");
    }
  };

  return (
    <div className="semaforo">
<<<<<<< HEAD
      <div
        className={`light ${color === "rojo" ? "rojo" : ""}`}
      ></div>
      <div
        className={`light ${color === "amarillo" ? "amarillo" : ""}`}
      ></div>
      <div
        className={`light ${color === "verde" ? "verde" : ""}`}
      ></div>
      <button onClick={handleNextColor}>Siguiente</button>
    </div>
  );
}

=======
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
>>>>>>> bb5e5b7843146d6e367302f50ca856f02087e166
export default Semaforo;
