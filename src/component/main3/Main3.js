import React from 'react'
import { Link } from "react-router-dom";
import img2 from '../../image/v1.jpg'
import p1 from '../../image/p1.png'
import p2 from '../../image/p2.png'
import p3 from '../../image/p3.png'
import h1 from '../../image/h1.jpg'
import h2 from '../../image/h2.jpg'
import h3 from '../../image/h3.jpg'

export const Main3 = () => {
    return (
        <section className="projects container">
        <h2 className="subtitle">Catalogo de productos</h2>
        <p className="copy__section">Tenemos la mejor gama de productos para su hogar</p>
         
         <Link to="/catalogo/inicio" ><button className="buttonCatalogo">Catologo de Produtos</button></Link>

        <article className="container-bg">
            <div className="card">
                <div className="cards__text">

                    <img src={p1} className="background__img"/>
                   
                </div>
            </div>
            <div className="background">
                <img src={h2} className="background__img"/>
                <div className="background__text">
                    <h3 className="background__title">Pintura Impermeabilizante </h3>
                    {/* <p className="background__copy">La realidad aumentada transformará por completo la educación</p> */}
                </div>
            </div>
            <div className="card">
                <div className="cards__text">

                     <img src={p2} className="background__img"/>
                   
                </div>
            </div>
            <div className="background">
                <img src={h1} className="background__img"/>
                <div className="background__text">
                    <h3 className="background__title">Fondo de Herrería</h3>
                    {/* <p className="background__copy">La realidad aumentada transformará por completo la educación</p> */}
                </div>
            </div>

            <div className="card">
                <div className="cards__text">

                     <img src={p3} className="background__img"/>
                   
                </div>
            </div>
            <div className="background">
                <img src={h3} className="background__img"/>
                <div className="background__text">
                    <h3 className="background__title">Pasta Profesional</h3>
                    {/* <p className="background__copy">La realidad aumentada transformará por completo la educación</p> */}
                </div>
            </div>

            
        </article>
    </section>
    )
}
