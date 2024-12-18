import DesarrolloSoftware from '../../Components/Servicios/DesarrolloSoftware/DesarrolloSoftware';
import DiseñoWeb from '../../Components/Servicios/DisenioWeb/DisenioWeb';
import MktDigital from '../../Components/Servicios/MktDigital/MktDigital';

const Servicios =() => {
  
  return (
    <section className="servicios">
      <h2>Página de Servicios</h2>
      <div>
        <DiseñoWeb/>
        <DesarrolloSoftware/>
        <MktDigital/>
      </div>
      
      
    </section>
  );
};

export default Servicios;