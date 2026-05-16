const DetalleProyecto = ({ proyecto }) => {

    if (!proyecto) {
        return <p>Seleccione un proyecto</p>;
    }

    const { titulo, descripcion, recursos, equipo} = proyecto;
    
    return (
        <div className="detalle-proyecto">
            <h2>{titulo}</h2>
            {descripcion.map((texto, index) => (
                <p key={index}>{texto}</p>
            ))}
            
            <h3>Recursos</h3>
            <ul>
                <li><a href={recursos.pdf}>PDF</a></li>
            </ul>

            <h3>Equipo</h3>
            <ul>
                {equipo.map((persona, index) => (
                    <li key={index}>
                        {persona.nombre} - {persona.rol}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default DetalleProyecto;