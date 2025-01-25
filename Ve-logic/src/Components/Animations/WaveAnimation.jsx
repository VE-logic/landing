// src/Components/WaveAnimation/WaveAnimation.jsx
import './WaveAnimation.css';

const WaveAnimation = () => {
    return (
        <div className="position-absolute w-100 z-index-1 bottom-">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 40"
                preserveAspectRatio="none"
                shapeRendering="auto"
                className="waves"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="moving-waves">
                    <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(106, 60, 60, 0.4)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(251,251,251,0.35)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(179, 61, 61, 0.25)" />
                    <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(48, 44, 44, 0.2)" />
                    <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(251,251,251,0.15)" />
                    <use xlinkHref="#gentle-wave" x="48" y="16" fill="#DFC6F8" />
                </g>
            </svg>
        </div>
    );
};

export default WaveAnimation;