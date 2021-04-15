import React from 'react'
import imgA from '../../../image/p4.png'
 
export const ClaseAScreen = () => { 
    return (
        <div className="containerClass">
            <div className="row">
                <div className="col-1 container-text">
                    <h1>Pintura Clase A </h1>
                    <p>
                        La Linea Kolor Satinado es la clase “A” de pintura Satinada, de Pinturas VKOLOR,
                        formulada con materias primas de la más alta calidad para brindar un máximo cubrimiento y durabilidad.
                    </p>
    
                    <h2>Componentes principales</h2>
                    <p>
                        Pintura formulada a base de dispersión Acrovinílica,
                        espesada con ésteres de celulosa, utilizando como carga principal Carbonato de Calcio y Bioxido de Titanio,
                        estabilizantes de reología y emulsionantes especiales de alta gama que le dan la apariencia de la seda. 
                    </p>
    
                    <h2>Rendimiento</h2>
                    <p>
                        Teórico 50 m2 por galón por mano, dependiendo de la técnica de aplicación y la porosidad del sustrato a pintar.
                    </p>                 
    
                    <h2>Preparacion de la superficie</h2>
                    <p>
                    Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal adherida.
                     Se recomienda en superficies de concreto que las mismas estén niveladas y lisas y sin grietas.
                    </p>
    
                    <h2>Aplicacion</h2>
                    <p>
                    Brocha, rodillo o pistola; agítese antes de aplicar. Es importante para su aplicación utilizar equipos básicos de protección como guantes,
                     lentes, etc.
                    </p>

                    <h2>Secado para repintado</h2>
                    <p>
                        4 horas.
                    </p>
    
                    
                </div>
            <div className="col-1">
                <img src={imgA} alt="" className="imgPinturascreen medium" />
                
            </div>
        </div>
        </div>
        
    )
}
