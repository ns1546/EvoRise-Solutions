import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '8801754220135'; // WhatsApp format: country code + number (no + or spaces)
    const defaultMessage = 'Hello! I would like to inquire about your services.';

    const handleStartChat = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center justify-center group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0.4)",
                            "0 0 0 20px rgba(34, 197, 94, 0)",
                        ],
                    }}
                    transition={{
                        boxShadow: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <MessageCircle className="w-7 h-7" />

                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        1
                    </span>
                </motion.button>
            </motion.div>

            {/* WhatsApp Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-green-500 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-white rounded-full p-2">
                                    <MessageCircle className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">EvoRise Solutions</h3>
                                    <p className="text-xs text-green-100">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-green-600 rounded-full p-1 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="bg-gray-50 p-4 min-h-[200px]">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-lg p-4 shadow-sm mb-4"
                            >
                                <p className="text-gray-800 text-sm mb-2">
                                    👋 <strong>Hello there!</strong>
                                </p>
                                <p className="text-gray-600 text-sm">
                                    How can we help you today? Click the button below to start a conversation with us on WhatsApp.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-green-50 border border-green-200 rounded-lg p-3"
                            >
                                <p className="text-gray-700 text-xs mb-1">
                                    <strong>Business Hours:</strong>
                                </p>
                                <p className="text-gray-600 text-xs">
                                    10:00 AM – 06:00 PM
                                </p>
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="bg-white p-4 border-t border-gray-200">
                            <motion.button
                                onClick={handleStartChat}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Start Chat on WhatsApp
                            </motion.button>
                            <p className="text-center text-xs text-gray-500 mt-2">
                                +880 1754-220135
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WhatsAppWidget;
