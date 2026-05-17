import '../css/stylesproyectos.css';
import { useState } from 'react';
import { obtenerProyectos, eliminarProyectos, buscarProyecto, agregarProyectos } from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        recursoPdf: "",
        equipoNombre: "",
        equipoRol: ""
    });

    const handleElimiminar = (id) => {
        eliminarProyectos(id);
        setProyectos(obtenerProyectos());
    };

    const handleBuscar = (evento) => {
        const { value } = evento.target;
        setBusqueda(value);
        setProyectos(buscarProyecto(value));
    };

    const handleFormulario = (evento) => {
        const { name, value } = evento.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleAgregar = () => {
        const { titulo, categoria, estado, descripcion, recursoPdf, equipoNombre, equipoRol } = formulario;

        if (!titulo || !categoria || !estado) return;

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
        <div>
            <h2>Lista de Proyectos</h2>

            <input
                type="text"
                placeholder="Buscar proyecto por título"
                value={busqueda}
                onChange={handleBuscar}
            />


            <div className="formulario">
                <h3>Agregar Proyecto</h3>
                <input type="text" name="titulo" placeholder="Título" value={formulario.titulo} onChange={handleFormulario} />
                <input type="text" name="categoria" placeholder="Categoría" value={formulario.categoria} onChange={handleFormulario} />
                <input type="text" name="estado" placeholder="Estado" value={formulario.estado} onChange={handleFormulario} />
                <input type="text" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleFormulario} />
                <input type="text" name="recursoPdf" placeholder="Ruta PDF" value={formulario.recursoPdf} onChange={handleFormulario} />
                <input type="text" name="equipoNombre" placeholder="Nombre integrante" value={formulario.equipoNombre} onChange={handleFormulario} />
                <input type="text" name="equipoRol" placeholder="Rol integrante" value={formulario.equipoRol} onChange={handleFormulario} />
                <button onClick={handleAgregar}>Agregar Proyecto</button>
            </div>

            <div className="proyectos-grid">
                {proyectos.map((proyecto) => (
                    <ProyectoCard
                        key={proyecto.id}
                        datosProyecto={proyecto}
                        handleElimiminar={handleElimiminar}
                        setProyectoSeleccionado={setProyectoSeleccionado}
                    />
                ))}
            </div>

            <DetalleProyecto proyecto={proyectoSeleccionado} />
        </div>
    );
};

export default ListaProyectos;