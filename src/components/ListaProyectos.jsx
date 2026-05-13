import '../css/stylesproyectos.css';
import { useState } from 'react';
import { obtenerProyectos,eliminarProyectos,buscarProyecto} from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    const [busqueda, setBusqueda] = useState("");
    
    const handleElimiminar=(id)=>{
        eliminarProyectos(id);
        const listaActualizada=obtenerProyectos();
        setProyectos(listaActualizada);
    }
    const handleBuscar=(evento)=>{
        setBusqueda(evento.target.value);
        const resultado=buscarProyecto(evento.target.value);
        setProyectos(resultado);
    }
    return (
        <div>
            <h2>Lista de Proyectos</h2>
            <input type="text" placeholder="Buscar proyecto por título " value={busqueda} onChange={handleBuscar} />
            <div className="proyectos-grid">
                {proyectos.map((proyecto, id) => (
                    <ProyectoCard key={id} datosProyecto={proyecto} handleElimiminar={handleElimiminar}/>
                ))}
            </div>
        </div>
    );
};

export default ListaProyectos;