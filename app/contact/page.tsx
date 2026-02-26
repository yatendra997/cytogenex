import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            <PageBanner
                title="Contact Us"
                subtitle="Reach out to discuss your clinical trial needs or explore partnership opportunities with Cytogenex."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Form */}
                        <div className="lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                            <h2 className="text-3xl font-extrabold text-[#0B1521] mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-[#0F264D] mb-2 uppercase tracking-wide">First Name</label>
                                        <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastname" className="block text-sm font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Last Name</label>
                                        <input type="text" id="lastname" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-colors" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-colors" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Your Message</label>
                                    <textarea id="message" rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#1796CF] text-white font-bold tracking-wider uppercase rounded-lg px-8 py-4 hover:bg-[#0C2364] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="mb-12">
                                <h4 className="text-[#1796CF] font-bold text-lg mb-4">Get in Touch</h4>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1521] mb-6 leading-tight">We are here to help you accelerate.</h2>
                                <p className="text-[#5B5B5B] text-lg leading-relaxed max-w-xl">
                                    Whether you need to outsource your entire biometrics workload or just require tailored support for a single phase, our experts are ready to partner with you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0 mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-2">Corporate Office</h3>
                                        <p className="text-[#5B5B5B] leading-relaxed">
                                            1204, Shilp Epitome, Behind Rajpath Club,<br />Bodakdev, Ahmedabad – 380054
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0 mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-2">Operations Center</h3>
                                        <p className="text-[#5B5B5B] leading-relaxed">
                                            A – 1004, Centrum Business Square, Wagle Industrial Estate,<br />Thane (West) – 400604, Maharashtra, India.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-1">Phone Number</h3>
                                        <a href="tel:+917946048633" className="text-[#5B5B5B] hover:text-[#1796CF] transition-colors font-medium">
                                            +91 7946048633
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-1">Email Address</h3>
                                        <a href="mailto:info@cytogenex.com" className="text-[#5B5B5B] hover:text-[#1796CF] transition-colors font-medium">
                                            info@cytogenex.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
