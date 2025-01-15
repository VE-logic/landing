// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { menuItems } from './menuItems';
import { Link, useNavigate } from 'react-router-dom';


function NavMobile() {
    const [showOffcanvas, setShowOffcanvas] = useState(false); // Estado para controlar el offcanvas
    const navigate = useNavigate();

    const handleCloseOffcanvas = () => setShowOffcanvas(false); // Cierra el menú
    const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas); // Alterna el menú

    const handleServicioClick = (path) => {
        navigate(`/servicios?servicio=${path}`);
        handleCloseOffcanvas(); // Cierra el menú después de redirigir
    };
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-transparent m-3">
                    <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas} /> 
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            show={showOffcanvas}
                            onHide={handleCloseOffcanvas}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {menuItems.map((menu, index) => (
                                        menu.submenu ? (
                                            <NavDropdown
                                                key={index}
                                                title={menu.title}
                                                id={`offcanvasNavbarDropdown-${index}`}
                                            >
                                                {menu.submenu.map((submenu, subIndex) => (
                                                    <NavDropdown.Item
                                                        key={subIndex}
                                                        onClick={() => handleServicioClick(submenu.path)}
                                                    >
                                                        {submenu.title}
                                                    </NavDropdown.Item>
                                                ))}
                                            </NavDropdown>
                                        ) : (
                                            <Nav.Link
                                                    key={index}
                                                    as={Link}
                                                    to={menu.path}
                                                    onClick={handleCloseOffcanvas}
                                            >
                                                {menu.title}
                                            </Nav.Link>
                                        )
                                    ))}
                                </Nav>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavMobile;