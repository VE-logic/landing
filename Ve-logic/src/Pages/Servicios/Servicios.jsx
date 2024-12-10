import ServicioIndividual from './../../Components/ServicioIndividual/ServicioIndividual';
import './Servicios.css'
import imagen from '../../assets/imagenPrueba.png'


const Servicios =() => {
  const servicio =[
    {
      id:1,
      titulo: 'Diseño Web',
      subtitulo: 'Diseño',
      descripcion: 'Desarrollamos sitios web profesionales y e-commerce, con diseño responsive y optimización para móviles.',
      imagen: imagen,
    },
    {
      id:2,
      titulo: 'Diseño UI/UX',
      subtitulo: 'Diseño',
      descripcion: 'Diseñamos interfaces de usuario (UI/UX) para aplicaciones móviles y web, siguiendo los estándares de la industria.',
      imagen: 'fas fa-desktop',
    },
    {
      id:3,
      titulo: 'Marketing Digital',
      subtitulo: 'Diseño',
      descripcion: 'Implementamos campañas de marketing digital, enfocadas en redes sociales, email marketing y SEO.',
      imagen: 'fab fa-google',
    },

  ];
  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicio.map(servicio => (
          <ServicioIndividual 
          key={servicio.id} 
          titulo={servicio.titulo}
          subtitulo={servicio.subtitulo}
          descripcion={servicio.descripcion}
          imagen={servicio.imagen}/>
        ))}
      </div>
    </section>
  );
};

export default Servicios;