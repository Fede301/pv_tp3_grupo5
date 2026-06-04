import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProyectos } from "../services/proyectoService";

const DetalleProyecto = () => {
    const { id } = useParams(); 
    const [proyecto, setProyecto] = useState(null);

    useEffect(() => {
        const lista = obtenerProyectos();
        const proyectoEncontrado = lista.find(p => p.id === Number(id)); 
        setProyecto(proyectoEncontrado);
    }, [id]);

    if (!proyecto) {
        return (
            <div className="container mt-5 text-center text-white">
                <p className="fs-4">Cargando detalles...</p>
            </div>
        );
    }

    const { titulo, descripcion, recursos, equipo } = proyecto;

    return (
        <div className="container mt-4 mb-5">
            <div className="card bg-dark text-white border-secondary shadow">
                
                <div className="card-header border-secondary bg-secondary text-center py-3">
                    <h2 className="mb-0 fw-bold">{titulo}</h2>
                </div>

                <div className="card-body px-4">
                    <div className="mb-4">
                        {descripcion.map((texto, index) => (
                            <p key={index} className="lead fs-5 text-light-50 lh-base">{texto}</p>
                        ))}
                    </div>

                    <hr className="bg-secondary" />

                    <div className="mb-4">
                        <h4 className="text-info mb-3">Recursos Disponibles</h4>
                        <div className="ps-2">
                            <a href={recursos.pdf} target="_blank" rel="noreferrer" className="btn btn-outline-info btn-sm px-4">
                                📄 Ver Documento PDF
                            </a>
                        </div>
                    </div>

                    <hr className="bg-secondary" />

                    <div className="mb-4">
                        <h4 className="text-warning mb-3">Equipo de Trabajo</h4>
                        <ul className="list-group list-group-flush rounded border border-secondary">
                            {equipo.map((persona, index) => (
                                <li key={index} className="list-group-item bg-dark text-white border-secondary d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">{persona.nombre}</span>
                                    <span className="badge bg-secondary px-3 py-2">{persona.rol}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="card-footer border-secondary bg-transparent d-flex justify-content-start py-3">
                    <Link to="/proyectos" className="btn btn-outline-light">
                        ← Volver a la Lista
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default DetalleProyecto;