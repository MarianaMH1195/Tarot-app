import { useEffect, useState } from 'react'
import Card from './Card'
import { getAllCards, getRandomCards } from '../services/services'
import '../styles/TarotReading.css'

export default function TarotReading() {
  const [cards, setCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([]) // [pasado, presente, futuro]
  const [readingStep, setReadingStep] = useState('preparation') // preparation | selection | revelation | complete
  const [revealedPositions, setRevealedPositions] = useState([]) // índices revelados
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const positions = [
    { key: 'pasado', name: 'Pasado', icon: '🕰️', description: 'Influencias y experiencias que te han moldeado' },
    { key: 'presente', name: 'Presente', icon: '🌟', description: 'Tu situación actual y energías predominantes' },
    { key: 'futuro', name: 'Futuro', icon: '🔮', description: 'Potencialidades y caminos que se abren ante ti' }
  ]

  useEffect(() => {
    getAllCards()
      .then(setCards)
      .catch(() => setError('No se pudieron cargar las cartas'))
  }, [])

  const startReading = () => {
    setReadingStep('selection')
    setSelectedCards([])
    setRevealedPositions([])
  }

  const chooseRandomThree = async () => {
    try {
      const random = await getRandomCards(3)
      setSelectedCards(random)
      setReadingStep('revelation')
    } catch {
      setError('No se pudieron seleccionar cartas aleatorias')
    }
  }

  const selectCardForPosition = (card, positionIndex) => {
    if (selectedCards[positionIndex]) return
    const next = [...selectedCards]
    next[positionIndex] = card
    setSelectedCards(next)
    setCards(prev => prev.filter(c => c.id !== card.id))

    if (next.filter(Boolean).length === 3) setReadingStep('revelation')
  }

  const revealCard = (positionIndex) => {
    if (!revealedPositions.includes(positionIndex)) {
      setRevealedPositions(prev => [...prev, positionIndex])
    }
  }

  const resetReading = () => {
    setSelectedCards([])
    setRevealedPositions([])
    setReadingStep('preparation')
    getAllCards().then(setCards)
  }

  // Vistas
  const renderPreparation = () => (
    <div className="reading-preparation card">
      <h2>🔮 Preparación para la Lectura</h2>
      <p>Tómate un momento para centrar tu energía y formular tu pregunta.</p>
      <div className="positions-preview">
        {positions.map(p => (
          <div key={p.key} className="position-preview">
            <div className="position-icon">{p.icon}</div>
            <strong>{p.name}</strong>
            <small>{p.description}</small>
          </div>
        ))}
      </div>
      <button className="mystic-button primary large" onClick={startReading}>
        ✨ Comenzar Lectura
      </button>
    </div>
  )

  const renderSelection = () => (
    <div className="reading-selection">
      <h2>Selecciona las Cartas para tu Lectura</h2>
      <p>Haz clic en una carta para colocarla en Pasado → Presente → Futuro, o elige 3 aleatorias.</p>

      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <button className="mystic-button primary" onClick={chooseRandomThree} disabled={cards.length < 3}>
          🔀 Elegir 3 Aleatorias
        </button>
      </div>

      <div className="reading-positions">
        {positions.map((p, index) => (
          <div key={p.key} className={`reading-position ${selectedCards[index] ? 'filled' : 'empty'}`}>
            <div className="position-header">
              <span className="position-icon">{p.icon}</span>
              <h3>{p.name}</h3>
            </div>
            <div className="position-card-slot">
              {selectedCards[index]
                ? <Card card={selectedCards[index]} isFlipped={true} showDetails={false} />
                : <div className="empty-slot"><span className="slot-icon">{p.icon}</span><p>Selecciona una carta</p></div>
              }
            </div>
            <p className="position-description">{p.description}</p>
          </div>
        ))}
      </div>

      {cards.length > 0 && (
        <div className="available-cards">
          <h3>Cartas disponibles</h3>
          <div className="cards-grid">
            {cards.map(card => (
              <div key={card.id} className="selectable-card" onClick={() => {
                const emptyIndex = selectedCards.findIndex(c => !c)
                if (emptyIndex !== -1) selectCardForPosition(card, emptyIndex)
              }}>
                <Card card={card} isFlipped={false} showDetails={false} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderRevelation = () => (
    <div className="reading-revelation">
      <h2>🌟 Revelación de tu Lectura</h2>
      <p>Haz clic en cada carta para revelar su mensaje.</p>

      <div className="reading-positions revelation-mode">
        {positions.map((p, index) => (
          <div key={p.key} className="reading-position">
            <div className="position-header">
              <span className="position-icon">{p.icon}</span>
              <h3>{p.name}</h3>
            </div>
            <div className="position-card-slot">
              <Card
                card={selectedCards[index]}
                isFlipped={revealedPositions.includes(index)}
                onClick={() => revealCard(index)}
                showDetails={true}
              />
            </div>
            {revealedPositions.includes(index) && (
              <div className="card-interpretation">
                <h4>{selectedCards[index]?.arcaneName}</h4>
                <p className="interpretation-text">En la posición del {p.name.toLowerCase()}, este arcano sugiere…</p>
                {selectedCards[index]?.goddessName && (
                  <p className="goddess-connection"><strong>Diosa asociada:</strong> {selectedCards[index].goddessName}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {revealedPositions.length === 3 && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button className="mystic-button primary large" onClick={() => setReadingStep('complete')}>
            📜 Ver Resumen de Lectura
          </button>
        </div>
      )}
    </div>
  )

  const renderComplete = () => (
    <div className="reading-complete card">
      <h2>✨ Tu Lectura está Completa</h2>
      <div className="summary-cards">
        {positions.map((p, i) => (
          <div key={p.key} className="summary-card">
            <div className="summary-position">
              <span className="position-icon">{p.icon}</span>
              <strong>{p.name}</strong>
            </div>
            <div className="summary-card-info">
              <h4>{selectedCards[i]?.arcaneName}</h4>
              {selectedCards[i]?.goddessName && <p className="muted">Diosa: {selectedCards[i].goddessName}</p>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button className="mystic-button" onClick={resetReading}>🔮 Nueva Lectura</button>
      </div>
    </div>
  )

  if (error) return <p className="muted">⚠️ {error}</p>

  return (
    <div className="tarot-reading">
      {readingStep === 'preparation' && renderPreparation()}
      {readingStep === 'selection' && renderSelection()}
      {readingStep === 'revelation' && renderRevelation()}
      {readingStep === 'complete' && renderComplete()}
    </div>
  )
}
