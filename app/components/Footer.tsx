import Link from 'next/link';
import { Mail, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0C2364] text-white pt-14 pb-0">
            <div className="container mx-auto px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Column 1: Brand + About */}
                    <div>
                        <Link href="/" className="inline-flex items-center mb-4">
                            <div className="text-2xl font-bold tracking-tight">
                                <span className="text-[#1796CF] mr-1">X</span>Cytogenex
                            </div>
                        </Link>
                        <p className="text-white/70 text-[13px] leading-relaxed pr-4 mb-3">
                            We are a contract research organization dedicated to providing comprehensive biometrics services including Clinical Data Management, statistical analysis and medical writing.
                        </p>
                        <Link href="/about" className="inline-block text-[13px] font-bold text-white hover:text-[#1796CF] transition-colors duration-300">
                            Read More
                        </Link>
                    </div>

                    {/* Column 2: Reach Us */}
                    <div>
                        <h4 className="text-[13px] font-bold mb-5 uppercase tracking-wider">Reach Us</h4>
                        <div className="space-y-4 text-[13px] text-white/70 leading-relaxed">
                            <p>
                                1204, Shilp Epitome, Behind Rajpath Club, Bodakdev, Ahmedabad – 380054
                            </p>
                            <p>
                                A – 1004, Centrum Business Square, Wagle Industrial Estate, Thane (West) – 400604, Maharashtra, India.
                            </p>
                            <p className="flex items-center">
                                <Phone className="mr-2 shrink-0" size={14} />
                                <a href="tel:+917946048633" className="hover:text-[#1796CF] transition-colors">+91 7946048633</a>
                            </p>
                            <p className="flex items-center">
                                <Mail className="mr-2 shrink-0" size={14} />
                                <a href="mailto:info@cytogenex.com" className="hover:text-[#1796CF] transition-colors">info@cytogenex.com</a>
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Connect With Us */}
                    <div>
                        <h4 className="text-[13px] font-bold mb-5 uppercase tracking-wider">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1796CF] hover:text-white transition-all duration-300">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1796CF] hover:text-white transition-all duration-300">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1796CF] hover:text-white transition-all duration-300">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Sub-Footer - dark gray like Clinnex */}
            <div className="bg-[#212122] text-white/50 text-[11px] py-3 px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-2 md:mb-0 text-center md:text-left">
                    <p>Copyright © {currentYear} Cytogenex Research Pvt. Ltd. | Designed by Innovations Beyond.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 text-white/60 font-medium">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/expertise" className="hover:text-white transition-colors">Therapeutic Expertise</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/career" className="hover:text-white transition-colors">Career</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
