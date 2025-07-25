"use client"
import StudiesCarousel from "@/app/components/carousels/studiesCarousel"
import LinkLatest from "@/app/components/LinkLatest"
import { motion } from 'framer-motion';

const StudiesSection = () => {

    const buttonStyles = {
        color: "#fff",
        background: "linear-gradient(to right, #00157F, #4C5F97)",
        marginTop: "32px"
    }
    const buttonHoverStyles = {
        background: "#00157F"
    }

    return (
        <div className=" w-full relative">
            <div className="studies-shape-left mt-28 flex flex-col items-center min-[769px]:flex-row gap-20 min-[769px]-gap-10 min-[1392px]:gap-20 px-[30px] xl:px-28">
                <div className="overflow-y-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.5 }}
                    >
                        <p className="text-center min-[769px]:text-start text-[rgb(0,21,127)] font-semibold lg:text-2xl">CASE STUDIES</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.6 }}
                    >
                        <h1 className="text-center min-[769px]:text-start text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-1">
                            Transforming Ideas into Impact
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.7 }}
                    >
                        <p className="text-center min-[769px]:text-start text-md mt-[32px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.8 }}
                    >
                        <div className="flex justify-center min-[769px]:block">
                            <LinkLatest
                                title="Let's Connect"
                                link="/contact-us"
                                type="button"
                                buttonSize="small"
                                buttonSx={buttonStyles}
                                buttonHoverStyles={buttonHoverStyles}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="w-[500px] min-[376px]:w-[600px] min-[426px]:w-full min-[769px]:w-[800px]">
                    <StudiesCarousel />
                </div>
            </div>
        </div>
    )
}

export default StudiesSection