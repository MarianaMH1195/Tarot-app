import { Outlet } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'

/*Componente raíz de la aplicación, actúa como layout principal*/
function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Contenedor principal para todas las páginas */}
      <main className="app-main">
        <Outlet />
      </main>

      {/* Footer con información mística */}
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Tarot STEM - Conectando con el cosmos - Proyecto educativo Factoria F5</p>
      </footer>
    </div>
  )
}

export default App
