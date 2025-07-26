"use client"
import { motion } from 'framer-motion';
import React from 'react';

type ViewPortAnimationProps = React.PropsWithChildren<
    React.ComponentProps<typeof motion.div>
>;

const ViewPortAnimation = ({ children, ...rest }: ViewPortAnimationProps) => {
    return (
        <motion.div
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default ViewPortAnimation