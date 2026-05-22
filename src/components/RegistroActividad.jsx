import react from "react";

const RegistroActividad = ({ fecha }) => {
    return (
        <div className="conteiner-registro">
            <p>
                <strong>Ultima actualizacion de Proyectos: </strong>{fecha} hs.
            </p>
        </div>
    );
}
export default RegistroActividad;