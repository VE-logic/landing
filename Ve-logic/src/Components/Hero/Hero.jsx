import './Hero.css'
import AnimWord from './AnimWord'

export default function Hero() {
    const wordsTitle = [
        'Empresa',
        'Emprendimiento',
        'Proyecto'
    ];

    const words = [
        'desarrollo web',
        'diseño UI/UX',
        'desarrollo de Software',
        'marketing digital']

    return (
    <section className='hero'>
        <div className='hero-content'>
            <h1 className='hero-title'>Somos el socio para tu <AnimWord words={wordsTitle} speed= {110} pause={900}/></h1> 
            {/*animacion para title */}
            <p className='hero-subtitle'>
                Encuentra la solución perfecta con nuestros servicios de <AnimWord words={words} speed= {110} pause={900}/>
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



