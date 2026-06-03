import '../css/stylesindex.css';
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="menu">
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/perfil">Mi Perfil</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;