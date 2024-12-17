import ProyectoIndividual from '../../Components/Proyectos/ProyectoIndividual/ProyectoIndividual';
import './Proyectos.css'
import imagen from '../../assets/imagenPrueba.png'

const Proyectos =() => {
  const proyectos =[
    {
      nombre: 'Proyecto 1',
      imagen: imagen,
      descripcion: 'Descripcion del proyecto 1',
      url: '#'
    },
    {
      nombre: 'Proyecto 1',
      imagen: imagen,
      descripcion: 'Descripcion del proyecto 1',
      url: '#'
    },
    {
      nombre: 'Proyecto 1',
      imagen: imagen,
      descripcion: 'Descripcion del proyecto 1',
      url: '#'
    }
  ];

  return(
    <section id="proyectos" className="proyectos">
      <h2>Nuestros Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto) => (
          <ProyectoIndividual key={proyecto.nombre} {...proyecto} />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
