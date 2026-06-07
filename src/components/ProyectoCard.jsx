import React from 'react'
import { Link } from 'react-router-dom';

const ProyectoCard = ({ datosProyecto, handleElimiminar, setProyectoSeleccionado }) => {
  return (
    <div className='col'>

      <div className='card h-100 '>
        <h3>{datosProyecto.titulo}</h3>
        <p>Categoría: {datosProyecto.categoria}</p>
        <p>Estado: <span className="badge rounded-pill text-bg-light">{datosProyecto.estado}</span></p>
        <div className='px-5 row gap-1'>

          <Link to={`/proyectos/${datosProyecto.id}`} className='btn btn-outline-primary'>Ver detalle </Link>

          <button onClick={() => handleElimiminar(datosProyecto.id)} className='btn btn-outline-danger'>Eliminar</button>

          { /* <button onClick={() => setProyectoSeleccionado(datosProyecto)}>Ver detalle</button> */}

        </div>

      </div>
    </div>
  )
}

export default ProyectoCard;