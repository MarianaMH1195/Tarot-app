import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getAllCards } from '../services/services';
import '../styles/CardList.css';

const CardList = ({ gridColumns = 'auto', className = '', onCardClick }) => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flipped, setFlipped] = useState(false); 

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getAllCards();
        setCards(data);
        setVisibleCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">🔮</div>
        <p className="loading-text">Consultando a las estrellas...</p>
      </div>
    );
  }

  return (
    <div className={`cardlist-container ${className}`}>
      
      <div className="cardlist-header">
        <div className="cards-count">
          <span className="count-number">{cards.length}</span>
          <span className="count-text">
            {cards.length === 1 ? 'carta mística' : 'cartas místicas'}
          </span>
        </div>
        
        {/* Botón interactivo para ocultar/revelar */}
        <button 
          className="cards-status" 
          onClick={() => setFlipped(prev => !prev)}
        >
          <span className="status-icon">
            {flipped ? '🃏' : '🔮'}
          </span>
          <span className="status-text">
            {flipped ? 'Cartas reveladas' : 'Cartas ocultas'}
          </span>
        </button>
      </div>

      {/* Grilla principal de cartas */}
      <div 
        className={`cardlist-grid ${className}`}
        style={{
          gridTemplateColumns: gridColumns === 'auto' 
            ? 'repeat(auto-fit, minmax(220px, 1fr))'
            : gridColumns
        }}
      >
        {visibleCards && visibleCards.map((card, index) => (
          <div 
            key={card.id} 
            className="cardlist-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card
              card={card}
              isFlipped={flipped}   
              onClick={onCardClick}
              className="fade-in"
            />
          </div>
        ))}
      </div>

      {/* Footer informativo*/}
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
