import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import ceoImage from '../assets/team/ceo.png';
import mdImage from '../assets/team/managing-director.jpg';
import chairmanImage from '../assets/team/chairman.jpg';

const team = [
    {
        name: 'NS Tasin',
        role: 'Chief Executive Officer (CEO)',
        image: ceoImage,
    },
    {
        name: 'Maidul Islam',
        role: 'Managing Director',
        image: mdImage,
    },
    {
        name: 'Sumaiya Sara',
        role: 'Chairman',
        image: chairmanImage,
    },
];

const Team = () => {
    return (
        <section id="team" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-orange-500 font-medium tracking-widest uppercase mb-2">Leadership</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Meet Our Executives</h3>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        The strategic direction of EvoRise Solutions is steered by a defined executive structure committed to your success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 border border-slate-700 hover:border-orange-500 transition-all duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Social Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex space-x-4 justify-center bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                        <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                                            <Mail size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                <p className="text-orange-500 text-sm font-medium uppercase tracking-wide">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
