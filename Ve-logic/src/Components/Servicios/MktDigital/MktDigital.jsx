import HeroServicios from '../HeroServicios';
import imagen from '../../../assets/imagenPrueba.png'

const MktDigital = () => {
    return (
        <div className='Mkt-Container'>
            <HeroServicios
                titulo='Marketing Digital'
                descripcion='Desarrollamos sitios web profesionales y adaptados a tus necesidades.'
                imagen={imagen}
            />


        </div>
    )
}

export default MktDigital