"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/pagination";
import "./strengthCarousel.css"

const slides = [
    { head: "One Stop Solution", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { head: "End-to-End Solutions", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { head: "AI & ML Expert", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { head: "Industry Expertise", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { head: "Product Mindset", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
];

const StrengthCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full px-[30px]">
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                autoplay={{ delay: 6000 }}
                centeredSlides={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="custom-swiper"
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    561: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    881: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                }}
            >
                {slides.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`text-center relative z-10 p-6 rounded-xl transition-all duration-300 shadow-md
                ${activeIndex === index
                                    ? "bg-[#003B88] text-white shadow-xl"
                                    : "bg-white text-black border-1 border-[#003B88] "
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="max-h-[132px] overflow-y-auto"
                            >
                                <h3 className="font-extrabold text-2xl">{obj.head}</h3>
                                <p className="text-sm" >
                                    {obj.body}
                                </p>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StrengthCarousel;
