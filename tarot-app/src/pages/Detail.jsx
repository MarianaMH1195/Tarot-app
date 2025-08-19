import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCardById } from '../services/services.js';
import '../styles/Detail.css';

/*Muestra información completa de una carta específica,incluyendo arcano y diosa asociada*/

  const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState('arcane'); 
  const [arcaneImageLoaded, setArcaneImageLoaded] = useState(false);
  const [goddessImageLoaded, setGoddessImageLoaded] = useState(false);

  /*Efecto para cargar la carta al montar el componente*/
  useEffect(() => {
    const loadCard = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log(`🔍 Cargando carta con ID: ${id}`);
        const fetchedCard = await getCardById(id);
        
        setCard(fetchedCard);
        console.log(`✅ Carta cargada:`, fetchedCard.arcaneName);
        
      } catch (err) {
        console.error('❌ Error en Detail:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadCard();
    }
  }, [id]);

  /*Maneja el cambio entre imagen del arcano y la diosa*/
  const handleImageSwitch = (imageType) => {
    setActiveImage(imageType);
  };

  /*Maneja errores de carga de imagen*/
  const handleImageError = (event, type) => {
    console.warn(`Error cargando imagen ${type}`);
    if (type === 'arcane') {
      setArcaneImageLoaded(false);
    } else {
      setGoddessImageLoaded(false);
    }
    
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM0IwQTQ1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGRDcwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
  };

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="loading-container">
          <div className="loading-symbol">🔮</div>
          <h2>Revelando los secretos...</h2>
          <p>La carta está materializándose desde las dimensiones místicas</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-error">
        <div className="error-container">
          <div className="error-symbol">⚠️</div>
          <h2>Error Místico</h2>
          <p>{error}</p>
          <div className="error-actions">
            <Link to="/" className="mystic-button">
               Volver al inicio
            </Link>
            <button 
              className="mystic-button"
              onClick={() => window.location.reload()}
            >
               Intentar de nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="detail-error">
        <div className="error-container">
          <div className="error-symbol">🌙</div>
          <h2>Carta no encontrada</h2>
          <p>La carta que buscas se ha perdido en las brumas místicas...</p>
          <Link to="/" className="mystic-button">
             Explorar otras cartas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
     
      <div className="detail-nav">
        <button 
          onClick={() => navigate(-1)} 
          className="mystic-button secondary"
        >
          ← Volver
        </button>
        <div className="nav-center">
          <span className="nav-number">Arcano {card.arcaneNumber}</span>
        </div>
        <Link to="/lectura" className="mystic-button primary">
           Nueva Lectura
        </Link>
      </div>

      {/* Header con título del arcano */}
      <div className="detail-header">
        <h1 className="detail-title">{card.arcaneName}</h1>
        <div className="title-decoration">✨ ⭐ ✨</div>
      </div>

      
      <div className="detail-content">
        
       
        <div className="detail-images">
          
          
          <div className="image-tabs">
            <button
              className={`image-tab ${activeImage === 'arcane' ? 'active' : ''}`}
              onClick={() => handleImageSwitch('arcane')}
            >
              <span className="tab-icon">🎴</span>
              <span>Arcano</span>
            </button>
            <button
              className={`image-tab ${activeImage === 'goddess' ? 'active' : ''}`}
              onClick={() => handleImageSwitch('goddess')}
            >
              <span className="tab-icon">👑</span>
              <span>Diosa</span>
            </button>
          </div>

          {/* Container de imágenes */}
          <div className="image-display">
            
            
            <div className={`image-container ${activeImage === 'arcane' ? 'active' : ''}`}>
              {!arcaneImageLoaded && (
                <div className="image-loader">
                  <div className="loader-symbol">🔮</div>
                  <p>Materializando el arcano...</p>
                </div>
              )}
              
              <img
                src={card.arcaneImage?.imageSrc}
                alt={`Arcano: ${card.arcaneName}`}
                className={`detail-image ${arcaneImageLoaded ? 'loaded' : ''}`}
                onLoad={() => setArcaneImageLoaded(true)}
                onError={(e) => handleImageError(e, 'arcane')}
              />
              
              {/* Créditos de la imagen */}
              {card.arcaneImage && (
                <div className="image-credits">
                  <p>
                    <strong>Autor:</strong> {card.arcaneImage.author || 'Desconocido'}
                  </p>
                  {card.arcaneImage.license && (
                    <p>
                      <strong>Licencia:</strong> {card.arcaneImage.license}
                    </p>
                  )}
                </div>
              )}
            </div>

          
            <div className={`image-container ${activeImage === 'goddess' ? 'active' : ''}`}>
              {!goddessImageLoaded && activeImage === 'goddess' && (
                <div className="image-loader">
                  <div className="loader-symbol">👑</div>
                  <p>Invocando a la diosa...</p>
                </div>
              )}
              
              <img
                src={card.goddessImage?.imageSrc}
                alt={`Diosa: ${card.goddessName}`}
                className={`detail-image ${goddessImageLoaded ? 'loaded' : ''}`}
                onLoad={() => setGoddessImageLoaded(true)}
                onError={(e) => handleImageError(e, 'goddess')}
              />
              
              {/* Créditos de la imagen de la diosa */}
              {card.goddessImage && (
                <div className="image-credits">
                  <p>
                    <strong>Autor:</strong> {card.goddessImage.author || 'Desconocido'}
                  </p>
                  {card.goddessImage.licenseUrl && (
                    <p>
                      <strong>Licencia:</strong>{' '}
                      <a 
                        href={card.goddessImage.licenseUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="license-link"
                      >
                        Ver licencia
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        
        <div className="detail-info">
          
          
          <div className="info-section">
            <h2 className="section-title">
              <span className="section-icon">🎴</span>
              Significado del Arcano
            </h2>
            <div className="section-content">
              <p className="arcane-description">
                {card.arcaneDescription || 'El significado de este arcano permanece oculto en los misterios del cosmos...'}
              </p>
            </div>
          </div>

       
          {card.goddessName && (
            <div className="info-section">
              <h2 className="section-title">
                <span className="section-icon">👑</span>
                {card.goddessName}
              </h2>
              <div className="section-content">
                <p className="goddess-description">
                  {card.goddessDescription || 'Los misterios de esta diosa aguardan ser revelados...'}
                </p>
              </div>
            </div>
          )}

          {/* Acciones */}
          <div className="detail-actions">
            <Link to="/" className="mystic-button">
               Todas las cartas
            </Link>
            <Link to="/lectura" className="mystic-button primary">
               Hacer lectura
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
