import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const yOffset = -80; // Offset for navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsOpen(false); // Close mobile menu
    };

    return (
        <>
            <motion.nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-gradient-to-r from-primary/95 via-purple-900/20 to-primary/95 backdrop-blur-md shadow-lg shadow-purple/10 py-3'
                    : 'bg-transparent py-6'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo and Brand */}
                        <motion.div
                            className="flex-shrink-0 flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <a
                                href="#home"
                                className="flex items-center gap-3"
                                onClick={(e) => handleNavClick(e, '#home')}
                            >
                                <Logo variant="fade" size="small" />
                                <span className="text-xl font-bold text-white tracking-tighter">
                                    EvoRise Solutions
                                </span>
                            </a>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wide group cursor-pointer"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[9999] md:hidden bg-slate-900 flex flex-col justify-center items-center overflow-y-auto"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-gray-300 hover:text-white focus:outline-none p-2"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-2xl font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
