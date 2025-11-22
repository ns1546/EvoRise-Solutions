import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, PenTool, Globe, ShieldCheck, Lightbulb, Video, Plus } from 'lucide-react';

const services = [
    {
        title: 'Social Media Management',
        icon: <Users className="w-8 h-8" />,
        description: 'Growing followers, engagement, and brand credibility across all social platforms.',
    },
    {
        title: 'Ad Campaign/Boosting',
        icon: <TrendingUp className="w-8 h-8" />,
        description: 'Strategic campaigns to drive traffic and conversion with measurable results.',
    },
    {
        title: 'Marketing Strategy',
        icon: <Lightbulb className="w-8 h-8" />,
        description: 'Goal-focused strategies for long-term success and sustainable growth.',
    },
    {
        title: 'Content Creation',
        icon: <PenTool className="w-8 h-8" />,
        description: 'Engaging and informative content to connect with audiences and build relationships.',
    },
    {
        title: 'Graphics Design & Video Editing',
        icon: <Video className="w-8 h-8" />,
        description: 'Visuals and videos to reflect brand story and captivate your audience.',
    },
    {
        title: 'SEO & Website Management',
        icon: <Globe className="w-8 h-8" />,
        description: 'Ensuring fast, secure, and up-to-date websites with optimal search rankings.',
    },
    {
        title: 'Cyber Security',
        icon: <ShieldCheck className="w-8 h-8" />,
        description: 'Protecting digital assets from cyber threats with comprehensive security solutions.',
    },
    {
        title: 'Additional Services',
        icon: <Plus className="w-8 h-8" />,
        description: 'Custom solutions tailored to your unique business needs and digital goals.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-orange-500 font-medium tracking-widest uppercase mb-2">Core Services</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h3>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions to accelerate your business growth and online presence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300 group"
                        >
                            <div className="mb-4 p-3 bg-slate-700 rounded-xl inline-block text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                {service.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
