'use client';

import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

// Plays a short double-beep using the Web Audio API (no file needed)
function playBeep() {
    try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const playTone = (startTime: number, freq: number, duration: number) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0.25, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
            osc.start(startTime);
            osc.stop(startTime + duration);
        };
        playTone(ctx.currentTime,       880, 0.18); // first beep
        playTone(ctx.currentTime + 0.22, 1100, 0.18); // second beep
    } catch {
        // Silently ignore if audio is blocked
    }
}

export default function ContactSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Auto-open once per session after 3.5 s
    useEffect(() => {
        const already = sessionStorage.getItem('cg_sidebar_shown');
        if (already) return;
        const timer = setTimeout(() => {
            setIsOpen(true);
            playBeep();
            sessionStorage.setItem('cg_sidebar_shown', '1');
        }, 3500);
        return () => clearTimeout(timer);
    }, []);
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const isBusy = formState === 'submitting';

    function handleClose() {
        setIsOpen(false);
        // Reset form only after sidebar is closed
        setTimeout(() => {
            setFormState('idle');
            setErrorMsg('');
            setFullName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, 400);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('submitting');
        setErrorMsg('');

        try {
            const nameParts = fullName.trim().split(' ');
            const firstName = nameParts[0] ?? '';
            const lastName = nameParts.slice(1).join(' ');

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
            setErrorMsg('Failed to send. Please try again or email enquiries@cytogenex.com directly.');
            setFormState('error');
        }
    }

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
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
                    />

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 right-0 h-screen w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        {/* Header */}
                        <div className="bg-[#0C2364] px-4 py-3 flex items-center justify-between text-white shrink-0">
                            <h3 className="font-bold text-sm tracking-wide uppercase">Contact Us</h3>
                            <button
                                onClick={handleClose}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close contact sidebar"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-4 py-3 flex-grow overflow-y-auto">

                            {/* ── Thank-you state ── */}
                            {formState === 'success' ? (
                                <div className="flex flex-col items-center text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <CheckCircle size={36} className="text-green-500" />
                                    </div>
                                    <h4 className="text-base font-extrabold text-[#0B1521] mb-2">Message Sent!</h4>
                                    <p className="text-[#5B5B5B] text-xs leading-relaxed mb-5">
                                        Thank you! We&apos;ve received your message and will get back to you within 24 hours at{' '}
                                        <strong className="text-[#1796CF]">enquiries@cytogenex.com</strong>.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="bg-[#1796CF] text-white font-bold tracking-wider uppercase rounded text-xs py-2 px-5 hover:bg-[#0C2364] transition-all duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                /* ── Form state ── */
                                <>
                                    <p className="text-[#5B5B5B] mb-3 text-xs leading-relaxed">
                                        Fill out the form and our team will get back to you shortly.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div>
                                            <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Full Name *</label>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={e => setFullName(e.target.value)}
                                                required
                                                disabled={isBusy}
                                                className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors disabled:opacity-60"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Email *</label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                disabled={isBusy}
                                                className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors disabled:opacity-60"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Phone</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={e => setPhone(e.target.value)}
                                                disabled={isBusy}
                                                className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors disabled:opacity-60"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-[#0F264D] mb-1 uppercase tracking-wide">Message *</label>
                                            <textarea
                                                value={message}
                                                onChange={e => setMessage(e.target.value)}
                                                rows={2}
                                                required
                                                disabled={isBusy}
                                                className="w-full border-b border-gray-200 py-1.5 text-xs text-[#5B5B5B] focus:outline-none focus:border-[#1796CF] transition-colors resize-none disabled:opacity-60"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        {formState === 'error' && errorMsg && (
                                            <p className="text-red-500 text-[10px] bg-red-50 border border-red-200 rounded px-3 py-2">
                                                {errorMsg}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isBusy}
                                            className="w-full bg-[#1796CF] text-white font-bold tracking-wider uppercase rounded text-xs py-2.5 hover:bg-[#0C2364] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isBusy ? (
                                                <>
                                                    <Loader2 size={13} className="animate-spin" />
                                                    <span>Sending…</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send</span>
                                                    <Send size={13} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/917946048633?text=Hello%20Cytogenex,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 bottom-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
            </a>
        </>
    );
}
