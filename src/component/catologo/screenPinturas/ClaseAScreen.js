import React from 'react'
import imgA from '../../../image/vk4.png'
 
export const ClaseAScreen = () => { 
    return (
        <div className="containerClass">
            <div className="row top" >
                <div className="col-1 container-text">
                    <h1>Pintura Clase A </h1>
                    <p>
                        La Linea Optikolor es la clase “A” Premium de caucho emulsionada, de Pinturas VKOLOR, formulada con materias primas de la más alta
                        calidad para brindar un máximo cubrimiento y durabilidad.	
                    </p>
    
                    <h2>Componentes principales</h2>
                    <p>
                        Pintura formulada a base de dispersión Acrovinílica, espesada con ésteres de celulosa, utilizando como carga principal Carbonato de
                        Calcio y Bioxido de Titanio y estabilizantes de reología. 
                    </p>
    
                    <h2>Rendimiento</h2>
                    <p>
                        Teórico 50 m2 por galón por mano, dependiendo de la técnica de aplicación y la porosidad del sustrato a pintar.
                    </p>    

                    <h2>Acabado</h2>
                    <p>
                        Mate
                    </p>       

                    <h2>Secamiento al tacto</h2>
                    <p>
                        30 minutos.
                    </p>    

                    <h2>Secado para repintado</h2>
                    <p>
                        4 horas.
                    </p>      
    
                    <h2>Preparacion de la superficie</h2>
                    <p>
                        Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal adherida.
                        Se recomienda en superficies de concreto que las mismas estén niveladas y lisas y sin grietas.
                    </p>

                    <h2>Presentacion</h2>
                    <p>
                       Galón <br/>
                       Cuñete de 4 Galones<br/>
                       Cuñete de 5 Galones
                    </p>

    
                    
    
                    
                </div>

                <div className="col-1 container-text">
                  <img src={imgA} alt="" className="imgPinturascreen " />

                  <h2>Aplicacion</h2>
                    <p>
                    Brocha, rodillo o pistola; agítese antes de aplicar. Es importante para su aplicación utilizar equipos básicos de protección como guantes,
                     lentes, etc.
                    </p>

                    
                    <h2>Precauciones</h2>
                    <p>
                    Manténgase este producto fuera del alcance de los niños, no ingiera, no induzca el vómito, use en áreas ventiladas, en caso de contacto
                     con la piel u ojos, lave con abundante agua fresca y consulte al médico.
                    </p>
                </div>
            </div>
        </div>
        
    )
}
