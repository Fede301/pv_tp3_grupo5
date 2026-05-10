import { useState } from 'react'
import ListaProyectos from './ListaProyectos'

import './App.css'
import './css/stylesindex.css'
import './css/stylesproyectos.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <Nav />
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </>
  )
}

export default App