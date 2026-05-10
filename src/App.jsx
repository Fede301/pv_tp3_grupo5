import { useState } from 'react'
import ListaProyectos from './ListaProyectos' 
//import Footer from './Footer'
import './App.css'
import './css/stylesindex.css' 
import './css/stylesproyectos.css' 

function App() {

  const [count, setCount] = useState(0)

  return (
    <>

      <header style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ textDecoration: 'underline' }}>PROYECTOS EDUCATIVOS</h1>
      </header>

      <nav className="menu">
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Perfil</a></li>
          </ul>
      </nav>

      <main>
        <ListaProyectos />
      </main>

    </>
  )
}

export default App