import type { Metadata } from 'next';
import PageBanner from '../components/PageBanner';
import OurExpertise from '../components/OurExpertise';

export const metadata: Metadata = {
    title: 'Therapeutic Expertise',
    description: 'Cytogenex has deep expertise across major therapeutic areas including oncology, cardiovascular, diabetes, neurology, respiratory, infectious diseases, and immunology.',
};

export default function ExpertisePage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Therapeutic Expertise"
                subtitle="We have experience in various phases of clinical trials, real-world studies, and wide therapeutic areas."
            />
            <div className="py-12 bg-white">
                <OurExpertise />
            </div>

            <section className="py-24 bg-[#0C2364] text-white">
                <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Core Therapeutic Areas</h2>
                        <p className="text-white/80 max-w-2xl mx-auto">Our deep domain expertise across major therapeutic areas ensures predictive, precise, and reliable outcomes for your scientific publications.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {['Oncology', 'Diabetes & Metabolic Diseases', 'Cardiovascular', 'Infectious Diseases', 'Neurology', 'Respiratory', 'Immunology'].map((area) => (
                            <div key={area} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-[#1796CF]/20 transition-all duration-300 flex items-center justify-center">
                                <h3 className="text-xl font-bold uppercase tracking-wider text-center">{area}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
