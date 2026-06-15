import { useState, useContext } from 'react';
import { Container, Card, ListGroup, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import { UsuarioContext } from '../context/UsuarioContext';

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);

    const [editando, setEditando] = useState(false);
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const [formulario, setFormulario] = useState({
        nombre: usuario.nombre,
        dni: usuario.dni,
        rol: usuario.rol,
        institucion: usuario.institucion
    });

    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditar = () => {
        setFormulario({
            nombre: usuario.nombre,
            dni: usuario.dni,
            rol: usuario.rol,
            institucion: usuario.institucion
        });
        setEditando(true);
    };

    const handleGuardar = () => {
        actualizarPerfil(formulario);
        setEditando(false);
        setMostrarAlerta(true);
    };

    const handleCancelar = () => {
        setEditando(false);
    };

    return (
        <Container className="mt-4 mb-5">
            <Card className="bg-dark text-white border-secondary shadow">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <span>Perfil de Usuario</span>
                    {!editando && (
                        <Button variant="outline-warning" size="sm" onClick={handleEditar}>
                            Editar Perfil
                        </Button>
                    )}
                </Card.Header>

                <Card.Body>
                    {mostrarAlerta && (
                        <Alert
                            variant="success"
                            onClose={() => setMostrarAlerta(false)}
                            dismissible
                        >
                            Perfil actualizado correctamente.
                        </Alert>
                    )}

                    {!editando ? (
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Nombre:</strong> {usuario.nombre}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>DNI:</strong> {usuario.dni}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Rol:</strong> {usuario.rol}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Institución:</strong> {usuario.institucion}
                            </ListGroup.Item>
                        </ListGroup>
                    ) : (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={formulario.nombre}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dni"
                                    value={formulario.dni}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Rol</Form.Label>
                                <Form.Select
                                    name="rol"
                                    value={formulario.rol}
                                    onChange={handleChange}
                                >
                                    <option value="Alumno">Alumno</option>
                                    <option value="Docente">Docente</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Institución</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="institucion"
                                    value={formulario.institucion}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Row className="g-2">
                                <Col xs="auto">
                                    <Button variant="success" onClick={handleGuardar}>
                                        Guardar Cambios
                                    </Button>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="danger" onClick={handleCancelar}>
                                        Cancelar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PerfilUsuario;