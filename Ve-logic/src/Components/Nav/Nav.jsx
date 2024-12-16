import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return ( 
    <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link>Servicios</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link>Contacto</Link>
    </nav>
    );
};
