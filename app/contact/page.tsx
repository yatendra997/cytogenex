import type { Metadata } from 'next';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Cytogenex for scientific publication support, medical writing services, or general inquiries. We respond within 24 hours.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            <PageBanner
                title="Contact Us"
                subtitle="Reach out to discuss your clinical trial needs or explore partnership opportunities with Cytogenex."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Information */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="mb-12">
                                <h4 className="text-[#1796CF] font-bold text-lg mb-4 uppercase tracking-wide">Get in Touch With Us</h4>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1521] mb-6 leading-tight">We are here to help you accelerate.</h2>
                                <p className="text-[#5B5B5B] text-lg leading-relaxed max-w-xl">
                                    We would be happy to discuss your scientific publication and medical communication needs. Whether you need support for a single manuscript or a full publication program, our team is ready to help.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0 mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-2">Office Location</h3>
                                        <p className="text-[#1796CF] font-bold mb-1">Bangalore, India</p>
                                        <p className="text-[#5B5B5B] leading-relaxed max-w-sm">
                                            Cytogenex operates from Bangalore, a global hub for life sciences and technology, enabling access to highly qualified scientific professionals and efficient global delivery.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0 mt-1">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-2">Business Inquiries</h3>
                                        <p className="text-[#5B5B5B] leading-relaxed max-w-sm mb-3">
                                            For new project inquiries, proposals, or partnership discussions, please contact us:
                                        </p>
                                        <div className="space-y-1">
                                            <p className="text-[#5B5B5B]">
                                                <span className="font-bold text-[#0F264D]">Email:</span> <a href="mailto:info@cytogenex.com" className="hover:text-[#1796CF] transition-colors">info@cytogenex.com</a> or <a href="mailto:inqueries@cytogenex.com" className="hover:text-[#1796CF] transition-colors">inqueries@cytogenex.com</a>
                                            </p>
                                            <p className="text-[#5B5B5B]">
                                                <span className="font-bold text-[#0F264D]">Business Development:</span> <a href="mailto:bd@cytogenex.com" className="hover:text-[#1796CF] transition-colors">bd@cytogenex.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                                <h3 className="text-2xl font-bold text-[#0B1521] mb-6">Send a Message</h3>
                                <form action="https://formsubmit.co/info@cytogenex.com" method="POST" className="space-y-6">
                                    {/* Honeypot for spam protection */}
                                    <input type="text" name="_honey" style={{ display: 'none' }} />
                                    {/* Disable captcha if desired */}
                                    <input type="hidden" name="_captcha" value="false" />
                                    {/* Success page routing, could route to a custom page or leave empty for default */}
                                    <input type="hidden" name="_subject" value="New Contact Form Submission - Cytogenex" />
                                    <input type="hidden" name="_template" value="box" />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">First Name</label>
                                            <input type="text" id="name" name="First Name" required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300" placeholder="John" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastname" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Last Name</label>
                                            <input type="text" id="lastname" name="Last Name" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Email</label>
                                            <input type="email" id="email" name="Email" required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300" placeholder="john@company.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Phone</label>
                                            <input type="tel" id="phone" name="Phone" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300" placeholder="+1 (555) 000-0000" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Message</label>
                                        <textarea id="message" name="Message" required rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300 resize-none" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-[#1796CF] text-white font-bold tracking-wider uppercase text-sm rounded-full px-8 py-4 hover:bg-[#0C2364] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
