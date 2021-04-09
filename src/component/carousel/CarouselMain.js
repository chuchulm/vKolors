import React from 'react'
import { Carousel } from 'antd';
import img1 from '../../image/image_slider_2.jpg'
import img2 from '../../image/image_3.jpg'
import img3 from '../../image/image_slider_3.jpg'



export const CarouselMain = () => {
    return (
        <div className="container-carousel">
            <Carousel autoplay>
                <div>
                  <img src={img1} alt="" className=" img-carousel"/>
                </div>
                <div>
                  <img src={img2} alt="" className=" img-carousel"/>
                </div>
                <div>
                  <img src={img3} alt="" className=" img-carousel"/>
                </div>
              
            </Carousel>,
            
        </div>
    )
}
