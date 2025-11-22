import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/new-logo.png';

const Logo = ({ variant = 'default', size = 'medium', className = '' }) => {
    const sizeClasses = {
        small: 'h-8',
        medium: 'h-12',
        large: 'h-16',
        xlarge: 'h-24'
    };

    const animations = {
        default: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 }
        },
        fade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.8 }
        },
        slideIn: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut" }
        },
        rotate: {
            initial: { opacity: 0, rotate: -180, scale: 0 },
            animate: { opacity: 1, rotate: 0, scale: 1 },
            transition: { duration: 0.8, ease: "easeOut" }
        },
        pulse: {
            initial: { opacity: 0, scale: 0.8 },
            animate: {
                opacity: 1,
                scale: [0.8, 1.05, 1],
            },
            transition: {
                duration: 1,
                times: [0, 0.6, 1],
                ease: "easeOut"
            }
        }
    };

    const selectedAnimation = animations[variant] || animations.default;

    return (
        <motion.img
            src={logoImage}
            alt="EvoRise Solutions Logo"
            className={`${sizeClasses[size]} w-auto object-contain ${className}`}
            initial={selectedAnimation.initial}
            animate={selectedAnimation.animate}
            transition={selectedAnimation.transition}
            whileHover={{ scale: 1.05 }}
        />
    );
};

export default Logo;
