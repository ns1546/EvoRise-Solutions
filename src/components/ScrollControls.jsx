import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Play, Pause } from 'lucide-react';

const ScrollControls = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const animationFrameRef = useRef(null);
    const scrollSpeedRef = useRef(2); // pixels per frame - increased for faster scrolling

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        stopAutoScroll();
    };

    const startAutoScroll = () => {
        setIsAutoScrolling(true);

        const smoothAutoScroll = () => {
            if (!animationFrameRef.current) return;

            const currentScroll = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const maxScroll = documentHeight - windowHeight;

            // Check if we've reached the bottom
            if (currentScroll >= maxScroll - 10) {
                // Smoothly scroll back to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                // Wait a bit before restarting the scroll
                setTimeout(() => {
                    if (animationFrameRef.current) {
                        animationFrameRef.current = requestAnimationFrame(smoothAutoScroll);
                    }
                }, 2000);
            } else {
                // Continue smooth scrolling down
                window.scrollBy({
                    top: scrollSpeedRef.current,
                    behavior: 'auto' // Use 'auto' for frame-by-frame control
                });
                animationFrameRef.current = requestAnimationFrame(smoothAutoScroll);
            }
        };

        // Start scrolling immediately
        animationFrameRef.current = requestAnimationFrame(smoothAutoScroll);
    };

    const stopAutoScroll = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        setIsAutoScrolling(false);
    };

    const toggleAutoScroll = () => {
        if (isAutoScrolling) {
            stopAutoScroll();
        } else {
            startAutoScroll();
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Auto Explore Button - Shows at top of page */}
            <AnimatePresence>
                {!showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        onClick={toggleAutoScroll}
                        className={`fixed bottom-6 right-28 z-40 ${isAutoScrolling
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-blue-500 hover:bg-blue-600'
                            } text-white rounded-full p-4 shadow-2xl flex items-center gap-2 transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={isAutoScrolling ? "Stop Auto Tour" : "Start Auto Tour"}
                    >
                        {isAutoScrolling ? (
                            <>
                                <Pause className="w-5 h-5" />
                                <span className="text-sm font-medium pr-1">Stop Tour</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-5 h-5" />
                                <span className="text-sm font-medium pr-1">Auto Explore</span>
                            </>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Back to Top Button - Shows when scrolled down */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-28 z-40 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Back to Top"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollControls;
