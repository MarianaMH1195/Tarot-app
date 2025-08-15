import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import '../styles/CardList.css';

/**
 * =============================================
 * COMPONENTE CARDLIST - LISTA DE CARTAS
 * =============================================
 * Muestra una grilla de cartas del tarot con funcionalidad
 * de carga, filtrado y estados de loading/error
 */

const CardList = ({ 
  cards = [], 
  loading = false, 
  error = null,
  onCardClick = null,
  showFlipped = false,
  className = '',
  emptyMessage = 'No se encontraron cartas en el reino místico...',
  gridColumns = 'auto'
}) => {
  const [visibleCards, setVisibleCards] = useState([]);

  /**
   * Efecto para animar la aparición secuencial de las cartas
   */
  useEffect(() => {
    if (cards.length > 0 && !loading) {
      setVisibleCards([]);
      
      // Mostrar cartas con delay escalonado para efecto de aparición
      cards.forEach((card, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, card]);
        }, index * 100); // 100ms de delay entre cada carta
      });
    }
  }, [cards, loading]);

  /**
   * Renderiza el estado de carga
   */
  const renderLoading = () => (
    <div className="cardlist-loading">
      <div className="loading-container">
        <div className="loading-symbol">🔮</div>
        <h3>Consultando los arcanos...</h3>
        <p>Las cartas están siendo invocadas desde el plano místico</p>
        <div className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );

  /**
   * Renderiza el estado de error
   */
  const renderError = () => (
    <div className="cardlist-error">
      <div className="error-container">
        <div className="error-symbol">⚠️</div>
        <h3>Error en la consulta mística</h3>
        <p>{error}</p>
        <button 
          className="mystic-button"
          onClick={() => window.location.reload()}
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );

  /**
   * Renderiza el estado vacío
   */
  const renderEmpty = () => (
    <div className="cardlist-empty">
      <div className="empty-container">
        <div className="empty-symbol">🌙</div>
        <h3>El reino está en silencio</h3>
        <p>{emptyMessage}</p>
      </div>
    </div>
  );

  /**
   * Renderiza la grilla de cartas
   */
  const renderCards = () => (
    <div 
      className={`cardlist-grid ${className}`}
      style={{
        gridTemplateColumns: gridColumns === 'auto' 
          ? 'repeat(auto-fit, minmax(220px, 1fr))'
          : gridColumns
      }}
    >
      {visibleCards.map((card, index) => (
        <div 
          key={card.id} 
          className="cardlist-item"
          style={{ 
            animationDelay: `${index * 0.1}s` 
          }}
        >
          <Card
            card={card}
            isFlipped={showFlipped}
            onClick={onCardClick}
            className="fade-in"
          />
        </div>
      ))}
    </div>
  );

  // Estados condicionales de renderizado
  if (loading) {
    return renderLoading();
  }

  if (error) {
    return renderError();
  }

  if (!cards || cards.length === 0) {
    return renderEmpty();
  }

  return (
    <div className={`cardlist-container ${className}`}>
      {/* Header con información de las cartas */}
      <div className="cardlist-header">
        <div className="cards-count">
          <span className="count-number">{cards.length}</span>
          <span className="count-text">
            {cards.length === 1 ? 'carta mística' : 'cartas místicas'}
          </span>
        </div>
        
        {/* Indicador de estado de las cartas */}
        <div className="cards-status">
          <span className="status-icon">
            {showFlipped ? '🃏' : '🔮'}
          </span>
          <span className="status-text">
            {showFlipped ? 'Cartas reveladas' : 'Cartas ocultas'}
          </span>
        </div>
      </div>

      {/* Grilla principal de cartas */}
      {renderCards()}

      {/* Footer informativo */}
      {cards.length > 0 && (
        <div className="cardlist-footer">
          <p className="footer-text">
            ✨ Haz clic en cualquier carta para revelar sus secretos ✨
          </p>
        </div>
      )}
    </div>
  );
};

export default CardList;
