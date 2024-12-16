import './ProyectoIndividual.css'
import { PropTypes } from 'prop-types';

const ProyectoIndividual = ({titulo, descripcion, imagen, link}) => {
    return(
        <div className="proyecto-card">
            <img className="proyecto-imagen" src={imagen} alt={titulo}></img>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <a className="link" href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
        </div>
    )

}
ProyectoIndividual.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default ProyectoIndividual