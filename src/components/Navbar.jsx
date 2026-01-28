import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Portal del Destino
                </Link>
                <ul className="navbar-menu">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/lectura"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Lectura de Cartas
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
