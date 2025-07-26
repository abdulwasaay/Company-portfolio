import StrengthCarousel from "@/app/components/carousels/strengthCarousel"
import "./ext.css"

const StrengthBanner = () => {
    return (
        <div className=" mt-20">
            <div className="flex justify-center px-[30px] relative">
                <div className=" w-[940px] strength-shape-right">
                    <p className="text-center text-[rgb(0,21,127)] font-semibold lg:text-2xl">OUR STRENGTH</p>
                    <h1 className="text-center text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-1">
                        Empowering Success Through Expertise
                    </h1>
                </div>
            </div>
            <div className=" mt-10 relative">
                <StrengthCarousel />
                <div className="bg-[#A2B3E3] w-full h-[70px] absolute top-[35%] translate-y-[-50%] left-0"></div>
            </div>
        </div>
    )
}

export default StrengthBanner