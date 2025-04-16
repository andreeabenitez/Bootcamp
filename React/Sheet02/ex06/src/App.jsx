import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        data.map((item) => (
          <p key={item.name}>
            {item.url} {item.name}
          </p>
        ))
      )}
    </div>
  );
}
export default FetchData;
