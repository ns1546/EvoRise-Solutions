import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Mijanur Rahman',
        feedback: 'A true game-changer. Their digital marketing strategies delivered noticeable business growth in a matter of weeks.',
        rating: 5,
    },
    {
        name: 'Mahin Ahmed',
        feedback: 'We saw a tangible 70% increase in sales within 6 months. Outstanding service and response time.',
        rating: 5,
    },
    {
        name: 'Tanvir Ahmed',
        feedback: 'Commendable consistency and commitment in handling our social work and online presence for over a year.',
        rating: 5,
    },
];

const Portfolio = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-orange-500 font-medium tracking-widest uppercase mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Testimonials
                    </motion.h2>
                    <motion.h3
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        What Our Clients Say
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600 hover:border-orange-500 relative transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-6 text-slate-600 w-10 h-10" />
                            <div className="flex mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">&quot;{item.feedback}&quot;</p>
                            <h4 className="text-white font-bold">{item.name}</h4>
                            <p className="text-orange-500 text-sm">Client</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
