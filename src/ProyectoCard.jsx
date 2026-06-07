import React from 'react';

const ProyectoCard = ({ titulo, categoria, estado, id }) => {
  return (
    <article className="proyecto-card" id={`proyecto-${id}`}>
      <div className="card-header">
        <h3>{titulo}</h3>
        <span className={`badge ${estado ? estado.toLowerCase() : ''}`}>{estado}</span>
      </div>
      
      <div className="card-body">
        <p><strong>Categoría:</strong> {categoria}</p>
      </div>

      <div className="card-actions">
        <button className="btn-detalle">Ver Detalle</button>
        <button className="btn-eliminar">
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default ProyectoCard;
