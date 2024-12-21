import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({ onServicioSeleccionado }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li
                    className="desplegable"
                    onMouseEnter={() => setMenuVisible(true)}
                    onMouseLeave={() => setMenuVisible(false)}
                >
                    <span>Servicios</span>
                    {menuVisible && (
                        <ul className="menuDesplegable">
                            <li>
                                <Link
                                    to="/servicios"
                                    onClick={() => onServicioSeleccionado('diseñoWeb')}
                                >
                                    Diseño Web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/servicios"
                                    onClick={() => onServicioSeleccionado('desarrolloWeb')}
                                >
                                    Desarrollo Web
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/servicios"
                                    onClick={() => onServicioSeleccionado('marketingDigital')}
                                >
                                    Marketing Digital
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};

Nav.PropTypes = {
    onServicioSeleccionado: PropTypes.func.isRequired,
}

export default Nav;