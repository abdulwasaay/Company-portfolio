"use client"
import * as React from 'react';
import { ReactElement } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RespRoutes } from '@/app/constants/Routes';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export default function ResponsiveNav() {
    const [open, setOpen] = React.useState(false);
    const { push } = useRouter();
    const pathName = usePathname();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    type navTypes = {
        title: string,
        link: string,
        icon: ReactElement
    }
    const navSmallItems = RespRoutes.map((navs: navTypes, ind: number) => {
        return <ListItem key={ind} disablePadding>
            <ListItemButton onClick={() => push(navs.link)} sx={{ backgroundColor: pathName === navs.link ? "#0d1a38" : "" }}>
                <ListItemIcon sx={{ color: "#fff" }}>
                    {navs.icon}
                </ListItemIcon>
                <ListItemText primary={navs.title} />
            </ListItemButton>
        </ListItem>
    })

    const DrawerList = (
        <Box sx={{ width: 250, color: "#fff" }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navSmallItems}
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)} ><MenuIcon style={{color:"#fff"}}/></IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} className='block min-[638px]:hidden'>
                <div className='h-[100%] bg-[#060F24]'>
                    <div className='px-4 py-4'>
                        <Image
                            src={"/logo.png"}
                            alt="Brand Logo"
                            width={85}
                            height={99}
                            priority
                        />
                    </div>
                    <Divider sx={{ background: "#fff", marginLeft: "20px", marginRight: "20px" }} />
                    {DrawerList}
                </div>
            </Drawer>
        </div>
    );
}
