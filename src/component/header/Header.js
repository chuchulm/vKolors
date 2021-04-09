import React from 'react'
import logo from '../../image/logo02.png'
import logo1 from '../../image/logo01.png'
import imgHeader from '../../image/v9.jpg'

export const Header = () => {
    return (
        
        <header className="hero">
            <img src={imgHeader} alt="" className="img__header"/>
            <nav className="nav__hero">
                <div className="container nav__container">
                    <div className="logo">
                       <img src={logo} alt="" className="logo__navBar"/>
                    </div>

                    <div className="links">
                        <a href="#" className="link">Inicio</a>
                        <a href="#" className="link">Servicios</a>
                        <a href="#" className="link">Contactenos</a>
                    </div>
                </div>
            </nav>
    
    
            <section className="container hero__main">  
                <div className="hero__textos">
                    <h1 className="title"> Le damos  <span className="title--active">Color a tus ideas</span></h1> 
          
                 
                </div>
              
            </section>
        </header>
            
    
    )
}
