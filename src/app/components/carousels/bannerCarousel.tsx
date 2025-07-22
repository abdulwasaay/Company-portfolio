'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import "./bannerCarousel.css";

const BannerCarousel = () => {
    return (
        <div className=" w-[80%] sm:w-[400px] sm:h-[400px]">
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                className="rounded-2xl overflow-hidden shadow-xl"
            >
                {[1, 2, 3].map((n) => (
                    <SwiperSlide key={n}>
                        <div className="relative w-full aspect-square">
                            <Image
                                src={`/bannerSlider/slide${n}.png`}
                                alt={`Slide ${n}`}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
