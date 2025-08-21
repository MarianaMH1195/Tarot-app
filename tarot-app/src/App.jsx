import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './styles/globals.css'
import Modal from './components/Modal'

/*Componente raíz de la aplicación,actúa como layout principal y renderiza las rutas hijas*/
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMeaning, setSelectedMeaning] = useState("")

  const handleCardClick = (meaning) => {
    setSelectedMeaning(meaning)
    setIsModalOpen(true)
  }

  return (
    <div className="app">
      {/* Header principal con título místico */}
      <header className="app-header">
        <h1 className="app-title">Tarot Místico </h1>
        <p className="app-subtitle">Descubre los secretos del universo</p>
      </header>

      {/* Contenedor principal para todas las páginas */}
      <main className="app-main">
        {/* Pasamos handleCardClick a las rutas hijas */}
        <Outlet context={{ onCardClick: handleCardClick }} />
      </main>

      {/* Footer con información mística */}
      <footer className="app-footer">
        <p>&copy;  2025 Tarot Místico - Conectando con el cosmos - Proyecto realizado por Mariana Moreno para el Bootcamp Fullstack
            (Frontend + Backend) de Factoria F5. Todo los contenidos tienen fines educativos y de divulgación.</p>
      </footer>

      {/* Modal global */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        meaning={selectedMeaning}
      />
    </div>
  )
}

export default App
