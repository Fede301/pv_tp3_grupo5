import '../css/stylesindex.css';
const Nav = () => {
    return (
        <nav className="menu">
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Perfil</a></li>
            </ul>
        </nav>
    )
}
export default Nav;