'use client';

import { MapPin, Mail, Clock } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="py-24 bg-[#0C2364] relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1796CF]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1796CF]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1240px]">
                <div className="text-left md:text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h4
                        className="text-[#1796CF] font-bold text-base md:text-lg mb-3 tracking-wide uppercase"
                    >
                        Get in Touch With Us
                    </h4>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight text-left md:text-center"
                    >
                        Partner with Cytogenex for <span className="text-[#1796CF]">High-Quality</span> Scientific Publications
                    </h2>

                    <div
                        className="text-[16px] md:text-[18px] text-white/90 mb-10 max-w-3xl mx-auto font-light tracking-wide space-y-4 text-left md:text-center"
                    >
                        <p>
                            We would be happy to discuss your scientific publication and medical communication needs. Whether you need support for a single manuscript or a full publication program, our team is ready to help.
                        </p>
                        <p>
                            Cytogenex provides reliable and high-quality medical communication services to pharmaceutical and biotechnology companies worldwide.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                    {/* Office Location */}
                    <div
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
                    >
                        <div className="w-14 h-14 bg-[#1796CF]/30 rounded-full flex items-center justify-center mb-6">
                            <MapPin className="w-7 h-7 text-[#1796CF]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">Office Location</h3>
                        <p className="font-semibold mb-2 text-lg">Bangalore, India</p>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Cytogenex operates from Bangalore, a global hub for life sciences and technology, enabling access to highly qualified scientific professionals and efficient global delivery.
                        </p>
                    </div>

                    {/* Business Inquiries */}
                    <div
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
                    >
                        <div className="w-14 h-14 bg-[#1796CF]/30 rounded-full flex items-center justify-center mb-6">
                            <Mail className="w-7 h-7 text-[#1796CF]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">Business Inquiries</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            For new project inquiries, proposals, or partnership discussions, please contact us:
                        </p>
                        <div className="space-y-3">
                            <div>
                                <p className="text-[#1796CF] text-xs font-bold uppercase tracking-wider mb-1">General Inquiries</p>
                                <a href="mailto:info@cytogenex.com" className="hover:text-[#1796CF] transition-colors block text-sm font-medium">info@cytogenex.com</a>
                                <a href="mailto:inqueries@cytogenex.com" className="hover:text-[#1796CF] transition-colors block text-sm font-medium mt-1">inqueries@cytogenex.com</a>
                            </div>
                            <div className="pt-2">
                                <p className="text-[#1796CF] text-xs font-bold uppercase tracking-wider mb-1">Business Development</p>
                                <a href="mailto:bd@cytogenex.com" className="hover:text-[#1796CF] transition-colors block text-sm font-medium">bd@cytogenex.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Response Time */}
                    <div
                        className="bg-[#1796CF] p-8 rounded-2xl flex flex-col justify-center border border-[#1796CF] lg:col-span-1 md:col-span-2 md:mt-0 mt-0"
                    >
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
                            <Clock className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-4">Fast Response Time</h3>
                        <p className="text-white text-lg font-medium leading-relaxed mb-6">
                            We value your time and aim to respond to all inquiries as swiftly as possible.
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-white text-[#0B1521] rounded-full font-bold text-sm tracking-wide self-start shadow-sm">
                            Within 24 hours
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
