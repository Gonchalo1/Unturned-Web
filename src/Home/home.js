import React, { useState } from 'react';
import '../App.css'; // Asegúrate de que este archivo CSS esté importado
import backgroundImage from '../images/Home.webp';
import useParallax from './animation/screenAnimation'; // Asegúrate de que la ruta sea correcta

function Home() {
    const [isTextVisible, setTextVisible] = useState(false);
    const { handleMouseMove } = useParallax();

    const toggleTextVisibility = () => {
        setTextVisible(!isTextVisible);
    };

    return (
        <div className="principal-content" onMouseMove={handleMouseMove}>
            <div className="image-container">
                <img src={backgroundImage} alt="Home Background" className="background-image" />
                <div className="overlay-content">
                    <div className="texto-container-home">
                        <h1>Online Soon</h1>
                        <h2>Build your <strong>team</strong></h2>
                        <span>More details</span>
                        <h4>
                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                        </h4>
                    </div>
                    <button className="btn btn-primary" onClick={toggleTextVisibility}>
                        {isTextVisible ? "Ocultar detalles" : "Mostrar detalles"}
                    </button>
                    {isTextVisible && (
                        <div className="additional-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum, fermentum eros sit amet, placerat ante. 
                                Suspendisse potenti. Nullam ultrices nunc nec magna placerat, ac porttitor ex facilisis.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
