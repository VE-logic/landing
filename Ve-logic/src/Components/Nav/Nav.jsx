import { menuItems } from "./menuItems";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

const Nav = () => {
    const [visibleIndex, setVisibleIndex] = useState(null); // Índice del submenú visible
    const navigate = useNavigate();
    

    const handleMouseEnter = (index) => {
        setVisibleIndex(index);
    };

    const handleMouseLeave = () => {
        setVisibleIndex(null);
    };

    const handleServicioClick = (index, subIndex) => {
        const servicio = menuItems[index].submenu[subIndex];
        navigate(`/servicios?servicio=${servicio.path}`);
        setVisibleIndex(null);
        console.log("servicio.path", servicio.path);
    }

    return (
        <nav className="nav">
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    if (menu.submenu) {
                        return (
                            <li
                                key={index}
                                className="desplegable"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="navegacion">{menu.title}</span>
                                <ul
                                    className={`menuDesplegable ${visibleIndex === index ? "visible" : ""
                                        }`}
                                >
                                    {menu.submenu.map((submenu, subIndex) => (
                                        <li key={subIndex}
                                        onClick={() => handleServicioClick(index, subIndex)}
                                        >
                                            <Link className="navegacion" to={submenu.path}>{submenu.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <Link to={menu.path}>{menu.title}</Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </nav>
    );
};

export default Nav;
