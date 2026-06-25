import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import '../css/stylesindex.css';

const Header = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3">
            <h1 className="mb-0 fs-3 text-white">PROYECTOS EDUCATIVOS</h1>

            <div className="d-flex align-items-center gap-3">

                <div className="text-end lh-sm">
                    <div className="fw-bold text-white text-capitalize">{usuario.nombre}</div>
                    <small className="text-white-50">{usuario.rol} — {usuario.institucion}</small>
                </div>


                <div className="bg-white bg-opacity-25 border border-white border-opacity-25 rounded-circle d-flex align-items-center justify-content-center fw-bold text-white fs-5"
                    style={{ width: '40px', height: '40px' }}>
                    {usuario.nombre.charAt(0).toUpperCase()}
                </div>
            </div>
        </header>
    );
};

export default Header;