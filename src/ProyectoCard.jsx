import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';

const ProyectoCard = ({ datosProyecto, handleElimiminar }) => {
  const { titulo, categoria, estado, id } = datosProyecto;

  return (
    <Card className="bg-dark text-white border-secondary mb-3 shadow-sm h-100" id={`proyecto-${id}`}>
      
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="fw-bold mb-0 me-2">{titulo}</Card.Title>
            <Badge bg={estado === 'Completado' ? 'success' : 'warning'} className="text-dark">
              {estado}
            </Badge>
          </div>
          
          <Card.Text className="text-muted small">
            <strong>Categoría:</strong> {categoria}
          </Card.Text>
        </div>

        {/* Acciones de la tarjeta */}
        <div className="d-flex gap-2 mt-3">
          <Button 
            as={Link} 
            to={`/proyectos/${id}`} 
            variant="outline-info" 
            size="sm" 
            className="w-50"
          >
            Ver Detalle
          </Button>
          
          <Button 
            variant="outline-danger" 
            size="sm" 
            className="w-50"
            onClick={() => handleElimiminar(id)}
          >
            Eliminar
          </Button>
        </div>
      </Card.Body>

    </Card>
  );
};

export default ProyectoCard;

