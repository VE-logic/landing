import PropTypes from 'prop-types'; 
const Servicios = ({ servicioSeleccionado }) => {
  const renderComponente = () => {
    switch (servicioSeleccionado) {
      case 'diseñoWeb':
        return <h2>Diseño Web - Detalles del servicio</h2>;
      case 'desarrolloWeb':
        return <h2>Desarrollo Web - Detalles del servicio</h2>;
      case 'marketingDigital':
        return <h2>Marketing Digital - Detalles del servicio</h2>;
      default:
        return <h2>Selecciona un servicio para ver más detalles</h2>;
    }
  };

  return (
    <div className="servicios-contenido">
      {renderComponente()}
    </div>
  );
};

Servicios.propTypes = {
  servicioSeleccionado: PropTypes.string.isRequired,
};

export default Servicios;