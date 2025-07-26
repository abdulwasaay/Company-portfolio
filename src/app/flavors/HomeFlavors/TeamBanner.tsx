"use client"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';

const TeamBanner = () => {
    const sxBacks = {
        backgroundImage: "url(/teams-Banner.png)",
    }
    const isMobile = useMediaQuery('(max-width:768px)');

    const teamMembers = [
        {
            name: "Ethan Carter",
            role: "ML Engineer",
            image: "/teams/member1.png",
            delays: 0.5
        },
        {
            name: "Olivia Bennett",
            role: "AI Researcher",
            image: "/teams/member2.png",

            delays: 0.6
        },
        {
            name: "Jack Anderson",
            role: "Data Scientist",
            image: "/teams/member3.png",

            delays: 0.7
        },
        {
            name: "William Scott",
            role: "MLOps Engineer",
            image: "/teams/member4.png",
            delays: 0.8
        },
    ]

    return (
        <div className=" mt-24 px-[30px] md:px-[65px]">
            <div className='w-full h-[474px] px-4 md:px-8 rounded-3xl' style={{
                backgroundImage: "url(/teams-Banner.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className='w-full flex justify-center'>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                        className='w-[974px] mt-12'
                    >
                        <p className="text-center text-white font-semibold lg:text-2xl">OUR TEAM MEMBERS</p>
                        <h1 className="text-center text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-2 text-white">
                            Our Dream Team, Your Trusted Partners
                        </h1>
                    </motion.div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-x-4 gap-y-8 w-full px-4 md:px-8 relative bottom-[180px]'>
                {
                    teamMembers?.map((team: any, ind) => (
                        <motion.div
                            key={ind}
                            initial={!isMobile ? { opacity: 0, scale: 0 } : { opacity: 0, x: -100 }}
                            whileInView={!isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, x: 0 }}
                            transition={{ duration: !isMobile ? 0.2 : 0.5, delay: !isMobile ? team.delays : 0 }}
                            className="w-full max-w-none md:max-w-[400px] lg:max-w-[300px] sm:basis-[48%] md:basis-[38%] lg:basis-[30%] xl:basis-[22%] sm:max-w-[300px] flex-grow"
                        >
                            <Card

                                sx={{
                                    borderRadius: "16px",
                                    boxShadow: "1px 1px 5px"
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 190 }}
                                    image={team.image}
                                    title="green iguana"
                                    className=' rounded-tl-2xl  rounded-tr-2xl'
                                />
                                <CardContent>
                                    <div className='font-bold text-[#0B2239] text-xl text-center'>
                                        {team.name}
                                    </div>
                                    <div className='font-bold text-[5A5A5A] text-lg text-center'>
                                        {team.role}
                                    </div>
                                    {/* <div className='text-center mt-3'>
                                        {team.body}
                                    </div> */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))
                }
            </div>
        </div >
    )
}

export default TeamBanner