import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-orange-500 font-medium tracking-widest uppercase mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Your Growth Partner in a <br />
                            <span className="text-gray-400">Competitive Marketplace</span>
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            EvoRise Solutions is a Marketing Agency and Business Consultancy. We are strongly committed to helping entrepreneurs accelerate their business growth. We help businesses strengthen their online presence while also providing strategic guidance and professional advice to make their offline operations more effective and productive.
                        </p>
                        <p className="text-gray-400 mb-8">
                            We provide a wide range of services, encompassing every aspect necessary for businesses to achieve sustainable development, expansion, and success in today&apos;s competitive marketplace. <span className="text-orange-500 font-semibold">Your Vision, Our Responsibility.</span>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-700/50 p-6 rounded-xl border-l-4 border-orange-500 hover:bg-slate-700 transition-all duration-300">
                                <div className="flex items-center mb-3">
                                    <Target className="w-6 h-6 text-orange-500 mr-2" />
                                    <h4 className="text-white font-bold">Our Mission</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    To support entrepreneurs and businesses with all-encompassing marketing and consultancy services, helping them grow with clarity, creativity, and confidence.
                                </p>
                            </div>
                            <div className="bg-slate-700/50 p-6 rounded-xl border-l-4 border-orange-500 hover:bg-slate-700 transition-all duration-300">
                                <div className="flex items-center mb-3">
                                    <Eye className="w-6 h-6 text-orange-500 mr-2" />
                                    <h4 className="text-white font-bold">Our Vision</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    To become a leading name in the marketing and business consultancy landscape of Bangladesh and beyond.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                alt="Team Collaboration"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white text-xl font-bold">EvoRise Solutions</p>
                                <p className="text-orange-500 text-sm">Est. 2022</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
