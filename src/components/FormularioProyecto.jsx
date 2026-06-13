import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FormularioProyecto = ({ show, onHide, onAgregar }) => {

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        recursoPdf: "",
        equipoNombre: "",
        equipoRol: ""
    });

    const handleFormulario = (evento) => {
        const { name, value } = evento.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { titulo, categoria, estado } = formulario;

        if (!titulo || !categoria || !estado) return;

        onAgregar(formulario);

        setFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            recursoPdf: "",
            equipoNombre: "",
            equipoRol: ""
        });
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo Proyecto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="titulo">Título</Form.Label>
                <Form.Control type="text" id="titulo" name="titulo" placeholder="Título" value={formulario.titulo} onChange={handleFormulario} />
                <Form.Label htmlFor="categoria">Categoría</Form.Label>
                <Form.Control type="text" id="categoria" name="categoria" placeholder="Categoría" value={formulario.categoria} onChange={handleFormulario} />
                <Form.Label htmlFor="estado">Estado</Form.Label>
                <Form.Control type="text" id="estado" name="estado" placeholder="Estado" value={formulario.estado} onChange={handleFormulario} />
                <Form.Label htmlFor="descripcion">Descripción</Form.Label>
                <Form.Control type="text" id="descripcion" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleFormulario} />
                <Form.Label htmlFor="recursoPdf">Ruta PDF</Form.Label>
                <Form.Control type="text" id="recursoPdf" name="recursoPdf" placeholder="Ruta PDF" value={formulario.recursoPdf} onChange={handleFormulario} />
                <Form.Label htmlFor="equipoNombre">Nombre integrante</Form.Label>
                <Form.Control type="text" id="equipoNombre" name="equipoNombre" placeholder="Nombre integrante" value={formulario.equipoNombre} onChange={handleFormulario} />
                <Form.Label htmlFor="equipoRol">Rol integrante</Form.Label>
                <Form.Control type="text" id="equipoRol" name="equipoRol" placeholder="Rol integrante" value={formulario.equipoRol} onChange={handleFormulario} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Cerrar</Button>
                <Button variant="success" onClick={handleSubmit}>Agregar Proyecto</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormularioProyecto;