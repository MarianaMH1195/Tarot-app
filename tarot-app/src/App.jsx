import { Outlet } from 'react-router-dom'
import './styles/globals.css'

/**
 * Componente raíz de la aplicación
 * Actúa como layout principal y renderiza las rutas hijas
 */
function App() {
  return (
    <div className="app">
      {/* Header principal con título místico */}
      <header className="app-header">
        <h1 className="app-title">✨ Tarot Místico ✨</h1>
        <p className="app-subtitle">Descubre los secretos del universo</p>
      </header>

      {/* Contenedor principal para todas las páginas */}
      <main className="app-main">
        <Outlet />
      </main>

      {/* Footer con información mística */}
      <footer className="app-footer">
        <p>&copy;  2025 Tarot Místico - Conectando con el cosmos - Proyecto realizado por Mariana Moreno para el Bootcamp Fullstack
            (Frontend + Backend) de Factoria F5. Todo los contenidos tienen fines educativos y de divulgación.</p>
      </footer>
    </div>
  )
}

export default App

