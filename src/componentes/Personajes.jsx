import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from "react";


export const Personajes = () => {
     
    const {name} = useParams()
    console.log(name)


    const [detalle, setDetalle] = useState([]);

    useEffect(() => {
      obtenerDatos();
    }, []);
  
    const obtenerDatos = async () => {
      const data = await fetch(`https://swapi.dev/api/people/`);
      const personajes = await data.json();
      const personajesItem = personajes.results;
      console.log(personajesItem)
      setDetalle(personajesItem);
  
    };

    return (
        <div>
     <h3>{detalle.name}</h3>
     
              
        </div>
    )
}
