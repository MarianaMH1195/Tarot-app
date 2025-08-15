import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCards } from '../services/services'
import '../styles/CardList.css'
import Card from './Card'

export default function CardList() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllCards()
      .then(setCards)
      .catch(() => setError('No se pudieron cargar las cartas'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando cartas… 🔮</p>
  if (error) return <p>{error}</p>

  return (
    <div className="cardlist">
      <h2>Todas las cartas</h2>
      <div className="grid cards-grid">
        {cards.map(card => (
          <Link key={card.id} to={`/card/${card.id}`} className="card-link">
            <Card card={card} isFlipped={true} showDetails={false} />
          </Link>
        ))}
      </div>
    </div>
  )
}
