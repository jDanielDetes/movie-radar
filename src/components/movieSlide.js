import React from 'react'
import Slider from "react-slick";
import color1 from '../images/color1.jpg'



function MovieSlide() {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 6000,
        waitForAnimate: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5%'
    }
    return (
        <div className='video-header-slide-show'>
           <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={color1} alt=""/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
    )
}

export default MovieSlide
