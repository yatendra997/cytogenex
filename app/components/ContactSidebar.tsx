'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export default function ContactSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky vertical button on the right - exactly 34x170px */}
            <div
                className="fixed right-0 z-40 bg-[#1796CF] text-white hover:bg-[#0C2364] transition-colors cursor-pointer shadow-lg overflow-hidden flex items-center justify-center rounded-l-[4px]"
                onClick={() => setIsOpen(true)}
                style={{
                    top: '200px',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    width: '34px',
                    height: '170px'
                }}
            >
                <span className="font-bold tracking-[2px] uppercase text-[12px] whitespace-nowrap">Contact Us</span>
            </div>

            {/* Slide-out form */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 z-50"
                        />

                        {/* Sidebar - compact */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
                            className="fixed top-0 right-0 h-screen w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-[#0C2364] px-4 py-3 flex items-center justify-between text-white shrink-0">
                                <h3 className="font-bold text-sm tracking-wide uppercase">Contact Us</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Form Body - compact spacing to fit without scroll */}
                            <div className="px-4 py-3 flex-grow overflow-y-auto">
                                <p className="text-[#5B5B5B] mb-3 text-xs leading-relaxed">
                                    Fill out the form and our team will get back to you shortly.
                                </p>

                                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                                    <div>
                                        <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Full Name</label>
                                        <input type="text" required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Email</label>
                                        <input type="email" required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Phone</label>
                                        <input type="tel" required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Message</label>
                                        <textarea rows={2} required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors resize-none" placeholder="How can we help?"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-[#1796CF] text-white font-bold tracking-wider uppercase rounded text-xs py-2.5 hover:bg-[#0C2364] transition-all duration-300 flex items-center justify-center space-x-2">
                                        <span>Send</span>
                                        <Send size={13} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
