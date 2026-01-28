import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';
import fondoCartas from '/assets/fondo-cartas.png';

/* Representa una carta del tarot con funcionalidad de volteo y navegación al detalle */
const Card = ({
  card,
  isFlipped = false,
  onClick,
  showDetails = true,
  className = '',
  position = null
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  /* Maneja el clic en la carta */
  const handleCardClick = () => {
    if (onClick) {
      onClick(card);
    } else if (showDetails) {
      navigate(`/card/${card.id}`);
    }
  };

  /* Maneja la carga exitosa de la imagen */
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  /* Maneja errores al cargar la imagen */
  const handleImageErrorEvent = (event) => {
    setImageError(true);
    setImageLoaded(false);

    event.target.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM0IwQTQ1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0ZGRDcwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjxzdHJvbmc+Q2FydGE8L3N0cm9uZz48L3RleHQ+PC9zdmc+';
  };

  /* Obtiene el texto de posición para lectura */
  const getPositionText = () => {
    const positions = {
      pasado: '🕰️ Pasado',
      presente: '🌟 Presente',
      futuro: '🔮 Futuro'
    };
    return positions[position] || '';
  };

  return (
    <div className={`card-container ${className}`}>

      {position && (
        <div className="card-position-label">
          {getPositionText()}
        </div>
      )}

      {/* Contenedor de la carta con control flipped */}
      <div
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        {/* Cara trasera de la carta (oculta) */}
        <div className="card-back">
          <img src={fondoCartas} className='imagen' alt="Card back" />
        </div>

        {/* Cara frontal (revelada solo si isFlipped=true) */}
        {isFlipped && (
          <div className="card-front">
            <div className="card-content">

              <div className="card-image-container">
                {!imageLoaded && !imageError && (
                  <div className="card-image-loader">
                    <div className="loader-symbol">🔮</div>
                    <p>Cargando...</p>
                  </div>
                )}

                <img
                  src={card.arcaneImage?.imageSrc}
                  alt={`Carta del Tarot: ${card.arcaneName}`}
                  className={`card-image ${imageLoaded ? 'loaded' : ''}`}
                  onLoad={handleImageLoad}
                  onError={handleImageErrorEvent}
                  loading="lazy"
                />

                {imageError && (
                  <div className="card-image-error">

                    <p>Imagen no disponible</p>
                  </div>
                )}
              </div>


              <div className="card-info">
                <div className="card-number">
                  {card.arcaneNumber !== undefined ? `${card.arcaneNumber}` : '?'}
                </div>

                <h3 className="card-name">
                  {card.arcaneName || 'Carta Misteriosa'}
                </h3>

                {showDetails && (
                  <p className="card-description">
                    {card.arcaneDescription
                      ? card.arcaneDescription.substring(0, 80) +
                      (card.arcaneDescription.length > 80 ? '...' : '')
                      : 'Los misterios de esta carta esperan ser revelados...'}
                  </p>
                )}


                {card.goddessName && (
                  <div className="card-goddess-hint">
                    <span className="goddess-icon"></span>
                    <span className="goddess-name">{card.goddessName}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="card-glow"></div>
    </div>
  );
};

export default Card;
