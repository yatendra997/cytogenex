import type { Metadata } from 'next';
import PageBanner from '../components/PageBanner';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Stay updated with the latest insights from Cytogenex on scientific publications, medical writing best practices, and clinical research trends.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <PageBanner
                title="Our Blog"
                subtitle="Insights and updates from the forefront of medical communication and scientific publications."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Best Practices in Manuscript Development', date: 'October 10, 2024', snippet: 'A structured approach to developing high-quality manuscripts that meet international journal standards and reviewer expectations.' },
                            { title: 'Publication Planning for Phase III Trials', date: 'September 22, 2024', snippet: 'How early publication planning ensures timely and impactful scientific communication of pivotal clinical trial results.' },
                            { title: 'Medical Writing for Global Submissions', date: 'August 14, 2024', snippet: 'Key considerations for adapting scientific documents for regulatory and medical affairs audiences across different regions.' }
                        ].map((post, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="h-48 bg-[#1796CF]/10 flex items-center justify-center border-b border-gray-50">
                                    <span className="text-[#0C2364] font-bold uppercase tracking-wider text-sm">Cytogenex Insights</span>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-sm text-[#5B5B5B] font-medium mb-2">{post.date}</p>
                                    <h2 className="text-xl font-bold text-[#0F264D] mb-4 leading-snug">{post.title}</h2>
                                    <p className="text-[#5B5B5B] flex-grow">{post.snippet}</p>
                                    <a href="/contact" className="mt-6 text-[#1796CF] font-bold tracking-wide uppercase text-sm hover:text-[#0C2364] transition-colors">Read More &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
