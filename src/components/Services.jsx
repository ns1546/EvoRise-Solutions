import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, PenTool, Globe, ShieldCheck, Lightbulb, Video, Plus, Sparkles, Settings, Palette, MapPin } from 'lucide-react';

const services = [
    {
        title: 'Social Media Management',
        icon: <Users className="w-8 h-8" />,
        description: 'We manage your social media to grow real followers, boost engagement, and build brand credibility.',
    },
    {
        title: 'Ad Campaign/Boosting',
        icon: <TrendingUp className="w-8 h-8" />,
        description: 'Strategic ad campaigns to expand reach, drive traffic to your business, and boost conversion rates fast.',
    },
    {
        title: 'AI Automation',
        icon: <Sparkles className="w-8 h-8" />,
        description: 'We automate your entire workflow with powerful AI—saving time, cutting costs, and boosting productivity effortlessly.',
    },
    {
        title: 'Content Creation',
        icon: <PenTool className="w-8 h-8" />,
        description: 'Create engaging, informative content that connects emotionally and converts your audience into customers.',
    },
    {
        title: 'Graphics Design',
        icon: <Palette className="w-8 h-8" />,
        description: 'Create stunning, brand-aligned graphics that capture attention and communicate your message with visual impact.',
    },
    {
        title: 'Video Editing',
        icon: <Video className="w-8 h-8" />,
        description: 'Transform raw footage into polished, engaging videos that tell your story and captivate your audience.',
    },
    {
        title: 'Marketing Strategy',
        icon: <Lightbulb className="w-8 h-8" />,
        description: 'We build smart, goal-focused marketing strategies that position your brand for growth and long-term success.',
    },
    {
        title: 'Page Setup & Automation',
        icon: <Settings className="w-8 h-8" />,
        description: 'Professional setup and automation of your business pages across platforms—streamlined, efficient, and ready to convert.',
    },
    {
        title: 'SEO & Website Management',
        icon: <Globe className="w-8 h-8" />,
        description: 'We ensure your website is fast, secure, and up-to-date so your visitors enjoy smooth and fine experience.',
    },
    {
        title: 'Map Optimization & Review',
        icon: <MapPin className="w-8 h-8" />,
        description: 'Boost local visibility with optimized Google Maps listings and strategic review management to attract more customers.',
    },
    {
        title: 'Cyber Security',
        icon: <ShieldCheck className="w-8 h-8" />,
        description: 'Rank higher on search engines and protect your digital assets from cyber threats in a single solution.',
    },
    {
        title: 'Additional Services',
        icon: <Plus className="w-8 h-8" />,
        description: 'From branding to automation, explore custom digital solutions to fit your unique business needs.',
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
