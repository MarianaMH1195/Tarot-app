import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/CardList.jsx';
import { getAllCards } from '../services/services.js';
import '../styles/Home.css';

/* Muestra todas las cartas del tarot boca abajo y permite navegación a otras funcionalidades*/

  const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*Efecto para cargar todas las cartas al montar el componente*/
  useEffect(() => {
    const loadCards = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🏠 Cargando vista principal...');
        const fetchedCards = await getAllCards();
        
        setCards(fetchedCards);
        console.log(`✅ ${fetchedCards.length} cartas cargadas en Home`);
        
      } catch (err) {
        console.error('❌ Error en Home:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section - Introducción mística */}
      <div className="home-hero">
        <div className="mystic-container">
          <h2 className="hero-title">Bienvenido al Reino de los Arcanos</h2>
          <p className="hero-description">
            Explora los 22 Arcanos Mayores del Tarot y descubre los secretos que conectan 
            cada carta con las diosas contemporáneas. Cada arcano encierra sabiduría ancestral 
            y guía espiritual para iluminar tu camino.
          </p>
          
          {/* Botones de navegación principales */}
          <div className="hero-actions">
            <Link to="/lectura" className="mystic-button primary">
            Iniciar Lectura
            </Link>
            <button 
              className="mystic-button secondary"
              onClick={() => window.scrollTo({
                top: document.querySelector('.cardlist-container')?.offsetTop - 100,
                behavior: 'smooth'
              })}
            >
            Explorar Cartas
            </button>
          </div>
        </div>
      </div>

      {/* Estadísticas místicas */}
      {!loading && cards.length > 0 && (
        <div className="home-stats">
          <div className="mystic-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">🎴</div>
                <div className="stat-number">{cards.length}</div>
                <div className="stat-label">Arcanos Mayores</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👑</div>
                <div className="stat-number">
                  {cards.filter(card => card.goddessName).length}
                </div>
                <div className="stat-label">Diosas Asociadas</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">✨</div>
                <div className="stat-number">∞</div>
                <div className="stat-label">Posibilidades</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lista principal de cartas */}
      <div className="home-cards">
        <CardList
          cards={cards}
          loading={loading}
          error={error}
          showFlipped={false}
          emptyMessage="Los arcanos están meditando en el silencio cósmico..."
        />
      </div>

      {/* Información adicional */}
      {!loading && cards.length > 0 && (
        <div className="home-info">
          <div className="mystic-container">
            <h3 className="info-title">¿Cómo usar el Tarot Místico?</h3>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🔍</div>
                <h4>Explora</h4>
                <p>
                  Haz clic en cualquier carta para revelar su significado, 
                  imagen y la diosa contemporánea asociada.
                </p>
              </div>
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h4>Consulta</h4>
                <p>
                  Usa la función de lectura para obtener una tirada de 
                  3 cartas: Pasado, Presente y Futuro.
                </p>
              </div>
              <div className="info-card">
                <div className="info-icon">🌟</div>
                <h4>Reflexiona</h4>
                <p>
                  Medita sobre los mensajes de las cartas y su conexión 
                  con las energías femeninas divinas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

