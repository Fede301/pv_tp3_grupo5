import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProyectos } from "../services/proyectoService";
// Importamos los componentes oficiales de React-Bootstrap
import { Container, Card, Button, ListGroup, Badge } from "react-bootstrap";

const DetalleProyecto = () => {
    const { id } = useParams(); 
    const [proyecto, setProyecto] = useState(null);

    useEffect(() => {
        const lista = obtenerProyectos();
        const proyectoEncontrado = lista.find(p => p.id === Number(id)); 
        setProyecto(proyectoEncontrado);
    }, [id]);

    if (!proyecto) {
        return (
            <Container className="mt-5 text-center text-white">
                <p className="fs-4">Cargando detalles...</p>
            </Container>
        );
    }

    const { titulo, descripcion, recursos, equipo } = proyecto;

    return (
        <Container className="mt-4 mb-5">
            <Card className="bg-dark text-white border-secondary shadow">
                
                <Card.Header className="border-secondary bg-secondary text-center py-3">
                    <h2 className="mb-0 fw-bold">{titulo}</h2>
                </Card.Header>

                <Card.Body className="px-4">
                    <div className="mb-4">
                        {descripcion.map((texto, index) => (
                            <p key={index} className="lead fs-5 text-light-50 lh-base">{texto}</p>
                        ))}
                    </div>

                    <hr className="bg-secondary" />

                    <div className="mb-4">
                        <h4 className="text-info mb-3">Recursos Disponibles</h4>
                        <div className="ps-2">
                            <Button 
                                href={recursos.pdf} 
                                target="_blank" 
                                rel="noreferrer" 
                                variant="outline-info" 
                                size="sm" 
                                className="px-4"
                            >
                                📄 Ver Documento PDF
                            </Button>
                        </div>
                    </div>

                    <hr className="bg-secondary" />

                    <div className="mb-4">
                        <h4 className="text-warning mb-3">Equipo de Trabajo</h4>
                        {/* Usamos el ListGroup oficial de React-Bootstrap para las listas prolijas */}
                        <ListGroup variant="flush" className="rounded border border-secondary">
                            {equipo.map((persona, index) => (
                                <ListGroup.Item 
                                    key={index} 
                                    className="bg-dark text-white border-secondary d-flex justify-content-between align-items-center"
                                >
                                    <span className="fw-bold">{persona.nombre}</span>
                                    <Badge bg="secondary" className="px-3 py-2">{persona.rol}</Badge>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>

                <Card.Footer className="border-secondary bg-transparent d-flex justify-content-start py-3">
                    <Button as={Link} to="/proyectos" variant="outline-light">
                        ← Volver a la Lista
                    </Button>
                </Card.Footer>

            </Card>
        </Container>
    );
};

export default DetalleProyecto;