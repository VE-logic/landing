import PropTypes from 'prop-types';
import './ServicioIndividual.css'



const ServicioIndividual = ({titulo, subtitulo, imagen, descripcion}) => {
    return(
        <div className="servicio-card">
            <img className="servicio-imagen" src={imagen}></img>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <p>{descripcion}</p>
        </div>
    )
}

ServicioIndividual.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}
export default ServicioIndividual;