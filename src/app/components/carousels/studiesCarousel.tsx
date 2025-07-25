"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./studiesCarousel.css";
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';

const slides = [
    {
        head: "Fintech Mobile App",
        img: "/studiesSlides/slide1.png",
        url: "/"
    },
    {
        head: "Hospital Management System",
        img: "/studiesSlides/slide2.png",
        url: "/"
    },
    {
        head: "AI Data Insights Dashboard",
        img: "/studiesSlides/slide3.png",
        url: "/"
    },
    {
        head: "AI Study Assistant",
        img: "/studiesSlides/slide4.png",
        url: "/"
    },
    {
        head: "AI Chatbot Integration",
        img: "/studiesSlides/slide5.png",
        url: "/"
    },
];

const StudiesCarousel = () => {

    const { push } = useRouter();

    return (
        <>
            <Swiper
                effect={'coverflow'}
                loop={true}
                slidesPerView={2}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className='custom-swiper-studies w-full min-[769px]:w-[350px] min-[873px]:w-[500px] min-[1025px]:w-[650px]'
                breakpoints={{
                    873: {
                        slidesPerView: 2
                    },
                    769: {
                        slidesPerView: 1
                    }
                }}
            >
                {slides.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div className=' relative'>
                            <Image
                                src={obj.img}
                                alt={obj.head}
                                width={400}
                                height={400}
                                className="rounded-md"
                            />
                            <div className=' flex justify-center'>
                                <h5 className=' absolute bottom-4 text-[#fff] font-bold'>{obj.head}</h5>
                            </div>
                            <div className='absolute top-3 right-3'>
                                <IconButton onClick={() => push("/")} sx={{ backgroundColor: "#fff", '&:hover': { background: "linear-gradient(to right, #00157F, #4C5F97)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", color: "#fff" } }}>
                                    <ArrowOutwardIcon />
                                </IconButton>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default StudiesCarousel;
