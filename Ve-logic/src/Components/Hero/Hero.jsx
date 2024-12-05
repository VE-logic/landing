import './Hero.css'
import AnimWord from './AnimWord'

export default function Hero() {
    const words = [
        'Desarrollo web',
        'Diseño UI/UX',
        'Aplicaciones móviles',
        'Marketing digital',
        'Consultoría'
    ];

    return (
    <section className='hero'>
        <div className='hero-content'>
            <h1 className='hero-title'>El Partner Tech para tu <AnimWord words={words} speed= {150} pause={1500}/></h1> 
            {/*animacion para title */}
            <p className='hero-subtitle'>
                Encuentra la solución perfecta para tu negocio con nuestros servicios de desarrollo y diseño web.
            </p>
        </div>
        <div className='hero-buttons'>
            <button className='button'>Hablemos</button>
            <button className='button secondary'>Conoce más</button>
            {/*animacion para button */}
            
            
        </div>
    </section>
    )
}



