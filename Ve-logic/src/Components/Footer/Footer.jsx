import {Link} from 'react-router-dom';
import './Footer.css';
import imagen from '../../assets/imagenPrueba.png'

const Footer = () => {
  return (
    <section className="footer">
      
      <div className='footer-container'>
        <div className='footer-logo'>
          <img src={imagen} alt="Logo" width="50px" />
          <p>Diseño web y desarrollo de software</p>
        </div>
        
        <div className="container-columns">

          <div className="footer-servicios">
            <h3>Servicios</h3>
            <div>
              <Link to='/servicios?servicio=/disenioWeb'>Diseño web</Link>
              <Link to='/servicios?servicio=/desarrolloSoftware'>Desarrollo de software</Link>
              <Link to='/servicios?servicio=/mktDigital'>Marketing digital</Link>
            </div>
          </div>
          <div className='footer-Proyectos'>
            <h3>Empresa</h3>
            <Link to='/nosotros'>Nosotras</Link>
            <Link to='/proyectos'>Proyectos</Link>
            <Link to='/contacto'>Contacto</Link>
          </div>
      
          <div className='footer-redes'>
            <h3>Redes</h3>
            <div>Redes</div>
            <div>Redes</div>
            <div>Redes</div>
          </div>
        </div>
      </div>
      
      <p className='footer-copyright'>Todos los derechos reservados &copy; 2025</p>
    </section>
  )
}

export default Footer