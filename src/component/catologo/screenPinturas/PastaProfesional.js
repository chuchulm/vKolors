import React from 'react'
import imgA from '../../../image/vk3.png'
 
export const PastaProfesional = () => { 
    return (
        <div className="containerClass">
            <div className="row top" >
                <div className="col-1 container-text">
                    <h1>Pasta profesional </h1>
                    <p>
                        La Linea Pasta Kolor es la pasta profesional a base de agua con acabado mate, formulada especialmente para emparejar y
                        uniformizar grietas menores en superficies tanto de paredes en concreto como en Tabiqueria de paneles de Yeso (Dry Wall),
                        es flexible y no agrieta en las Juntas entre los paneles, ni se desprende de las cintas de los mismos. Confiere un excelente acabado,
                        es de fácil aplicación y excelente al momento de lijar. Su uso recomendado es para ambientes interiores y sin humedad.
                    </p>
    
                    <h2>Componentes principales</h2>
                    <p>
                        Pasta formulada a base de dispersión Acrovinílica, espesada con ésteres de celulosa, utilizando como carga principal Carbonato de Calcio,
                         Talco Industrial y Dolomita. 
                    </p>
    
                    <h2>Rendimiento</h2>
                    <p>
                        Teórico 40 m2 por galón por capa, varía según la porosidad del sustrato y el grosor con el que se aplique.
                    </p>     

                    <h2>Acabado</h2>
                    <p>
                        Mate.
                    </p>             
    
                    <h2>Preparacion de la superficie</h2>
                    <p>
                         Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal adherida. 
                    </p>
    
                    <h2>Aplicacion</h2>
                    <p>
                         Se debe aplicar con espátula o palustra. 
                    </p>

                    <h2>Secado al tacto</h2>
                    <p>
                        30 minutos.
                    </p>

                    
    
                    
                </div>

                <div className="col-1  container-text">
                  <img src={imgA} alt="" className="imgPinturascreen " />

                  

                    <h2>Secado para lijado</h2>
                    <p>
                        4 horas.
                    </p>

                    <h2>Secado para aplicar pintura</h2>
                    <p>
                        24 horas.
                    </p>

                    <h2>Presentacion</h2>
                    <p>
                       1/4 Galón
                       Galón <br/>
                       Cuñete de 4 Galones<br/>
                       Cuñete de 5 Galones
                    </p>
                </div>

                
            </div>
        </div>
        
    )
}
