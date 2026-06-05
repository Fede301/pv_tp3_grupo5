import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-3">
                Gestión de Proyectos
            </h1>
            <p className="text-center">
                Bienvenido al sistema de gestión de proyectos.
                Aquí puedes visualizar el estado general de los trabajos del equipo.
            </p>
            <Row className="mt-4">
                <Col md={4}>
                    <Card bg="primary" text="white">
                        <Card.Body>
                            <Card.Title>Total de proyectos</Card.Title>
                            <Card.Title>
                                4
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg="success" text="white">
                        <Card.Body>
                            <Card.Title>Proyectos en curso</Card.Title>
                            <Card.Title>
                                2
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg="danger" text="white">
                        <Card.Body>
                            <Card.Title>Proyectos finalizados</Card.Title>
                            <Card.Title>
                                2
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;