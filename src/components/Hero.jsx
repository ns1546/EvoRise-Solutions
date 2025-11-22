import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import {
    fadeInUp,
    staggerContainer,
    hoverScale
} from '../utils/animations';

// Optimized CountingNumber with better easing
const CountingNumber = React.memo(({ end, duration = 2.5, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        // Easing function: easeOutQuart
        const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / (duration * 1000), 1);

            const easedProgress = easeOutQuart(progress);
            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
});

CountingNumber.displayName = 'CountingNumber';

const TypewriterText = ({ text, className, delay = 0 }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: () => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
        }
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for content
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <div id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900" ref={containerRef}>
            {/* Video Background - Optimized */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-slate-900/80 z-10" /> {/* Overlay */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 will-change-transform"
                    style={{ filter: 'brightness(0.6) saturate(1.2)' }}
                >
                    <source src="https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Main Content */}
            <motion.div
                className="relative z-20 container mx-auto px-6 pt-20"
                style={{ y, opacity }}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm font-medium text-slate-300">Available for new projects</span>
                    </motion.div>

                    {/* Main Heading with Typewriter Effect */}
                    <div className="font-bold mb-8 tracking-tight leading-tight flex flex-col items-center z-10">
                        <div className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            <TypewriterText text="Let&apos;s Build & Grow" delay={0.2} />
                        </div>
                        <div className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mt-2 md:mt-4">
                            <TypewriterText text="Your Brand, Together" delay={1.5} />
                        </div>
                    </div>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed"
                    >
                        Transform your brand with cutting-edge web solutions. We combine aesthetic design
                        with powerful functionality to drive real business growth.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <motion.a
                            href="#contact"
                            variants={hoverScale}
                            whileHover="hover"
                            whileTap="tap"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="#services"
                            variants={hoverScale}
                            whileHover="hover"
                            whileTap="tap"
                            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Explore Services
                        </motion.a>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full border-t border-white/10 pt-12"
                    >
                        {[
                            { label: "Projects Completed", value: 150, suffix: "+" },
                            { label: "Happy Clients", value: 100, suffix: "%" },
                            { label: "Team Members", value: 25, suffix: "+" },
                            { label: "Years Experience", value: 3, suffix: "+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    <CountingNumber end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8 text-white/50" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
