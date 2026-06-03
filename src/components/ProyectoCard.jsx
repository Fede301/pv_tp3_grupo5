import React from 'react'
import { Link } from 'react-router-dom';

const ProyectoCard = ({ datosProyecto, handleElimiminar, setProyectoSeleccionado }) => {
  return (
    <div>
      <h3>{datosProyecto.titulo}</h3>
      <p>Categoría: {datosProyecto.categoria}</p>
      <p>Estado: {datosProyecto.estado}</p>
      <button onClick={() => handleElimiminar(datosProyecto.id)}>Eliminar</button>


      { /* <button onClick={() => setProyectoSeleccionado(datosProyecto)}>Ver detalle</button> */}

      <Link to={`/proyectos/${datosProyecto.id}`}>Ver detalle </Link>

    </div>
  )
}

export default ProyectoCard;