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
    console.log(personajesItem);
    setPersonajes(personajesItem);
  };

  return (
    <div>

      <div className="fondo">
      <h2 className="titulo">Star Wars</h2>
        {personajes.map((item) => (
          <ul className="lista" key={item.name}>
            <Link to={`/people/${item.name}`}>{item.name}</Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
