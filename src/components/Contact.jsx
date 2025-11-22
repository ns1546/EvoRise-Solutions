import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs-config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            showNotification('error', 'Please enter your name');
            return false;
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            showNotification('error', 'Please enter a valid email address');
            return false;
        }
        if (!formData.subject.trim()) {
            showNotification('error', 'Please enter a subject');
            return false;
        }
        if (!formData.message.trim()) {
            showNotification('error', 'Please enter your message');
            return false;
        }
        return true;
    };

    const showNotification = (type, message) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                title: formData.subject,
                message: formData.message
            };

            const result = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            console.log('Email sent successfully:', result);
            showNotification('success', 'Message sent successfully! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Email send error:', error);
            showNotification('error', 'Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-900">
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -50, x: '-50%' }}
                        className={`fixed top-6 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl ${notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                    >
                        {notification.type === 'success' ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                        <p className="font-medium">{notification.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-orange-500 font-medium tracking-widest uppercase mb-2">Get in Touch</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Start a Conversation</h3>
                        <p className="text-gray-400 mb-10">
                            Ready to accelerate your business growth? Contact us today for a consultation or to learn more about our services.
                        </p>

                        <div className="space-y-6">
                            <motion.a
                                href="https://maps.app.goo.gl/uWa6xdN6Xe4Ernou5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group cursor-pointer"
                                whileHover={{ x: 5 }}
                            >
                                <div className="bg-slate-700 p-3 rounded-lg mr-4 group-hover:bg-orange-500 transition-colors">
                                    <MapPin className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 group-hover:text-orange-500 transition-colors">Headquarters</h4>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">GP CHA-191/1, CHA Block, Mohakhali,<br />Dhaka-1212, Bangladesh.</p>
                                </div>
                            </motion.a>

                            <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                                <div className="bg-slate-700 p-3 rounded-lg mr-4">
                                    <Phone className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-2">Phone Support</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <a
                                            href="tel:+8801754220135"
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-700 hover:bg-orange-500 text-gray-300 hover:text-white text-sm rounded-lg transition-all duration-300 group"
                                        >
                                            <Phone className="w-3 h-3 mr-1.5" />
                                            +880 1754-220135
                                        </a>
                                        <a
                                            href="tel:+8801518913015"
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-700 hover:bg-orange-500 text-gray-300 hover:text-white text-sm rounded-lg transition-all duration-300 group"
                                        >
                                            <Phone className="w-3 h-3 mr-1.5" />
                                            +880 1518-913015
                                        </a>
                                        <a
                                            href="tel:+8801819125190"
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-700 hover:bg-orange-500 text-gray-300 hover:text-white text-sm rounded-lg transition-all duration-300 group"
                                        >
                                            <Phone className="w-3 h-3 mr-1.5" />
                                            +880 1819-125190
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                                <div className="bg-slate-700 p-3 rounded-lg mr-4">
                                    <Mail className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-2">Email Inquiries</h4>
                                    <a
                                        href="mailto:helloevorisesolutions@gmail.com"
                                        className="inline-flex items-center px-3 py-1.5 bg-slate-700 hover:bg-orange-500 text-gray-300 hover:text-white text-sm rounded-lg transition-all duration-300 group"
                                    >
                                        <Mail className="w-3 h-3 mr-1.5" />
                                        helloevorisesolutions@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                                <div className="bg-slate-700 p-3 rounded-lg mr-4">
                                    <Clock className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Operational Hours</h4>
                                    <p className="text-gray-400 text-sm">10:00 AM – 06:00 PM</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                        placeholder="Your Name"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                        placeholder="your@email.com"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                    placeholder="How can we help?"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader className="mr-2 w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
