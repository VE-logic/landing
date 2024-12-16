import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return ( 
    <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link to="">Servicios</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/contacto">Contacto</Link>
    </nav>
    );
};
