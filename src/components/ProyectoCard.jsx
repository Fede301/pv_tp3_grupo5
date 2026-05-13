import React from 'react'

const ProyectoCard = ({datosProyecto}) => {
  return (
    <div>
        <h3>{datosProyecto.titulo}</h3>
        <p>Categoría: {datosProyecto.categoria}</p>
        <p>Estado: {datosProyecto.estado}</p>
        <button onClick={() => handleElimiminar(datosProyecto.id)}>Eliminar</button>
    </div>
  )
}

export default ProyectoCard;