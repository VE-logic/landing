import Nav from '../Nav/Nav';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ onServicioSeleccionado }) => {
  return (
    <header className="header">
      <Nav onServicioSeleccionado={onServicioSeleccionado} />
    </header>
  );
};

Header.propTypes = {
    onServicioSeleccionado: PropTypes.func.isRequired,
};

export default Header;