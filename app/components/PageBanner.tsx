import { motion } from 'framer-motion';

export default function PageBanner({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <section className="relative pt-40 pb-20 bg-[#0C2364]">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: "url('/hero.png')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0C2364]/80 z-0" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">{title}</h1>
                {subtitle && <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
        </section>
    );
}
