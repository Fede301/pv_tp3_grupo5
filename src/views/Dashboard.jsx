import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Container className="mt-4 text-white">
           
            <div className="text-center mb-4">
                <h1 className="fw-bold">Gestión de Proyectos</h1>
                <p className="text-secondary">
                    Bienvenido al sistema de gestión de proyectos. Aquí puedes visualizar el estado general de los trabajos del equipo.
                </p>
            </div>

           
            <Row className="g-3 mb-4">
                <Col md={4}>
                    <Card className="bg-dark text-white border-primary h-100 shadow-sm">
                        <Card.Body className="text-center">
                            <Card.Title className="text-primary">Total de proyectos</Card.Title>
                            <h2 className="display-6 fw-bold">4</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white border-success h-100 shadow-sm">
                        <Card.Body className="text-center">
                            <Card.Title className="text-success">Proyectos en curso</Card.Title>
                            <h2 className="display-6 fw-bold">2</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="bg-dark text-white border-danger h-100 shadow-sm">
                        <Card.Body className="text-center">
                            <Card.Title className="text-danger">Proyectos finalizados</Card.Title>
                            <h2 className="display-6 fw-bold">2</h2>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <hr className="border-secondary my-4" />

            
            <Row className="g-4 justify-content-center">
                <Col md={5}>
                    <Card className="bg-dark text-white border-secondary h-100 shadow-sm">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="fw-bold text-info">Explorar Trabajos</h5>
                                <p className="text-secondary small m-0">
                                    Accede al listado de proyectos educativo, gestiona registros, elimina o revisa detalles dinámicos.
                                </p>
                            </div>
                            <Button as={Link} to="/proyectos" variant="outline-info" className="mt-3 w-100">
                                Ir a la Lista de Proyectos
                              </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card className="bg-dark text-white border-secondary h-100 shadow-sm">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="fw-bold text-warning">Mi Configuración</h5>
                                <p className="text-secondary small m-0">
                                    Administra los datos globales de tu perfil y verifica la sincronización en tiempo real del Context API.
                                </p>
                            </div>
                            <Button as={Link} to="/perfil" variant="outline-warning" className="mt-3 w-100">
                                Ver Mi Perfil de Usuario
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;