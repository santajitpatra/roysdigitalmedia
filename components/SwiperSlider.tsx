'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Image src="/rdm_logo.png" alt="" width={500} height={500} className='items-center justify-center flex w-full' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/rdm_logo.png" alt="" width={500} height={500} className='items-center justify-center flex w-full' />
            </SwiperSlide>   
              <SwiperSlide>
                <Image src="/rdm_logo.png" alt="" width={500} height={500} className='items-center justify-center flex w-full' />
            </SwiperSlide>    
             <SwiperSlide>
                <Image src="/rdm_logo.png" alt="" width={500} height={500} className='items-center justify-center flex w-full' />
            </SwiperSlide>    
             <SwiperSlide>
                <Image src="/rdm_logo.png" alt="" width={500} height={500} className='items-center justify-center flex w-full' />
            </SwiperSlide>

        </Swiper>)
}

export default SwiperSlider