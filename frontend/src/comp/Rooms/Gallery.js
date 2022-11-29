import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import React from 'react'
import logo from '@/images/places/kl.png'

export default function Gallery() {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                
                    798: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 5 },
                    1536: { slidesPerView: 6 }
                }}
                className="h-96"
                navigation
                pagination={{ clickable: true }}
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {[...Array(10)].map((e, i) => (
                    <SwiperSlide>
                        <Image
                            src={logo}
                            alt="slider"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
