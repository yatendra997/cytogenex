'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy logic for homepage
            if (pathname === '/') {
                const sections = ['home', 'about', 'services', 'expertise', 'blog', 'career', 'contact'];
                let current = 'home';

                // Add a small offset so it triggers right before the section hits top
                const scrollPos = window.scrollY + 150;

                for (const section of sections) {
                    const el = document.getElementById(section);
                    if (el && el.offsetTop <= scrollPos) {
                        current = section;
                    }
                }

                // Explicitly check for bottom of page to highlight contact if we scroll to bottom
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                    if (document.getElementById('contact')) current = 'contact';
                }

                if (window.scrollY < 50) {
                    current = 'home';
                }

                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // also check on mount
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/', sectionId: 'home' },
        { name: 'About Us', href: '/about', sectionId: 'about' },
        { name: 'Services', href: '/services', hasDropdown: true, sectionId: 'services' },
        { name: 'Therapeutic Expertise', href: '/expertise', sectionId: 'expertise' },
        { name: 'Blog', href: '/blog', sectionId: 'blog' },
        { name: 'Career', href: '/career', sectionId: 'career' },
        { name: 'Contact', href: '/contact', sectionId: 'contact' },
    ];

    const serviceDropdown = [
        { name: 'Clinical Operations', href: '/services#clinical-operations' },
        { name: 'Clinical Data Management', href: '/services#clinical-data-management' },
        { name: 'Statistical Analysis', href: '/services#statistical-analysis' },
        { name: 'Pharmacovigilance Services', href: '/services#pharmacovigilance' },
        { name: 'Clinical Data Standards', href: '/services#data-standards' },
        { name: 'Medical Writing', href: '/services#medical-writing' },
        { name: 'Remote Monitoring Service (RMS)', href: '/services#rms' },
        { name: 'eTMF Services', href: '/services#etmf' },
    ];

    const needsSolidBg = pathname !== '/' || isScrolled;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${needsSolidBg ? 'bg-white shadow-md' : 'bg-transparent'} h-[121px]`}
        >
            {/* Top spacing to push nav items down like Clinnex */}
            <div className="w-full mx-auto px-8 lg:px-16 xl:px-[100px] h-full">
                <div className="flex items-end justify-between h-full">
                    {/* Logo - far left */}
                    <Link href="/" className="flex items-center mb-auto pt-[35px]">
                        <div className={`text-[28px] font-bold tracking-tight transition-colors duration-300 ${needsSolidBg ? 'text-[#0C2364]' : 'text-white'}`}>
                            <span className="text-[#1796CF] mr-1">X</span>Cytogenex
                        </div>
                    </Link>

                    {/* Desktop Nav - right aligned, items aligned at bottom */}
                    <nav className="hidden xl:flex items-end h-[92px] mt-[29px]">
                        {navLinks.map((link) => {
                            const isActive = pathname === '/'
                                ? activeSection === link.sectionId
                                : pathname === link.href;

                            const isHome = link.name === 'Home';

                            if (link.hasDropdown) {
                                return (
                                    <div key={link.name} className="relative group h-full flex items-end">
                                        <Link
                                            href={link.href}
                                            className={`flex items-center px-[15px] h-full text-[15px] font-bold transition-all duration-200 ease-in-out
                                                ${isActive
                                                    ? 'bg-[#0c2364] text-[#1796cf]'
                                                    : (needsSolidBg ? 'text-[#0C2364] hover:bg-[#0c2364] hover:text-[#1796cf]' : 'text-white hover:bg-[#0c2364] hover:text-[#1796cf]')}`}
                                        >
                                            {link.name}
                                        </Link>

                                        {/* Dropdown */}
                                        <div className="absolute top-full left-0 w-72 bg-white shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-[3px] border-[#1796CF]">
                                            {serviceDropdown.map((item, index) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`block px-5 py-3.5 text-[14px] font-medium text-[#1796CF] hover:bg-[#1796CF] hover:text-white transition-colors duration-200 ${index !== serviceDropdown.length - 1 ? 'border-b border-dashed border-[#1796CF]/40' : ''
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center px-[15px] h-full text-[15px] font-bold transition-all duration-200 ease-in-out
                                        ${isActive
                                            ? 'bg-[#0c2364] text-[#1796cf]'
                                            : (needsSolidBg ? 'text-[#0C2364] hover:bg-[#0c2364] hover:text-[#1796cf]' : 'text-white hover:bg-[#0c2364] hover:text-[#1796cf]')}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile menu toggle */}
                    <button
                        className="xl:hidden mb-auto pt-[40px]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className={needsSolidBg ? 'text-[#0C2364]' : 'text-[#1796CF]'} size={28} />
                        ) : (
                            <Menu className={needsSolidBg ? 'text-[#0C2364]' : 'text-[#1796CF]'} size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col items-center py-4 space-y-1 xl:hidden border-t"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === '/'
                            ? activeSection === link.sectionId
                            : pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[14px] font-bold uppercase tracking-widest w-full text-center py-3 ${isActive ? 'text-[#1796CF]' : 'text-[#0C2364] hover:text-[#1796CF]'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </motion.div>
            )}
        </header>
    );
}
