import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Modal from './Modal.jsx';
import { getRandomCards, getAllCards } from '../services/services.js';
import '../styles/TarotReading.css';

const TarotReading = (props) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [readingStep, setReadingStep] = useState('preparation');
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [revealedPositions, setRevealedPositions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMeaning, setModalMeaning] = useState('');

  const positions = [
    { key: 'pasado', name: 'Pasado', icon: '🕰️', description: 'Influencias y experiencias que te han moldeado' },
    { key: 'presente', name: 'Presente', icon: '🌟', description: 'Tu situación actual y energías predominantes' },
    { key: 'futuro', name: 'Futuro', icon: '🔮', description: 'Potencialidades y caminos que se abren ante ti' }
  ];

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        setLoading(true);
        const all = await getAllCards();
        setCards(all);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar las cartas. Intenta recargar la página.');
      } finally {
        setLoading(false);
      }
    };
    fetchAllCards();
  }, []);

  const startReading = async () => {
    
    if (cards.length === 0) {
      setError('Las cartas no están disponibles. Por favor, intenta de nuevo más tarde.');
      return;
    }
    setLoading(false);
    setError(null);
    setSelectedCards([]);
    setRevealedPositions([]);
    setReadingStep('selection');
  };

  const chooseRandomThree = async () => {
    try {
      if (cards.length < 3) {
        throw new Error('No hay suficientes cartas para una lectura.');
      }
      const randomSelection = await getRandomCards(3);
      setSelectedCards(randomSelection);
      setReadingStep('revelation');
    } catch (err) {
      setError(err.message || 'No se pudieron seleccionar las cartas.');
    }
  };

  const selectCardForPosition = (card, positionIndex) => {
    if (selectedCards[positionIndex]) return;
    const newSelectedCards = [...selectedCards];
    newSelectedCards[positionIndex] = card;
    setSelectedCards(newSelectedCards);
    setCards(prev => prev.filter(c => c.id !== card.id));

    if (newSelectedCards.filter(Boolean).length === 3) {
      setReadingStep('revelation');
    }
  };

  const revealCard = (positionIndex) => {
    if (!revealedPositions.includes(positionIndex)) {
      setRevealedPositions(prev => [...prev, positionIndex]);
    }
  };

  const handleCardClick = (card) => {
    setModalMeaning(card);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMeaning('');
  };

  const resetReading = () => {
    setSelectedCards([]);
    setRevealedPositions([]);
    setReadingStep('preparation');

    const fetchAllCards = async () => {
      try {
        const all = await getAllCards();
        setCards(all);
        setError(null);
      } catch (err) {
        setError('No se pudieron cargar las cartas para una nueva lectura.');
      }
    };
    fetchAllCards();
    handleCloseModal();
  };

  const renderPreparation = () => (
    <div className="reading-preparation">
      <div className="preparation-content">
        <h2 className="preparation-title">Preparación para la Lectura</h2>
        <div className="preparation-description">
          <p>
            Estás a punto de realizar una lectura de <strong>Pasado, Presente y Futuro</strong>.
            Esta antigua práctica te revelará las influencias que han moldeado tu camino,
            tu situación actual y las potencialidades que aguardan.
          </p>
          <p>
            Tómate un momento para centrar tu energía y formular mentalmente 
            una pregunta o área de tu vida sobre la que deseas obtener guía.
          </p>
        </div>
        <div className="positions-preview">
          {positions.map((position) => (
            <div key={position.key} className="position-preview">
              <div className="position-icon">{position.icon}</div>
              <h4>{position.name}</h4>
              <p>{position.description}</p>
            </div>
          ))}
        </div>
        <button 
          className="mystic-button primary large"
          onClick={startReading}
          disabled={loading || cards.length === 0}
        >
          {loading ? '🔮 Invocando las cartas...' : 'Comenzar Lectura'}
        </button>
      </div>
    </div>
  );

  const renderSelection = () => (
    <div className="reading-selection">
      <h2 className="selection-title">Selecciona las Cartas para tu Lectura</h2>
      <p className="selection-instructions">
        Haz clic en una carta y luego en la posición donde deseas colocarla, o usa el botón para seleccionar 3 aleatorias.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button 
          className="mystic-button primary"
          onClick={chooseRandomThree}
          disabled={cards.length < 3}
        >
           Elegir 3 Aleatorias
        </button>
      </div>

      <div className="reading-positions">
        {positions.map((position, index) => (
          <div key={position.key} className={`reading-position ${selectedCards[index] ? 'filled' : 'empty'}`}>
            <div className="position-header">
              <span className="position-icon">{position.icon}</span>
              <h3>{position.name}</h3>
            </div>
            <div className="position-card-slot">
              {selectedCards[index] ? (
<Card
  card={selectedCards[index]}
  isFlipped={revealedPositions.includes(index)}
  onClick={(card) => {
    revealCard(index);
 
  }}
  showDetails={true}
/>
              
              ) : (
                <div className="empty-slot">
                  <span className="slot-icon">{position.icon}</span>
                  
                </div>
              )}
            </div>
            <p className="position-description">{position.description}</p>
          </div>
        ))}
      </div>

      {cards.length > 0 && (
        <div className="available-cards">
          <h3>Cartas Disponibles</h3>
          <div className="cards-grid">
            {cards.map(card => (
              <div key={card.id} className="selectable-card" onClick={() => {
                const emptyIndex = selectedCards.findIndex(c => !c);
                if (emptyIndex !== -1) selectCardForPosition(card, emptyIndex);
              }}>
                <Card card={card} isFlipped={false} showDetails={false} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderRevelation = () => (
    <div className="reading-revelation">
      <h2 className="revelation-title">Revelación de tu Lectura</h2>
      <p className="revelation-instructions">
        Haz clic en cada carta para revelar su mensaje.
      </p>
      <div className="reading-positions revelation-mode">
        {positions.map((position, index) => (
          <div key={position.key} className="reading-position">
            <div className="position-header">
              <span className="position-icon">{position.icon}</span>
              <h3>{position.name}</h3>
            </div>
            <div className="position-card-slot">
            <Card
              card={selectedCards[index]}
              isFlipped={revealedPositions.includes(index)}
              onClick={(card) => {
                if (!revealedPositions.includes(index)) {
                  
                  revealCard(index);
                } else {
                 
                  handleCardClick(card);
                }
              }}
              showDetails={true}
            />

            </div>
            {revealedPositions.includes(index) && (
              <div className="card-interpretation">
                <h4>{selectedCards[index]?.arcaneName}</h4>
                <p className="interpretation-text">En la posición del {position.name.toLowerCase()}, este arcano sugiere...</p>
                {selectedCards[index]?.goddessName && (
                  <p className="goddess-connection">
                    <strong>Diosa asociada:</strong> {selectedCards[index].goddessName}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {revealedPositions.length === 3 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button 
            className="mystic-button primary large"
            onClick={() => setReadingStep('complete')}
          >
             Ver Resumen de Lectura
          </button>
        </div>
      )}
    </div>
  );

  const renderComplete = () => (
    <div className="reading-complete">
      <h2 className="complete-title">Tu Lectura está Completa</h2>
      <div className="reading-summary">
        <div className="summary-header">
          <h3>Resumen de tu Lectura</h3>
          <p>Estas son las cartas que el universo ha elegido para ti:</p>
        </div>
        <div className="summary-cards">
          {positions.map((position, index) => (
            <div key={position.key} className="summary-card">
              <div className="summary-position">
                <span className="position-icon">{position.icon}</span>
                <strong>{position.name}</strong>
              </div>
              <div className="summary-card-info">
                <h4>{selectedCards[index]?.arcaneName}</h4>
                {selectedCards[index]?.goddessName && (
                  <p className="summary-goddess">Diosa: {selectedCards[index].goddessName}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="complete-actions">
        <button className="mystic-button primary" onClick={resetReading}>
           Nueva Lectura
        </button>
      </div>
    </div>
  );

  const renderError = () => (
    <div className="reading-error">
      <div className="error-content">
        <div className="error-symbol">⚠️</div>
        <h3>Error en la Consulta Mística</h3>
        <p>{error}</p>
        <button className="mystic-button" onClick={resetReading}>Intentar de Nuevo</button>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="tarot-loading">
        <div className="loading-spinner"></div>
        <p>Cargando sabiduría ancestral...</p>
      </div>
    );
  }

  if (error) {
    return renderError();
  }

  return (
    <div className="tarot-reading">
      {readingStep === 'preparation' && renderPreparation()}
      {readingStep === 'selection' && renderSelection()}
      {readingStep === 'revelation' && renderRevelation()}
      {readingStep === 'complete' && renderComplete()}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        meaning={modalMeaning}
      />
    </div>
  );
};

export default TarotReading;
