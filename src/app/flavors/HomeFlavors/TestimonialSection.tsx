import TestimonialCarousel from "@/app/components/carousels/testimonialCarousel"

const TestimonialSection = () => {

    const clientData = [
        {
            name: "JAMES ANDERSON",
            profile: "/testimonials/client1.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            name: "BRETT JOHN",
            profile: "/testimonials/client2.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            name: "ZARA MITCHELL",
            profile: "/testimonials/client3.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            name: "GILL RICHARD",
            profile: "/testimonials/client4.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            name: "REBECCA MORGAN",
            profile: "/testimonials/client5.png",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
    ]

    return (
        <div className="w-full">
            <div className="w-full flex justify-center">
                <div className="w-[800px]">
                    <p className="text-center text-[rgb(0,21,127)] font-semibold lg:text-2xl">TESTIMONIAL</p>
                    <h1 className="text-center text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-1">
                        What Our Clients Say About Us
                    </h1>
                </div>
            </div>
            <div className=" px-[10px] xl:px-[159px]">
                <TestimonialCarousel data={clientData} />
            </div>
        </div>
    )
}

export default TestimonialSection