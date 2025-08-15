import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Detail from '../pages/Detail.jsx';
import Reading from '../pages/Reading.jsx';

/**
 * =============================================
 * ENRUTADOR PRINCIPAL - TAROT MÍSTICO
 * =============================================
 * Configura todas las rutas de la aplicación usando React Router v6
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // Página principal - Vista de todas las cartas
        index: true,
        element: <Home />,
      },
      {
        // Página de detalle de una carta específica
        path: '/carta/:id',
        element: <Detail />,
      },
      {
        // Página de lectura interactiva (Pasado, Presente, Futuro)
        path: '/lectura',
        element: <Reading />,
      },
    ],
    // Manejo de errores para rutas no encontradas
    errorElement: (
      <div className="error-page">
        <div className="mystic-container">
          <h1>🔮 Error Místico</h1>
          <p>La página que buscas se ha perdido en las brumas del tiempo...</p>
          <a href="/" className="mystic-button">Volver al inicio</a>
        </div>
      </div>
    ),
  },
]);

export default router;
