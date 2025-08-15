import '../styles/Card.css'

export default function Card({ card, isFlipped = true, onClick, showDetails = false }) {
  // Tarjeta "dorso" si no está volteada
  if (!isFlipped && !showDetails) {
    return (
      <div className="tarot-card back" onClick={onClick} role="button">
        <div className="pattern" />
        <span className="back-title">Arcano</span>
      </div>
    )
  }

  return (
    <div className="tarot-card" onClick={onClick} role={onClick ? 'button' : undefined}>
      <img
        src={card?.arcaneImage?.imageSrc}
        alt={card?.arcaneName}
        className="tarot-img"
        loading="lazy"
      />
      <div className="tarot-info">
        <h4>{card?.arcaneName}</h4>
        {showDetails && (
          <>
            <p className="muted">{card?.arcaneDescription}</p>
            {card?.goddessName && <p className="muted"><strong>Diosa:</strong> {card.goddessName}</p>}
          </>
        )}
      </div>
    </div>
  )
}
