import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Reading from '../pages/Reading'
import Detail from '../pages/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'reading', element: <Reading /> },
      { path: 'card/:id', element: <Detail /> },
      { path: '*', element: <Home /> }
    ]
  }
])

export default router
