import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const phoneNumber = '8801754220135';
    const defaultMessage = 'Hello! I would like to inquire about your services.';

    const handleStartChat = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Enhanced Floating WhatsApp Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white rounded-full p-4 md:p-5 shadow-2xl flex items-center justify-center group relative overflow-hidden"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                        boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0.7)",
                            "0 0 0 25px rgba(34, 197, 94, 0)",
                        ],
                    }}
                    transition={{
                        boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    {/* Animated background sparkle */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300"
                        animate={{
                            rotate: [0, 360],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />

                    {/* WhatsApp Icon with bounce */}
                    <motion.div
                        animate={{
                            y: [0, -3, 0],
                            rotate: [0, -5, 5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10"
                    >
                        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 drop-shadow-lg" />
                    </motion.div>

                    {/* Pulsing Notification Badge */}
                    <motion.span
                        className="absolute -top-1 -right-1 bg-gradient-to-br from-red-400 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        1
                    </motion.span>

                    {/* Glowing ring effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/50"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.button>
            </motion.div>

            {/* Creative WhatsApp Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, type: "spring" }}
                        className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-100"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all duration-200 hover:scale-110"
                            title="Close permanently"
                        >
                            <X className="w-4 h-4 text-gray-600" />
                        </button>

                        {/* Creative Header with gradient */}
                        <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white p-6 relative overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

                            <div className="flex items-center gap-4 relative z-10">
                                <motion.div
                                    className="bg-white rounded-full p-3 shadow-lg"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <MessageCircle className="w-8 h-8 text-green-600" />
                                </motion.div>
                                <div>
                                    <h3 className="font-bold text-xl">Let&apos;s Chat!</h3>
                                    <p className="text-sm text-green-100 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                                        Online now
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="bg-gradient-to-b from-gray-50 to-white p-5">
                            {/* Welcome Message */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md mb-4 border border-gray-100"
                            >
                                <div className="flex items-start gap-2">
                                    <span className="text-2xl">👋</span>
                                    <div>
                                        <p className="text-gray-800 font-semibold mb-1">
                                            Hello! Welcome to EvoRise Solutions
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            Ready to grow your business? Let&apos;s start a conversation!
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Quick Info Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-2 gap-3 mb-4"
                            >
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3 text-center">
                                    <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-gray-700">Business Hours</p>
                                    <p className="text-xs text-gray-600">10 AM - 6 PM</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-3 text-center">
                                    <Send className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                    <p className="text-xs font-semibold text-gray-700">Quick Reply</p>
                                    <p className="text-xs text-gray-600">Instant Response</p>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.button
                                onClick={handleStartChat}
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                <MessageCircle className="w-6 h-6" />
                                <span className="text-lg">Start WhatsApp Chat</span>
                            </motion.button>

                            {/* Phone Number */}
                            <p className="text-center text-sm text-gray-500 mt-3 font-medium">
                                📱 +880 1754-220135
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WhatsAppWidget;
