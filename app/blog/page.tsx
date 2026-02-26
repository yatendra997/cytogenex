import PageBanner from '../components/PageBanner';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <PageBanner
                title="Our Blog"
                subtitle="Insights and updates from the forefront of clinical research and biometrics."
            />

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'The Future of Clinical Data Management', date: 'October 10, 2024', snippet: 'Exploring upcoming trends in AI, machine learning, and automation in CDM...' },
                            { title: 'Optimizing Statistical Analysis in Phase III', date: 'September 22, 2024', snippet: 'A deep dive into reducing bias and increasing accuracy during critical trial phases...' },
                            { title: 'Medical Writing Best Practices', date: 'August 14, 2024', snippet: 'How to ensure your regulatory submissions are clear, compliant, and ready for approval...' }
                        ].map((post, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="h-48 bg-[#1796CF]/10 flex items-center justify-center border-b border-gray-50">
                                    <span className="text-[#0C2364] font-bold uppercase tracking-wider text-sm">Blog Post Image</span>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-sm text-[#5B5B5B] font-medium mb-2">{post.date}</p>
                                    <h3 className="text-xl font-bold text-[#0F264D] mb-4 leading-snug">{post.title}</h3>
                                    <p className="text-[#5B5B5B] flex-grow">{post.snippet}</p>
                                    <a href="#" className="mt-6 text-[#1796CF] font-bold tracking-wide uppercase text-sm hover:text-[#0C2364] transition-colors">Read More &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
