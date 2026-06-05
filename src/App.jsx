import React, { useState } from 'react'
import './App.css'
import './css/stylesindex.css'
import './css/stylesproyectos.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ListaProyectos from './views/ListaProyectos'
import DetalleProyecto from './views/DetalleProyecto'
import PerfilUsuario from './views/PerfilUsuario'
function App() {

  const [count, setCount] = useState(0)

  return (

    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
         <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>


      <Footer />
    </Router>
  )
}

export default App