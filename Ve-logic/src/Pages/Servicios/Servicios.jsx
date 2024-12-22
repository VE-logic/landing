import { useLocation } from 'react-router-dom';
import DisenioWeb from '../../Components/Servicios/DisenioWeb/DisenioWeb';
import DesarrolloWeb from '../../Components/Servicios/DesarrolloSoftware/DesarrolloSoftware';
import MarketingDigital from '../../Components/Servicios/MktDigital/MktDigital';
import './Servicios.css';


// Este componente muestra el detalle de un servicio seleccionado
const Servicios = () => {
  
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const servicioSeleccionado = queryParams.get('servicio');
    

    const renderComponente = () => {

    switch (servicioSeleccionado) {
      case '/disenioWeb':
        return <DisenioWeb />;
          
      case '/desarrolloSoftware':
        return <DesarrolloWeb />;
      case '/mktDigital':
        return <MarketingDigital />;
      
    }
    console.log('servicioSeleccionado', servicioSeleccionado);
  };

  return (
    <div className="servicios-contenido">
      {renderComponente()}
    </div>
  );
};



export default Servicios;