import React from 'react'
import tlf from '../../image/phone.svg'
import direct from '../../image/location.svg'
import email from '../../image/mail.svg'

export const Footer = () => {
    return (  
        <div className="container-fuid-footer img__footer">
            
                <div className="content__footer " >
                    <div className="seccion__footer-2">
                        <div className="row">
                            <div className="col ">
                                <img src={tlf}alt="" className="icon-footer"/>
                                <p ><span> +58 0424-2015915</span></p>
                                <p><span> 0212-4810666</span></p>
                            </div>
                            <div className="col">
                                <img src={direct}alt="" className="icon-footer"/>
                                <p className="corection1">Esquina miracielos a Hospital</p>
                                <p className="corection1">EDIF: Sur 2 </p>
                            </div>
                            <div className="col">
                                <img src={email}alt="" className="icon-footer icon-footer1"/>
                                 <p className="corection">vkolor@gmail.com.com</p>
                            </div>
                        </div>
                    </div>    
            
                    <div className="line"></div>
            
            
                    <div className="container__li ">
                        <div className="redContainer ">
                        <div className="copy"><p>&copy;2020 TODOS LOS DERECHOS RESERVADOS</p></div> 
                            
                            <div className="red"><a href="https://www.instagram.com/pinturasvkolor/" target="blank"><i className="fab fa-instagram redes ins"></i></a></div>
                            <div className="red"><a href="https://api.whatsapp.com/send?phone=+584242015915" target="blank"><i class="fab fa-whatsapp redes what"></i></a></div>
                            <div className="red"><a href="https://www.facebook.com/Pinturas-Vkolor-103257961949329" target="blank"><i className="fab fa-facebook redes f"></i></a></div>
                                                
                        </div>
                    </div>
                </div>
        
        </div>
    )
}
