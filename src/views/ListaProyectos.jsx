import { useEffect, useState, useRef } from 'react';
import { obtenerProyectos, eliminarProyectos, buscarProyecto, agregarProyectos } from '../services/proyectoService';
import ProyectoCard from '../components/ProyectoCard';
import DetalleProyecto from './DetalleProyecto';
import FormularioProyecto from '../components/FormularioProyecto';
import { Container, Row, Button, Form, Alert, Toast, ToastContainer } from "react-bootstrap";
import RegistroActividad from '../components/RegistroActividad';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [fecha, setFecha] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showFecha, setShowFecha] = useState(false);
    const actualizarFecha = useRef(false);

    const handleElimiminar = (id) => {
        eliminarProyectos(id);
        setProyectos(obtenerProyectos());
        actualizarFecha.current = true;
    };
    
    const handleBuscar = (evento) => {
        const { value } = evento.target;
        setBusqueda(value);
        setProyectos(buscarProyecto(value));
    };

    const handleAgregar = (datosDelFormulario) => {
        const { titulo, categoria, estado, descripcion, recursoPdf, equipoNombre, equipoRol } = datosDelFormulario;

        const nuevoProyecto = {
            id: Date.now(),
            titulo,
            categoria,
            estado,
            descripcion: [descripcion, "Descripción extendida pendiente de completar."],
            recursos: { pdf: recursoPdf || "/recursos/default.pdf" },
            equipo: [{ nombre: equipoNombre || "Sin asignar", rol: equipoRol || "Sin rol" }]
        };

        agregarProyectos(nuevoProyecto);
        setProyectos(obtenerProyectos());
        actualizarFecha.current = true;
    };

    const capturaFecha = () => {
        const fechaActual = new Date();

        const dia = String(fechaActual.getDate()).padStart(2, '0');
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
        const año = fechaActual.getFullYear();

        let hora = fechaActual.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        setFecha(`Última actualización de la lista: ${dia}/${mes}/${año} a las ${hora} hs.`);
        setShowFecha(true);
    };

    useEffect(() => {
        if (actualizarFecha.current) {
            capturaFecha();
            actualizarFecha.current = false;
        }
    }, [proyectos]);

    return (
        <Container className='mt-4'>
            <h1 className='mb-4 fw-bold'>Lista de Proyectos</h1>
            <div className='d-flex gap-2 mb-5'>

                <Form.Control
                    type="text"
                    placeholder="Buscar proyecto por título"
                    value={busqueda}
                    onChange={handleBuscar}
                />
                <Button variant="success" className="text-nowrap" onClick={() => setShowModal(true)}>+ Agregar</Button>
                <FormularioProyecto show={showModal} onHide={() => setShowModal(false)} onAgregar={handleAgregar} />
            </div>

            <Row xs={2} className="g-4">
                {proyectos.map((proyecto) => (
                    <ProyectoCard
                        key={proyecto.id}
                        datosProyecto={proyecto}
                        handleElimiminar={handleElimiminar}
                        setProyectoSeleccionado={setProyectoSeleccionado}
                    />
                ))}
            </Row>
            <RegistroActividad fecha={fecha} mostrarCartel={showFecha} setMostrarCartel={setShowFecha}/>
        </Container>
    );
};

export default ListaProyectos;