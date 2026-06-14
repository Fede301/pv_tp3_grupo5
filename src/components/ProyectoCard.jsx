import { Link } from 'react-router-dom';
import { Card, Button, Badge, Col, Row } from 'react-bootstrap';

const ProyectoCard = ({ datosProyecto, handleElimiminar, setProyectoSeleccionado }) => {
  return (
    <Col sm={6}>
      <Card className="proyecto-card-hover bg-dark text-white h-100 shadow-sm">
        <Card.Body>
          <Card.Title>{datosProyecto.titulo}</Card.Title>
          <Card.Text>Categoría: {datosProyecto.categoria}</Card.Text>
          <Card.Text>
            Estado: <Badge bg="light" text="dark" className="rounded-pill">{datosProyecto.estado}</Badge>
          </Card.Text>
          <Row className="p-1 g-1">
          <Button as={Link} to={`/proyectos/${datosProyecto.id}`} variant="primary">
            Ver detalle
          </Button>
          <Button onClick={() => handleElimiminar(datosProyecto.id)} variant="outline-danger">
            Eliminar
          </Button>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProyectoCard;