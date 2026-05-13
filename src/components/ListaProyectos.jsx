import '../css/stylesproyectos.css';
import { useState } from 'react';

import proyectoService, { obtenerProyectos, eliminarProyectos, buscarproyecto } from '../services/proyectoService'


import ProyectoCard from './ProyectoCard';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [busqueda, setbusqueda] = useState("");
    const handleElimiminar = (id) => {
        eliminarProyectos(id);
        const listaActualizada = obtenerProyectos();
        setProyectos(listaActualizada);
    }
    const handlebuscar = (e) => {
        const valor = (e.target.value);
        setbusqueda(valor);
        setProyectos(proyectoService.buscarproyecto(valor));
    };
    return (
        <div>
            <h2>Lista de Proyectos</h2>
            <input type="text"
                placeholder="Buscar proyecto por título "
                value={busqueda}
                onChange={handlebuscar}
            />
            <div className="proyectos-grid">
                {proyectos.map((proyecto, id) => (
                    <ProyectoCard key={id} datosProyecto={proyecto} handleElimiminar={handleElimiminar} />
                ))}
            </div>
        </div>
    );
};

export default ListaProyectos;