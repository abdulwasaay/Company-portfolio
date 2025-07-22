"use client"
import Image from "next/image"
import { motion } from 'framer-motion';
import "./Homeflavor.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TrustedPartners = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center gap-[30px] px-[30px] xl:px-[159px]">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src={"/trustpilot.png"}
                        alt="trustpilot"
                        width={265}
                        height={95}
                        priority
                        className="max-[653px]:!w-[122px] max-[881px]:!w-[190px]"
                    />
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Image
                        src={"/google.png"}
                        alt="trustpilot"
                        width={219}
                        height={95}
                        priority
                        className="max-[653px]:!w-[102px] max-[881px]:!w-[172px]"
                    />
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Image
                        src={"/clutch.png"}
                        alt="trustpilot"
                        width={200}
                        height={153}
                        priority
                        className="max-[653px]:!w-[102px] max-[881px]:!w-[152px]"
                    />
                </motion.div>
            </div>
        </>
    )
}

export default TrustedPartners