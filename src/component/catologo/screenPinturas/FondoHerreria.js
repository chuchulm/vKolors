import React from 'react'
import imgA from '../../../image/vk2.png'
 
export const FondoHerreria = () => { 
    return (
        <div className="containerClass">
            <div className="row top" >
                <div className="col-1 container-text">
                    <h1>Fondo Herreria </h1>
                    <p>
                        Fondo de Herrería Vkolor, es un producto de alta calidad, alto cubrimiento, función anticorrosiva en estructuras metálicas y alta
                        resistencia a la intemperie, fácil de aplicar otorgando excelente anclaje a la capa final de recubrimiento.
                    </p>
    
                    <h2>Componentes principales</h2>
                    <p>
                        Formulado a base de resina Alquídica, espesada con Bentonitas, y combinación de secantes como Octoato de Cobalto, Zirconio y Magnesio
                        utilizando como carga principal El Talco Industrial y agregado de fosfato de zinc.
                    </p>
    
                    <h2>Rendimiento</h2>
                    <p>
                        Teórico 25 a 30  m2 por galón por capa, varía según la porosidad del sustrato y el grosor con el que se aplique.
                    </p>    
                    
                    <h2>Acabado</h2>
                    <p>
                        Mate
                    </p>       

                    <h2>Secamiento al tacto</h2>
                    <p>
                        40 minutos.
                    </p>   

                    <h2>Secamiento para aplicar Pintura</h2>
                    <p>
                        Secado de 4 a 6 horas, dependiendo de las condiciones climáticas.
                    </p>   

                    <h2>Aplicacion</h2>
                    <p>
                        Brocha, rodillo, pistola de aire comprimido
                    </p>


                    
    
                    
    
                    
                </div>

                <div className="col-1 container-text">
                  <img src={imgA} alt="" className="imgPinturascreen " />


                  <h2>Preparacion de la superficie</h2>
                    <p>
                        Si la superficie metálica es nueva se debe limpiar el aceite aislante que utilizan para conservarlo de la oxidación antes de la venta,
                        debe estar libre de polvo o suciedad. En caso de presentar oxidación debe lijarse antes de la aplicación del producto 
                    </p>

                    <h2>Presentacion</h2>
                    <p>
                       1/4 Galón <br/>
                       Galón <br/>
                       
                    </p>
    
                    
                </div>
            </div>
        </div>
        
    )
}
