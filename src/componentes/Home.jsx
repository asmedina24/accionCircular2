import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://swapi.dev/api/people/");
    const personajes = await data.json();
    const personajesItem = personajes.results;
    console.log(personajesItem)
    setPersonajes(personajesItem);

  };

  return (
    <div className="fondo">
      <ul>
        {personajes.map((item) => (
          <li key={item.name}>
            <Link to={`/people/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
