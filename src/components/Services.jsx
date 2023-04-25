import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import img4 from "../assets/s4.jpg";
import img5 from "../assets/s5.jpg";


const Services = () => {
  return (
    <div className='services'>
      
      <Carousel 
      infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}
      >

        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Slider</p>
        </div>
        <div>
            <img src={img2} alt="Item2" />
            <p className='legend'>Slider</p>
        </div>
        <div>
            <img src={img3} alt="Item3" />
            <p className='legend'>Slider</p>
        </div>
        <div>
            <img src={img4} alt="Item4" />
            <p className='legend'>Slider</p>
        </div>
        <div>
            <img src={img5} alt="Item5" />
            <p className='legend'>Slider</p>
        </div>
      </Carousel>

    </div>
  )
}

export default Services;
