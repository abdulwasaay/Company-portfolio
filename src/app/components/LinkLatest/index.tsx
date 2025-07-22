"use client"
import Link from 'next/link';
import ButtonLatest from '../ButtonLatest';
import { usePathname, useRouter } from 'next/navigation';

interface LinkProps {
    title: string;
    link: string;
    type?: "button" | "link";
    linkClasses?: string;
    buttonSize?: "small" | "medium" | "large";
    buttonSx?: any;
    buttonHoverStyles?: any;
}

const LinkLatest: React.FC<LinkProps> = ({ title, link, type = "link", buttonSize, linkClasses, buttonSx, buttonHoverStyles }) => {
    const pathName = usePathname();
    const isActive = pathName === link;
    const { push } = useRouter();

    if (type === "link") {
        return (
            <Link
                className={`relative inline-block text-md after:content-[''] after:absolute after:left-0 after:bottom-0 ${isActive ? "after:w-full font-normal" : "after:w-0 font-light "} after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${linkClasses}`}
                href={link}
            >
                {title}
            </Link>
        )
    }

    if (type === "button") {
        return (
            <ButtonLatest title={title} clickHandler={() => push(link)} size={buttonSize} sx={buttonSx} hoverStyles={buttonHoverStyles} />
        )
    }
}

export default LinkLatest