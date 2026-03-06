'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function ContactSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky vertical button on the right */}
            <div
                className="fixed right-0 z-40 bg-gradient-to-t from-[#0C2364] to-[#1796CF] text-white hover:to-[#0C2364] transition-all duration-300 cursor-pointer shadow-[-5px_0_15px_rgba(23,150,207,0.3)] border-l border-y border-white/20 overflow-hidden flex items-center justify-center rounded-l-lg hover:-translate-x-1"
                onClick={() => setIsOpen(true)}
                style={{
                    top: '250px',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    width: '38px',
                    height: '180px'
                }}
            >
                <span className="font-bold tracking-[3px] uppercase text-[13px] whitespace-nowrap drop-shadow-md">Contact Us</span>
            </div>

            {/* Slide-out form */}
            {isOpen && (
                <>
                    {/* Backdrop overlay */}
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
                    />

                    {/* Sidebar - compact */}
                    <div
                        className={`fixed top-0 right-0 h-screen w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
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

                            <form action="https://formsubmit.co/info@cytogenex.com" method="POST" className="space-y-3">
                                {/* Honeypot for spam protection */}
                                <input type="text" name="_honey" style={{ display: 'none' }} />
                                {/* Disable captcha if desired */}
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_subject" value="New Contact Form Submission - Cytogenex" />
                                <input type="hidden" name="_template" value="box" />

                                <div>
                                    <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Full Name</label>
                                    <input type="text" name="Full Name" required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Email</label>
                                    <input type="email" name="Email" required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Phone</label>
                                    <input type="tel" name="Phone" required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors" placeholder="+91 98765 43210" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Message</label>
                                    <textarea name="Message" rows={2} required className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors resize-none" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#1796CF] text-white font-bold tracking-wider uppercase rounded text-xs py-2.5 hover:bg-[#0C2364] transition-all duration-300 flex items-center justify-center space-x-2">
                                    <span>Send</span>
                                    <Send size={13} />
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919999999999?text=Hello%20Cytogenex,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 bottom-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
            >
                {/* Custom WhatsApp SVG icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
            </a>
        </>
    );
}
