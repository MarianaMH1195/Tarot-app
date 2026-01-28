import { useState, useEffect } from 'react';
import anime from 'animejs';
import Card from './Card.jsx';
import Modal from './Modal.jsx';
import { getRandomCards, getAllCards } from '../services/services.js';
import '../styles/TarotReading.css';

const TarotReading = (props) => {
  const [cards, setCards] = useState([]);
  // Estado inicial con 3 espacios vacíos
  const [selectedCards, setSelectedCards] = useState([null, null, null]);
  const [readingStep, setReadingStep] = useState('preparation');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [revealedPositions, setRevealedPositions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMeaning, setModalMeaning] = useState('');

  const positions = [
    { key: 'pasado', name: 'Pasado', description: 'Influencias y experiencias que te han moldeado' },
    { key: 'presente', name: 'Presente', description: 'Tu situación actual y energías predominantes' },
    { key: 'futuro', name: 'Futuro', description: 'Potencialidades y caminos que se abren ante ti' }
  ];

  /* Mezcla las cartas disponibles para dar aleatoriedad usando anime.js v3 */
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleDeck = () => {
    if (isShuffling) return;
    setIsShuffling(true);

    const targets = document.querySelectorAll('.selectable-card');

    // Configuración exacta pedida por el usuario
    anime({
      // Selector de elementos a animar
      targets: targets, // Usamos la referencia DOM directa para mayor seguridad

      // Movimiento aleatorio en X e Y
      translateX: () => anime.random(-300, 300),
      translateY: () => anime.random(-150, 150),

      // Rotación aleatoria
      rotate: () => anime.random(-360, 360),

      // Escala (primero se reduce, luego vuelve a tamaño normal)
      scale: [
        { value: 0.5, duration: 200 },
        { value: 1, duration: 400 }
      ],

      // Opacidad (fade out y fade in)
      opacity: [
        { value: 0, duration: 200 },
        { value: 1, duration: 400 }
      ],

      // Delay escalonado (cada carta inicia con diferencia)
      delay: anime.stagger(10), // Ajustado a 10ms porque son 78 cartas y 100ms sería eterno (7.8 segundos solo de delay)

      // Duración total de la animación
      duration: 1000,

      // Función de aceleración (easing)
      easing: 'easeInOutQuad',

      // Al completar, regresa las cartas a su posición original
      complete: () => {
        anime({
          targets: targets,
          translateX: 0,
          translateY: 0,
          rotate: 0,
          // delay: anime.stagger(100, { from: 'center' }), // Comentado por excesiva duración en mazo grande
          duration: 800,
          easing: 'easeOutElastic(1, .6)',
          complete: () => {
            // Reordenar estado de cartas al final
            setCards(prevCards => {
              const currentCards = [...prevCards];
              for (let i = currentCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
              }
              return currentCards;
            });
            setIsShuffling(false);
          }
        });
      }
    });

  };

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        setLoading(true);
        const all = await getAllCards();
        // Mezclar inicialmente
        const shuffled = [...all].sort(() => Math.random() - 0.5);
        setCards(shuffled);
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
    // Reiniciar con 3 espacios vacíos explícitos
    setSelectedCards([null, null, null]);
    setRevealedPositions([]);
    setReadingStep('selection');
  };

  const selectCardForPosition = (card, positionIndex) => {
    if (selectedCards[positionIndex]) return;

    // 1. Añadir a seleccionadas
    const newSelectedCards = [...selectedCards];
    newSelectedCards[positionIndex] = card;
    setSelectedCards(newSelectedCards);

    // 2. Dejar el hueco en el mazo (reemplazar por null)
    setCards(prev => prev.map(c => (c && c.id === card.id) ? null : c));

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
    setSelectedCards([null, null, null]);
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
              {/* Icon removed */}
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
          {loading ? 'Invocando las cartas...' : 'Comenzar Lectura'}
        </button>
      </div>
    </div>
  );

  const renderSelection = () => (
    <div className="reading-selection">
      <h2 className="selection-title">Selecciona las Cartas para tu Lectura</h2>
      <p className="selection-instructions">
        Concéntrate en tu pregunta, baraja el mazo y selecciona 3 cartas intuitivamente.
      </p>



      <div className="reading-positions">
        {positions.map((position, index) => (
          <div key={position.key} className={`reading-position ${selectedCards[index] ? 'filled' : 'empty'}`}>
            <div className="position-header">
              {/* Icon removed */}
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
                  {/* Icon removed */}
                  <p>Selecciona una carta</p>
                </div>
              )}
            </div>
            <p className="position-description">{position.description}</p>
          </div>
        ))}
      </div>

      {cards.length > 0 && (
        <div className="available-cards">
          <h3>Mazo de Tarot</h3>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <button
              className="mystic-button primary"
              onClick={shuffleDeck}
              disabled={cards.length === 0 || isShuffling}
            >
              {isShuffling ? 'Barajando...' : 'Barajar Mazo'}
            </button>
          </div>
          <div className="cards-grid deck-view">
            {cards.map((card, index) => (
              card ? (
                <div
                  key={card.id}
                  className={`selectable-card ${isShuffling ? 'shuffling' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => {
                    if (isShuffling) return;
                    const emptyIndex = selectedCards.findIndex(c => !c);
                    if (emptyIndex !== -1) selectCardForPosition(card, emptyIndex);
                  }}
                >
                  <Card card={card} isFlipped={false} showDetails={false} />
                </div>
              ) : (
                <div key={`gap-${index}`} className="card-gap"></div>
              )
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
              {/* Icon removed */}
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
                {/* Icon removed */}
                <strong>{position.name}</strong>
              </div>
              <div className="summary-card-info">
                <h4>{selectedCards[index]?.arcaneName}</h4>
                <p className="summary-description">
                  {selectedCards[index]?.arcaneDescription}
                </p>
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
