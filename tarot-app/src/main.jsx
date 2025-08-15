import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/enrutador.jsx'
import './styles/globals.css'

/**
 * Punto de entrada principal de la aplicación
 * Configura el router y renderiza la aplicación en el DOM
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


