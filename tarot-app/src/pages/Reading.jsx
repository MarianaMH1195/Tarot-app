import { Link } from 'react-router-dom';
import TarotReading from '../components/TarotReading.jsx';
import '../styles/Reading.css';

/*Página principal para la funcionalidad de lectura de tarot (Pasado, Presente, Futuro)*/

const Reading = () => {
  return (
    <div className="reading-page">
      
      <div className="reading-header">
        <div className="header-navigation">
          <Link to="/" className="nav-link">
            ← Explorar Cartas
          </Link>
          <div className="header-center">
            <h1 className="page-title">Lectura del Tarot</h1>
            <p className="page-subtitle">Consulta los arcanos sobre tu pasado, presente y futuro</p>
          </div>
          <div className="header-spacer"></div>
        </div>
      </div>

      {/* Componente principal de lectura */}
      <div className="reading-content">
        <TarotReading />
      </div>

      {/* Footer informativo */}
      <div className="reading-footer">
        <div className="footer-content">
          <h3> Sobre la Lectura de Tarot</h3>
          <div className="footer-info">
            <div className="info-item">
              <h4> Propósito</h4>
              <p>
                Esta lectura está diseñada para ofrecerte perspectivas y reflexiones 
                sobre diferentes aspectos de tu vida, conectando con la sabiduría 
                ancestral de los arcanos.
              </p>
            </div>
            <div className="info-item">
              <h4> Diosas Contemporáneas</h4>
              <p>
                Cada arcano está asociado con una diosa contemporánea, representando 
                diferentes arquetipos y energías femeninas que pueden inspirar tu camino.
              </p>
            </div>
            <div className="info-item">
              <h4> Interpretación</h4>
              <p>
                Recuerda que el tarot es una herramienta de autoconocimiento. 
                Las cartas reflejan posibilidades, no destinos fijos. 
                Tu libre albedrío siempre prevalece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
