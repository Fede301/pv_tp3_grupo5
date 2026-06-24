import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import '../css/stylesindex.css';

const Header = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3">
            <h1 className="mb-0">PROYECTOS EDUCATIVOS</h1>
            <div className="text-end">
                <div className="fw-bold">{usuario.nombre}</div>
                <small className="text-light opacity-75">{usuario.rol} — {usuario.institucion}</small>
            </div>
        </header>
    );
};

export default Header;