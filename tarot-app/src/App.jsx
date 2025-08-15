import { Link, Outlet, NavLink } from 'react-router-dom'
import './styles/globals.css'

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="brand">Tarot de las Diosas</Link>
        <nav className="main-nav">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/reading">Lectura</NavLink>
        </nav>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Tarot de las Diosas · Hecho con 💜</small>
      </footer>
    </div>
  )
}

