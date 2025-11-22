import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold text-white tracking-tighter mb-4 inline-block">
                            Evo<span className="text-accent">Rise</span> <span className="text-gray-400">Solutions</span>
                        </a>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Your Vision, Our Responsibility. We are committed to accelerating business growth for entrepreneurs through digital excellence and strategic guidance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/EvoRiseSolutions" target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="https://instagram.com/evorise.solutions" target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-accent transition-colors">Portfolio</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Content Creation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Web Development</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Business Consultancy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Cyber Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} EvoRise Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
