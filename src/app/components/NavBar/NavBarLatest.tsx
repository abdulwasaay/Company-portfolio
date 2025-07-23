import Image from "next/image"
import { navRoutes, smallNavRoutes } from "@/app/constants/Routes"
import LinkLatest from "../LinkLatest"
import ResponsiveNav from "./ResponsiveNav"

const NavBarLatest = () => {

    type navTypes = {
        title: string,
        link: string
    }

    const buttonStyles = {
        color: "#01157F",
        backgroundColor: "#fff",
        '&:hover': { color: "white" }
    }
    const buttonHoverStyles = {
        background: "linear-gradient(to right, #00157F, #4C5F97)"
    }

    const navItems = navRoutes.map((navs: navTypes, ind: number) => {
        return <LinkLatest key={ind} linkClasses="hover:font-normal text-[#fff]" title={navs.title} link={navs.link} />
    })
    const navSmallItems = smallNavRoutes.map((navs: navTypes, ind: number) => {
        return <LinkLatest key={ind} linkClasses="hover:font-normal text-[#fff]" title={navs.title} link={navs.link} />
    })
    return (
        <div className=" fixed w-full top-0 z-999 bg-[#060F24] py-3 px-[30px] xl:px-[159px]">
            <nav className=" flex justify-between items-center">
                <Image
                    src={"/logo.png"}
                    alt="Brand Logo"
                    width={65}
                    height={89}
                    priority
                />
                <div className=" flex gap-10 lg:gap-24 max-[768px]:hidden">
                    {navItems}
                </div>
                <div className=" flex gap-8 lg:gap-24 min-[768px]:hidden max-[638px]:hidden">
                    {navSmallItems}
                </div>
                <div className=" block max-[768px]:hidden">
                    <LinkLatest title="Contact Us" link="/contact-us" type="button" buttonSize="small" buttonSx={buttonStyles} buttonHoverStyles={buttonHoverStyles} />
                </div>
                <div className=" hidden max-[638px]:block">
                    <ResponsiveNav />
                </div>
            </nav>
        </div>
    )
}

export default NavBarLatest