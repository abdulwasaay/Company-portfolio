'use client';
import { motion } from 'framer-motion';
import Image from "next/image"

const AboutBanner = () => {
    return (
        <div className="w-full flex flex-col items-center min-[769px]:flex-row justify-center min-[769px]:items-center gap-20 px-[30px] xl:px-[159px] mt-14 overflow-x-hidden">
            {/* LEFT: Image */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex-1 w-full min-[769px]:w-[500px] max-w-[500px] aspect-square relative"
            >
                <Image
                    src={`/about-banner.png`}
                    alt={`Slide 1`}
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* RIGHT: Text Content */}
            <div className='flex-1'>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                >
                    <p className="text-left max-[769px]:text-center text-[rgb(0,21,127)] font-semibold lg:text-2xl">ABOUT US</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                >
                    <h1 className="text-left max-[769px]:text-center text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                        Your Tech Partner for a Better Tomorrow
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                >
                    <p className="mt-6 text-left max-[769px]:text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                >
                    <div className="space-y-2 mt-2.5">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 mt-5">
                                <Image
                                    src="/tik.png"
                                    alt="Tik Sign"
                                    width={25}
                                    height={21}
                                    priority
                                />
                                <p>Lorem Ipsum is dummy text</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div >
    );
};

export default AboutBanner;
