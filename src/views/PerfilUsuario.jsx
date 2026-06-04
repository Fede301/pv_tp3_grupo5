import { Container, Card, ListGroup } from 'react-bootstrap';

const PerfilUsuario = () => {
    return (
        <Container className="mt-4">
            <Card>
                <Card.Header>
                    Perfil de Usuario
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <strong>Nombre:</strong> Juan Pérez
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Rol:</strong> Estudiante
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Institución:</strong> Universidad Nacional de Jujuy
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default PerfilUsuario;