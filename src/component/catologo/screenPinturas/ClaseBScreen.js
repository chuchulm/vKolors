import React from 'react'
import imgB from '../../../image/vk5.png'

export const ClaseBScreen = () => {
    return (
        <div className="containerClass">
            <div className="row">
                <div className="col-1 container-text">
                    <h1>Pintura caucho Clase B </h1>
                    <p>
                        La Linea Kolor Mix es la clase “B” de caucho emulsionada, de Pinturas VKOLOR,
                        formulada con materias primas de la más alta calidad, para brindar buen cubrimiento y durabilidad.
                    </p>
    
                    <h2>Componentes principales</h2>
                    <p>
                      Pintura formulada a base de dispersión Acrovinílica, espesada con ésteres de celulosa,
                      utilizando como carga principal Carbonato de Calcio y Bioxido de Titanio y estabilizantes de reología. 
                    </p>
    
                    <h2>Rendimiento</h2>
                    <p>
                        Teórico 45 m2 por galón por mano, dependiendo de la técnica de aplicación y la porosidad del sustrato a pintar.
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

                    <h2>Presentacion</h2>
                    <p>
                       Galón <br/>
                       Cuñete de 4 Galones<br/>
                       Cuñete de 5 Galones
                    </p>
    
                    
                </div>
            <div className="col-1">
                <img src={imgB} alt="" className=" imgPinturascreenB " />
                
            </div>
        </div>
        </div>
        
    )
}
