import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import CardDetailPage from '../pages/CardDetailPage';
import ReadingPage from '../pages/ReadingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'card/:id',
        element: <CardDetailPage />,
      },
      {
        path: 'lectura',
        element: <ReadingPage />,
      },
      {
        path: '*',
        element: <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>404 - Destino no encontrado en las estrellas</div>
      }
    ],
  },
]);

export default router;
