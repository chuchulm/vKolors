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
                                <p ><span> +58 424 1338683</span></p>
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
                        <div class="copy"><p>&copy;2020 TODOS LOS DERECHOS RESERVADOS</p></div> 
                            
                            <div className="red"><i class="fab fa-instagram redes ins"></i></div>
                            <div className="red"><i class="fab fa-whatsapp redes what"></i></div>
                            <div className="red"><i class="fab fa-facebook redes f"></i></div>
                                                
                        </div>
                    </div>
                </div>
        
        </div>
    )
}
