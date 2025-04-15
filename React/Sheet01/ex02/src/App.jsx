import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Producto from "./Componentes/producto.jsx";
import ListaDeProductos from "./Componentes/Listadeproductos.jsx";

function App() {
  const misProductos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: "$10",
      descripcion: "Descripción del producto 1",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: "$20",
      descripcion: "Descripción del producto 2",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: "$30",
      descripcion: "Descripción del producto 3",
    },
  ];
  return <ListaDeProductos productos={misProductos} />;
}
export default App;
