import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const [tarea, setTarea] = useState("");

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const handleEliminar = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={tarea} onChange={handleChange} />
        <button type="submit">Añadir tarea</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => handleEliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
