import React from 'react'
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
        <article className="container-bg">
            <div className="card">
                <div className="cards__text">

                    <img src={p1} className="background__img"/>
                   
                </div>
            </div>
            <div className="background">
                <img src={h2} className="background__img"/>
                <div className="background__text">
                    <h3 className="background__title">La educación en linea</h3>
                    <p className="background__copy">La realidad aumentada transformará por completo la educación</p>
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
                    <h3 className="background__title">La educación en linea</h3>
                    <p className="background__copy">La realidad aumentada transformará por completo la educación</p>
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
                    <h3 className="background__title">La educación en linea</h3>
                    <p className="background__copy">La realidad aumentada transformará por completo la educación</p>
                </div>
            </div>

            
        </article>
    </section>
    )
}
