import HeroServicios from '../HeroServicios';
import imagen from '../../../assets/imagenPrueba.png'

const DesarrolloSoftware = () => {
    return (
        <div className='Desarrollo-Container'>
            <HeroServicios
                titulo='Desarrollo de Software'
                descripcion='Desarrollamos sitios web profesionales y adaptados a tus necesidades.'
                imagen={imagen}
            />


        </div>
    )
}

export default DesarrolloSoftware