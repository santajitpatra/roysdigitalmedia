'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const sliderDB = [
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/ea328960-4c2e-43b1-bcd7-d3f2d6932614/10.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/6ccbc514-5665-43db-bf41-0bed8fdd9544/7.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/3afb37eb-258d-4691-9655-f9af4c9eb936/9.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/2071e38b-53bd-4865-9e27-38bd294d8bad/Untitled+design.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/7821a106-d15b-4078-b182-865b8724dd3d/13.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/86b4952b-d6ec-4346-a2fd-6a41b930d564/11.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/c0e0ee7a-770e-4e4c-85c0-6e0fcc1199c3/2.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/bf6c4c96-8622-464d-a6a3-77887fb232aa/7.png" },
    { slideImageUrl: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/3ca4b595-a783-4b86-969d-da047b1f21f2/6.png" }

]


const SwiperSlider = () => {
    return (
        <Swiper
            cssMode={true}
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {sliderDB.map((slider, i) => (
                <SwiperSlide key={i}> <img src={slider.slideImageUrl} alt="" /></SwiperSlide>

            ))}
        </Swiper>
    )
}

export default SwiperSlider