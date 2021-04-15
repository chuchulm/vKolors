import React from 'react'

export const MenuHamburguesa = () => {

    let slide_menu = document.querySelector(".slide_menu1");
    let hamburger = document.querySelector(".hamburger");



        const hamburguer = () =>{
            
            hamburger.addEventListener("click", function() {
   
                hamburger.classList.toggle("is-active");
                slide_menu.classList.toggle("is-active");
                
          
          
              });
           
        } 
    return (
        <div>
            <button className="hamburger hamburger--emphatic-r is-active" type="button" onClick={hamburguer}>
                        <span className="hamburger-box">
                          <span className="hamburger-inner"></span>
                        </span>
                        <nav className="slide_menu slide_menu1 "> 
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Tutorial</a></li>
                                <li><a href="#">Advertise</a></li>
                                </ul>
                        </nav>
                    </button>
        </div>
    )
}
