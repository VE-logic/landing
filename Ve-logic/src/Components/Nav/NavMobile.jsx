import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import "./NavMobile.css";

const NavMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú principal
    const [visibleIndex, setVisibleIndex] = useState(null); // Índice del submenú visible

    const handleSubmenuToggle = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index); // Abre o cierra el submenú
    };

    return (
        <nav className="nav-mobile">
            <button
                className="menu-hamburguesa"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>
            <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                {menuItems.map((menu, index) => (
                    <li key={index}>
                        {menu.submenu ? (
                            <>
                                <Link
                                    to="#"
                                    className="submenu-link"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevenir la navegación
                                        handleSubmenuToggle(index);
                                    }}
                                >
                                    {menu.title}
                                </Link>
                                <ul
                                    className={`submenu ${
                                        visibleIndex === index ? "visible" : ""
                                    }`}
                                >
                                    {menu.submenu.map((submenu, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to={submenu.path}>{submenu.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <Link to={menu.path}>{menu.title}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMobile;
