import CardList from '../components/CardList'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Tarot de las Diosas</h1>
        <p>Conecta con la sabiduría de las mujeres en ciencia y tecnología a través de los arcanos.</p>
        <Link to="/reading" className="mystic-button primary">✨ Ir a la Lectura</Link>
      </div>

      <CardList />
    </section>
  )
}

