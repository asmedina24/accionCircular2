import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from "react";


export const Personajes = () => {
    const {results} = useParams()
    console.log(results)

    const [detalle, setDetalle] = useState([]);
   
    useEffect(() => {
      obtenerDatos();
    }, []);
  
    const obtenerDatos = async () => {
      const data = await fetch(`https://swapi.dev/api/people/${results}`);
      const personajes = await data.json();
      const personajesItem = personajes.results;
      console.log(personajes)
      console.log(personajesItem)
      setDetalle(personajesItem);
    };

    return (
        <div>
     <h3>Probando {detalle}</h3>
     
              
        </div>
    )
}
