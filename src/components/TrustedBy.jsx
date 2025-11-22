import React from 'react';
import { motion } from 'framer-motion';

import blueJeans from '../assets/clients/blue-jeans.png';
import floMusic from '../assets/clients/flo-music.png';
import petShop from '../assets/clients/pet-shop.png';
import plantPhobia from '../assets/clients/plant-phobia.png';
import primeTaste from '../assets/clients/prime-taste.png';
import bumblebee from '../assets/clients/bumblebee.png';
import bangladeshMetal from '../assets/clients/bangladesh-metal.png';
import metalEdge from '../assets/clients/metal-edge.jpg';
import jmCosmetic from '../assets/clients/jm-cosmetic.png';

const TrustedBy = () => {
    const clients = [
        { name: 'Blue Jeans', logo: blueJeans },
        { name: 'Flo Music', logo: floMusic },
        { name: 'Pet Shop', logo: petShop },
        { name: 'Plant Phobia', logo: plantPhobia },
        { name: 'Prime Taste', logo: primeTaste },
        { name: 'BumbleBee', logo: bumblebee },
        { name: 'Bangladesh Metal', logo: bangladeshMetal },
        { name: 'Metal Edge', logo: metalEdge },
        { name: 'JM Cosmetic', logo: jmCosmetic }
    ];

    return (
        <section className="py-20 bg-slate-900 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-blue-400 font-medium tracking-widest uppercase mb-3 text-sm">Trusted By Industry Leaders</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Powering Next-Gen Brands</h3>
                </motion.div>

                {/* Moving Ticker */}
                <div className="relative mask-linear-gradient">
                    <div className="flex overflow-hidden group">
                        <motion.div
                            className="flex gap-12 md:gap-24 whitespace-nowrap"
                            animate={{
                                x: ['0%', '-50%'],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {/* First set */}
                            {clients.map((client, index) => (
                                <div
                                    key={`client-1-${index}`}
                                    className="flex items-center justify-center min-w-[180px] opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                >
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="h-12 md:h-16 object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {clients.map((client, index) => (
                                <div
                                    key={`client-2-${index}`}
                                    className="flex items-center justify-center min-w-[180px] opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                >
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="h-12 md:h-16 object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Fade Edges */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
