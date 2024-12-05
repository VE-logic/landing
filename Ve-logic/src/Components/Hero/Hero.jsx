import './Hero.css'

export default function Hero() {
    return (
    <section className='hero'>
        <div className='hero-content'>
            <h1 className='hero-title'>El Partner Tech para tu empresa</h1> 
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



