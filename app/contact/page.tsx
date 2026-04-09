'use client';

import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const isBusy = formState === 'submitting';

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('submitting');
        setErrorMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, phone, message }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setFormState('success');
            } else {
                setErrorMsg(data.message || 'Something went wrong. Please try again.');
                setFormState('error');
            }
        } catch {
            setErrorMsg('Failed to send your message. Please try again or email us directly at enquiries@cytogenex.com');
            setFormState('error');
        }
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setFormState('idle');
        setErrorMsg('');
    }

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
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-2">Business Enquiries</h3>
                                        <p className="text-[#5B5B5B] leading-relaxed max-w-sm mb-3">
                                            For new project enquiries, proposals, or partnership discussions, please contact us:
                                        </p>
                                        <div className="space-y-1">
                                            <p className="text-[#5B5B5B]">
                                                <span className="font-bold text-[#0F264D]">Email:</span>{' '}
                                                <a href="mailto:enquiries@cytogenex.com" className="hover:text-[#1796CF] transition-colors">enquiries@cytogenex.com</a>
                                            </p>
                                            <p className="text-[#5B5B5B]">
                                                <span className="font-bold text-[#0F264D]">Business Development:</span>{' '}
                                                <a href="mailto:bd@cytogenex.com" className="hover:text-[#1796CF] transition-colors">bd@cytogenex.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#1796CF]/10 flex items-center justify-center text-[#1796CF] mr-6 shrink-0 mt-1">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0F264D] mb-2">Phone</h3>
                                        <a href="tel:+919740182896" className="text-[#5B5B5B] hover:text-[#1796CF] transition-colors">+91 97401 82896</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form / Thank-You */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">

                                {/* ── Thank-you state ── */}
                                {formState === 'success' ? (
                                    <div className="flex flex-col items-center text-center py-8">
                                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                            <CheckCircle size={44} className="text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-extrabold text-[#0B1521] mb-3">Message Sent!</h3>
                                        <p className="text-[#5B5B5B] mb-6 max-w-sm leading-relaxed">
                                            Thank you for reaching out. Your message has been delivered to{' '}
                                            <strong className="text-[#1796CF]">enquiries@cytogenex.com</strong>.
                                            We&apos;ll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={handleReset}
                                            className="bg-[#1796CF] text-white font-bold tracking-wider uppercase text-sm rounded-full px-8 py-3 hover:bg-[#0C2364] transition-all duration-300"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    /* ── Form state ── */
                                    <>
                                        <h3 className="text-2xl font-bold text-[#0B1521] mb-6">Send a Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-6">

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="contact-firstname" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">First Name <span className="text-red-500">*</span></label>
                                                    <input
                                                        type="text"
                                                        id="contact-firstname"
                                                        value={firstName}
                                                        onChange={e => setFirstName(e.target.value)}
                                                        required
                                                        disabled={isBusy}
                                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300 disabled:opacity-60"
                                                        placeholder="John"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="contact-lastname" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Last Name</label>
                                                    <input
                                                        type="text"
                                                        id="contact-lastname"
                                                        value={lastName}
                                                        onChange={e => setLastName(e.target.value)}
                                                        disabled={isBusy}
                                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300 disabled:opacity-60"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="contact-email" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Email <span className="text-red-500">*</span></label>
                                                    <input
                                                        type="email"
                                                        id="contact-email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        required
                                                        disabled={isBusy}
                                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300 disabled:opacity-60"
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="contact-phone" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Phone</label>
                                                    <input
                                                        type="tel"
                                                        id="contact-phone"
                                                        value={phone}
                                                        onChange={e => setPhone(e.target.value)}
                                                        disabled={isBusy}
                                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300 disabled:opacity-60"
                                                        placeholder="+91 98765 43210"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="contact-message" className="block text-[13px] font-bold text-[#0F264D] mb-2 uppercase tracking-wide">Message <span className="text-red-500">*</span></label>
                                                <textarea
                                                    id="contact-message"
                                                    value={message}
                                                    onChange={e => setMessage(e.target.value)}
                                                    required
                                                    rows={4}
                                                    disabled={isBusy}
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#5B5B5B] focus:outline-none focus:ring-2 focus:ring-[#1796CF]/50 focus:border-[#1796CF] transition-all duration-300 resize-none disabled:opacity-60"
                                                    placeholder="How can we help you?"
                                                />
                                            </div>

                                            {formState === 'error' && errorMsg && (
                                                <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                                                    {errorMsg}
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isBusy}
                                                id="contact-submit-btn"
                                                className="w-full bg-[#1796CF] text-white font-bold tracking-wider uppercase text-sm rounded-full px-8 py-4 hover:bg-[#0C2364] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                                            >
                                                {isBusy ? (
                                                    <>
                                                        <Loader2 size={18} className="animate-spin" />
                                                        Sending…
                                                    </>
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
