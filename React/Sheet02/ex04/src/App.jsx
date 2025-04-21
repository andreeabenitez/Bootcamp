import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Semaforo() {
  const [color, setColor] = useState("rojo"); // Estado inicial: rojo

  const handleNextColor = () => {
    // Cambiar el color del semáforo en orden
    if (color === "rojo") {
      setColor("amarillo");
    } else if (color === "amarillo") {
      setColor("verde");
    } else {
      setColor("rojo");
    }
  };

  return (
    <div className="semaforo">
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

export default Semaforo;
