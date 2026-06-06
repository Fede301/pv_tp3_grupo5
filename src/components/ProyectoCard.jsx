import React from 'react'
import { Link } from 'react-router-dom';

const ProyectoCard = ({ datosProyecto, handleElimiminar, setProyectoSeleccionado }) => {
  return (
    <div className='col'>

      <div className='card h-100 '>
        <h3>{datosProyecto.titulo}</h3>
        <p>Categoría: {datosProyecto.categoria}</p>
        <p>Estado: {datosProyecto.estado}</p>
        <div className='px-5 row gap-1'>

          <button onClick={() => handleElimiminar(datosProyecto.id)} className='btn btn-danger'>Eliminar</button>


          { /* <button onClick={() => setProyectoSeleccionado(datosProyecto)}>Ver detalle</button> */}

          <Link to={`/proyectos/${datosProyecto.id}`} className='btn text-white' style={{backgroundColor: "#3b82f6"}}>Ver detalle </Link>
        </div>

      </div>
    </div>
  )
}

export default ProyectoCard;