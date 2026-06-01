import { useState } from 'react'
import './App.css'
import './css/stylesindex.css'
import './css/stylesproyectos.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <Nav />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </>
  )
}

export default App