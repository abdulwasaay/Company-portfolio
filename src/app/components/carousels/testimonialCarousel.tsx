"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/pagination";
import "./strengthCarousel.css"
import Image from "next/image";

const TestimonialCarousel = ({ data }: { data: any }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full px-[30px]">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 6000 }}
                centeredSlides={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="custom-swiper !py-14"
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 3
                    },
                    561: {
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    881: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                }}
            >
                {data.map((obj: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`text-center relative z-10 p-6 rounded-xl transition-all duration-300 shadow-md
                ${activeIndex === index
                                    ? "bg-[#003B88] text-white shadow-xl"
                                    : "bg-white text-black border-1 border-[#003B88] scale-[0.8]"
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className=" flex flex-col items-center"
                            >
                                <div className="w-[100px] lg:w-[125px]">
                                    <Image
                                        src={obj.profile}
                                        alt="client"
                                        width={125}
                                        height={125}
                                        priority
                                    />
                                </div>
                                <div className="max-h-[132px] overflow-y-auto mt-6">
                                    <h3 className="font-extrabold text-xl">{obj.name}</h3>
                                    <p className="text-sm" >
                                        {obj.bio}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialCarousel;
