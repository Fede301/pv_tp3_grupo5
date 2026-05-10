import { useState } from 'react';
import { obtenerProyectos,eliminarProyectos,buscarProyecto} from './services/proyectoService';
const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(obtenerProyectos());
    
    const handleElimiminar=(id)=>{
        eliminarProyectos(id);
        const listaActualizada=obtenerProyectos();
        setProyectos(listaActualizada);
    }
    const handleBuscar=(evento)=>{
        const texto=evento.target.value;
        const resultado=buscarProyecto(texto);
        setProyectos(resultado);
    }
    return (
        <div>
            <h2>Lista de Proyectos</h2>
            <input type="text" placeholder="Buscar proyecto por título " onChange={handleBuscar} />
            <div className="proyectos-grid">
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id}>
                        <h3>{proyecto.titulo}</h3>
                        <p>Categoría: {proyecto.categoria}</p>
                        <p>Estado: {proyecto.estado}</p>
                        <button onClick={() => handleElimiminar(proyecto.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProyectos;