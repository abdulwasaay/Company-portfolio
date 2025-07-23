import Button from '@mui/material/Button';

interface ButtonProps extends React.ComponentProps<typeof Button> {
    title: string;
    clickHandler: () => void;
    sx?: any;
    size?: "small" | "medium" | "large";
    hoverStyles?: { background: string };
}

const ButtonLatest: React.FC<ButtonProps> = ({ title, clickHandler, sx, size = "medium", hoverStyles, ...rest }) => {

    const typography = () => {
        if (size === "small")
            return "14px"
        if (size === "medium")
            return "16px"
        if (size === "large")
            return "20px"
    }

    const padding = () => {
        if (size === "small")
            return "11px 25px"
        if (size === "medium")
            return "14px 30px"
        if (size === "large")
            return "16px 36px"
    }

    return (
        <Button
            onClick={clickHandler}
            className={`relative overflow-hidden z-10 group `}
            sx={{
                fontSize: typography(),
                padding: padding(),
                textTransform: "capitalize",
                fontFamily: "var(--font-monsterrat)",
                ...sx
            }}
            {...rest}
        >
            <span style={{ background: hoverStyles?.background }} className="absolute left-0 top-0 h-full w-0 transition-all duration-300 ease-in-out group-hover:w-full z-[-1]"></span>
            {title}
        </Button>
    )
}

export default ButtonLatest