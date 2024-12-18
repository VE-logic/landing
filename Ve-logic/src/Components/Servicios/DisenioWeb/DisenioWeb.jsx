import HeroServicios from '../HeroServicios';
import imagen from '../../../assets/imagenPrueba.png'

const DisenioWeb = () => {
  return (
    <div className='DiseñoWeb-Container'>
        <HeroServicios
        titulo='Diseño Web'
        descripcion='Desarrollamos sitios web profesionales y adaptados a tus necesidades.'
        imagen={imagen}
        />
        
        
    </div>
  )
}

export default DisenioWeb