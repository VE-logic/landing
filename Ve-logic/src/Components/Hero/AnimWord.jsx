import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './AnimWord.css';

const AnimWord = ({ words, speed = 150, pause = 1000 }) => {
    const [palabraActualIndex, setPalabraActualIndex] = useState(0); // Índice de la palabra actual
    const [textVisible, setTextVisible] = useState(''); // Texto visible en pantalla
    const [isBorrando, setIsBorrando] = useState(false); // Indica si está borrando

    useEffect(() => {
        const handleTyping = () => {
            const palabraActual = words[palabraActualIndex]; // Palabra actual
            const isComplete = textVisible === palabraActual; // Verifica si la palabra está completamente escrita

            if (isBorrando && textVisible === '') {
                // Cambiar a la siguiente palabra
                setIsBorrando(false);
                setPalabraActualIndex((prevIndex) => (prevIndex + 1) % words.length);
            } else if (!isBorrando && isComplete) {
                // Pausa antes de borrar
                setTimeout(() => setIsBorrando(true), pause);
            } else {
                // Actualizar texto 
                const nextText = isBorrando
                    ? palabraActual.slice(0, textVisible.length - 1) // Borrar una letra
                    : palabraActual.slice(0, textVisible.length + 1); // Añadir una letra
                setTextVisible(nextText);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isBorrando ? speed / 2 : speed);
        return () => clearTimeout(typingTimeout); // Limpia el timeout
    }, [textVisible, isBorrando, words, palabraActualIndex, speed, pause]);

    if (!words || words.length === 0) {
        return <span>No hay palabras disponibles.</span>;
    }

    return (
        <span className="anim-word">
            {textVisible}
            <span className="cursor">|</span>
        </span>
    );
};

AnimWord.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired, // Lista de palabras 
    speed: PropTypes.number, // Velocidad de escritura
    pause: PropTypes.number, // Pausa entre palabras
};

AnimWord.defaultProps = {
    speed: 150, // Velocidad por defecto
    pause: 1000, // Pausa por defecto
};

export default AnimWord;