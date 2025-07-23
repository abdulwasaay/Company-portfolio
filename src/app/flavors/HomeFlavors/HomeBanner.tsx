'use client';
import { motion } from 'framer-motion';
import LinkLatest from '../../components/LinkLatest';
import BannerCarousel from '../../components/carousels/bannerCarousel';

const HomeBanner = () => {

    const sx = {
        backgroundImage: "url(/banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    const buttonStyles = {
        color: "#fff",
        background: "linear-gradient(to right, #00157F, #4C5F97)",
        marginTop: "32px"
    }
    const buttonHoverStyles = {
        background: "#00157F"
    }

    return (
        <div className=" w-full" style={sx}>
            <div className=' pt-[160px] pb-[80px] md:pt-[202px] md:pb-[132px] px-[30px] xl:px-[159px] flex gap-10 md:gap-3 flex-col items-center md:flex-row md:justify-center'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className=' text-[#fff] text-center md:text-start text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Innovation Beyond <span className='font-bold'>Boundaries with Sphere Tech</span></p>
                    <p className=' text-[#fff] text-center md:text-start text-md mt-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className=' flex justify-center md:block'>
                        <LinkLatest
                            title='Let’s Connect'
                            link='/contact-us'
                            type='button'
                            buttonSize='small'
                            buttonSx={buttonStyles}
                            buttonHoverStyles={buttonHoverStyles}
                        />
                    </div>
                </motion.div>
                <BannerCarousel />
            </div>
        </div>
    )
}

export default HomeBanner