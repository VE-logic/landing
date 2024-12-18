import './HeroServicios.css';
import PropTypes from 'prop-types';



const HeroServicios = ({titulo, imagen, descripcion}) => {
    return (
        <section>
            <div className="hero-servicios">
                <h1>{titulo}</h1>
                <img className='imagenFondo' src={imagen} alt={titulo} />
                <p>{descripcion}</p>
            </div>
        </section>
    )
}

HeroServicios.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}

export default HeroServicios