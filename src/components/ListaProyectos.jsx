import '../css/stylesproyectos.css';
import { useState } from 'react';
<<<<<<< HEAD:src/ListaProyectos.jsx
import proyectoService, { obtenerProyectos, eliminarProyectos, buscarproyecto } from './services/proyectoService';
=======
import { obtenerProyectos,eliminarProyectos,buscarProyecto} from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
>>>>>>> 15b7cfa83b3e6fd5d270ba0287b23cd96107e563:src/components/ListaProyectos.jsx
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
                    <ProyectoCard key={id} datosProyecto={proyecto} handleElimiminar={handleElimiminar}/>
                ))}
            </div>
        </div>
    );
};

export default ListaProyectos;