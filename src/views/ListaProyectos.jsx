import { useEffect, useState, useRef } from 'react';
import { obtenerProyectos, eliminarProyectos, buscarProyecto, agregarProyectos } from '../services/proyectoService';
import ProyectoCard from '../components/ProyectoCard';
import DetalleProyecto from './DetalleProyecto';
import FormularioProyecto from '../components/FormularioProyecto';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    const [fecha, setFecha] = useState("");
    const esPrimeraCarga = useRef(true);

    const handleElimiminar = (id) => {
        eliminarProyectos(id);
        setProyectos(obtenerProyectos());
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
    };

    useEffect(() => {
        if (esPrimeraCarga.current) {
            esPrimeraCarga.current = false;
            return;
        }
        capturaFecha();
    }, [proyectos]);

    return (
        <div className='border-1 border container'>
            <h2>Lista de Proyectos</h2>
            <div className='d-flex gap-2 mb-5'>

                <input
                    type="text"
                    placeholder="Buscar proyecto por título"
                    value={busqueda}
                    onChange={handleBuscar}
                    className='form-control'
                />
                <button className='btn btn-success text-nowrap' data-bs-toggle="modal" data-bs-target="#formulario">+ Agregar</button>
                <FormularioProyecto onAgregar={handleAgregar} />
            </div>

            <div className="row row-cols-2 g-4">
                {proyectos.map((proyecto) => (
                    <ProyectoCard
                        key={proyecto.id}
                        datosProyecto={proyecto}
                        handleElimiminar={handleElimiminar}
                        setProyectoSeleccionado={setProyectoSeleccionado}
                    />
                ))}
            </div>
            {fecha && <p style={{ color: 'white', textAlign: 'center', margin: '20px 0' }}>{fecha}</p>}
        </div>
    );
};

export default ListaProyectos;