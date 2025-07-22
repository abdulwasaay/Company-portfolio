import { routeLinks } from "./routeLinks";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkIcon from '@mui/icons-material/Work';

export const navRoutes = [
    {
        title: "Home",
        link: routeLinks.home
    },
    {
        title: "About",
        link: routeLinks.about
    },
    {
        title: "Services",
        link: routeLinks.services
    },
    {
        title: "Career",
        link: routeLinks.career
    },
]

export const smallNavRoutes = [
    {
        title: "Home",
        link: routeLinks.home
    },
    {
        title: "About",
        link: routeLinks.about
    },
    {
        title: "Services",
        link: routeLinks.services
    },
    {
        title: "Career",
        link: routeLinks.career
    },
    {
        title: "Contact",
        link: routeLinks.contact
    },
]

export const RespRoutes = [
    {
        title: "Home",
        link: routeLinks.home,
        icon: <HomeIcon />
    },
    {
        title: "About",
        link: routeLinks.about,
        icon: <InfoIcon />
    },
    {
        title: "Services",
        link: routeLinks.services,
        icon: <BuildIcon />
    },
    {
        title: "Career",
        link: routeLinks.career,
        icon: <WorkIcon />
    },
    {
        title: "Contact",
        link: routeLinks.contact,
        icon: <ContactMailIcon />
    },
]