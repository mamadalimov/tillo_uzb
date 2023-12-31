import React from 'react'
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


import banner1 from '../../assets/slider/1.png'
import banner2 from '../../assets/slider/2.png'
import banner3 from '../../assets/slider/3.png'
import banner4 from '../../assets/slider/4.png'


function Slider() {
    return (
        <div className='container'>
            <div className="slider__container">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Slider