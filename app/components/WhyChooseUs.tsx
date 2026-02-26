'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
    { label: 'Completed Projects', value: 250, suffix: '+', icon: Target },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Lightbulb },
    { label: 'Clinical Sites', value: 500, suffix: '+', icon: TrendingUp },
    { label: 'Client Satisfaction', value: 99, suffix: '%', icon: CheckCircle },
];

function Counter({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number, suffix?: string }) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, from, to, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background pattern overlay (subtle) */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x md:divide-white/20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center px-4"
                        >
                            <div className="w-16 h-16 rounded-full border-2 border-secondary/50 flex items-center justify-center mb-6 text-secondary">
                                <stat.icon size={28} />
                            </div>

                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                <Counter from={0} to={stat.value} duration={2000} suffix={stat.suffix} />
                            </div>

                            <p className="text-white/80 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
