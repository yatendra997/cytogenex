'use client';

import { useState } from 'react';
import { Stethoscope, Activity, Heart, ShieldAlert, Brain, Wind, Shield } from 'lucide-react';

const expertiseCategories = [
    {
        id: 'oncology',
        title: 'ONCOLOGY',
        icon: Stethoscope,
        description: 'Cytogenex has extensive experience supporting oncology publication programs across multiple tumor types and treatment modalities. We support publications from early-phase clinical studies through large Phase III trials and post-marketing real-world studies. Our oncology writers understand complex study designs, survival analyses, and biomarker-driven therapies.',
        sections: [
            {
                heading: 'Tumor Types Supported',
                items: ['Lung cancer (NSCLC and SCLC)', 'Breast cancer', 'Colorectal cancer', 'Gastric cancer', 'Liver cancer', 'Pancreatic cancer', 'Prostate cancer', 'Ovarian cancer', 'Cervical cancer', 'Renal cell carcinoma', 'Melanoma', 'Leukemia', 'Lymphoma', 'Multiple myeloma']
            },
            {
                heading: 'Treatment Modalities',
                items: ['Immunotherapy', 'Targeted therapies', 'Chemotherapy', 'Hormonal therapies', 'Combination therapies', 'CAR-T therapies', 'Biosimilars']
            },
            {
                heading: 'Scientific Expertise',
                items: ['Survival analysis (OS, PFS, DFS)', 'Biomarker studies', 'Companion diagnostics', 'Subgroup analyses', 'Safety data interpretation', 'Benefit-risk assessment']
            },
            {
                heading: 'Publications Supported',
                items: ['Phase I–III trial manuscripts', 'Real-world evidence manuscripts', 'Review articles', 'Meta-analyses', 'Conference abstracts', 'Posters']
            }
        ]
    },
    {
        id: 'diabetes',
        title: 'DIABETES & METABOLIC DISEASES',
        icon: Activity,
        description: 'Cytogenex supports scientific publications in diabetes and metabolic disorders across clinical trials and real-world studies. Our writers understand glycemic endpoints, cardiometabolic outcomes, and diabetes management guidelines.',
        sections: [
            {
                heading: 'Conditions Supported',
                items: ['Type 1 diabetes', 'Type 2 diabetes', 'Prediabetes', 'Obesity', 'Dyslipidemia', 'Metabolic syndrome', 'Non-alcoholic fatty liver disease']
            },
            {
                heading: 'Treatment Areas',
                items: ['Insulin therapies', 'Oral antidiabetics', 'GLP-1 receptor agonists', 'SGLT2 inhibitors', 'Combination therapies']
            },
            {
                heading: 'Scientific Expertise',
                items: ['HbA1c endpoints', 'Continuous glucose monitoring', 'Cardiovascular outcomes trials', 'Weight reduction studies', 'Treatment adherence studies', 'Real-world evidence studies']
            },
            {
                heading: 'Publications Supported',
                items: ['Clinical trial manuscripts', 'Observational studies', 'Device studies', 'Review manuscripts']
            }
        ]
    },
    {
        id: 'cardiovascular',
        title: 'CARDIOVASCULAR',
        icon: Heart,
        description: 'Cytogenex supports cardiovascular publications across prevention and treatment of cardiovascular diseases. Our writers understand cardiovascular endpoints and risk reduction strategies.',
        sections: [
            {
                heading: 'Conditions Supported',
                items: ['Hypertension', 'Coronary artery disease', 'Acute coronary syndrome', 'Heart failure', 'Atrial fibrillation', 'Stroke prevention', 'Peripheral artery disease']
            },
            {
                heading: 'Treatment Areas',
                items: ['Anticoagulants', 'Antiplatelets', 'Lipid-lowering therapies', 'Antihypertensive therapies', 'Device therapies']
            },
            {
                heading: 'Scientific Expertise',
                items: ['Major adverse cardiovascular events (MACE)', 'Cardiovascular outcomes trials', 'Risk modeling', 'Survival analysis', 'Safety analysis']
            },
            {
                heading: 'Publications Supported',
                items: ['Clinical trial manuscripts', 'Real-world studies', 'Meta-analyses', 'Literature reviews']
            }
        ]
    },
    {
        id: 'infectious',
        title: 'INFECTIOUS DISEASES',
        icon: ShieldAlert,
        description: 'Cytogenex supports publications across infectious diseases and vaccine programs.',
        sections: [
            {
                heading: 'Diseases Supported',
                items: ['COVID-19', 'Influenza', 'Tuberculosis', 'Hepatitis B and C', 'HIV', 'Dengue', 'Malaria', 'Bacterial infections']
            },
            {
                heading: 'Expertise Areas',
                items: ['Vaccine immunogenicity studies', 'Epidemiology studies', 'Public health studies', 'Antimicrobial resistance', 'Safety studies']
            }
        ]
    },
    {
        id: 'neurology',
        title: 'NEUROLOGY',
        icon: Brain,
        description: 'Cytogenex supports publications across neurological and neurodegenerative diseases.',
        sections: [
            {
                heading: 'Diseases Supported',
                items: ['Alzheimer\'s disease', 'Parkinson\'s disease', 'Epilepsy', 'Multiple sclerosis', 'Stroke', 'Migraine', 'Neuropathic pain']
            },
            {
                heading: 'Expertise Areas',
                items: ['Cognitive endpoints', 'Imaging endpoints', 'Functional outcomes', 'Quality-of-life measures']
            }
        ]
    },
    {
        id: 'respiratory',
        title: 'RESPIRATORY',
        icon: Wind,
        description: 'Cytogenex supports respiratory disease publications.',
        sections: [
            {
                heading: 'Diseases Supported',
                items: ['Asthma', 'COPD', 'Pulmonary fibrosis', 'Interstitial lung disease', 'Pneumonia']
            },
            {
                heading: 'Expertise Areas',
                items: ['Lung function endpoints', 'Spirometry endpoints', 'Patient-reported outcomes', 'Device studies']
            }
        ]
    },
    {
        id: 'immunology',
        title: 'IMMUNOLOGY',
        icon: Shield,
        description: 'Cytogenex supports publications across autoimmune and inflammatory diseases.',
        sections: [
            {
                heading: 'Diseases Supported',
                items: ['Rheumatoid arthritis', 'Psoriasis', 'Lupus', 'Ankylosing spondylitis', 'Inflammatory bowel disease']
            },
            {
                heading: 'Expertise Areas',
                items: ['Biologic therapies', 'Biosimilars', 'Immunomodulators', 'Disease activity scoring']
            }
        ]
    }
];

export default function OurExpertise() {
    const [activeTab, setActiveTab] = useState(expertiseCategories[0].id);

    return (
        <section id="expertise" className="py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8 max-w-[1240px]">
                <div className="text-left md:text-center mb-12 md:mb-16">
                    <h4 className="text-[#1796CF] font-bold text-base md:text-lg mb-3 tracking-wide uppercase">Therapeutic Focus</h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1521] mb-6 tracking-tight text-left md:text-center">
                        <span className="text-[#1796CF]">Therapeutic</span> Expertise
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left: Navigation Tabs */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        {expertiseCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 border-2 text-left
                                    ${activeTab === category.id
                                        ? 'border-[#1796CF] bg-[#1796CF]/5 shadow-sm'
                                        : 'border-transparent hover:bg-gray-50 text-gray-500'}`}
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                                    ${activeTab === category.id ? 'bg-[#1796CF] text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <span className={`font-bold tracking-tight uppercase text-sm ${activeTab === category.id ? 'text-[#0B1521]' : ''}`}>
                                    {category.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Right: Content Area */}
                    <div className="w-full lg:w-2/3">
                        {expertiseCategories.map((category) => (
                            category.id === activeTab && (
                                <div
                                    key={category.id}
                                    className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-[#1796CF]/10 rounded-full flex items-center justify-center shrink-0">
                                            <category.icon className="w-8 h-8 text-[#1796CF]" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-[#0B1521] uppercase">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#5B5B5B] text-lg leading-relaxed mb-10 font-medium">
                                        {category.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                        {category.sections.map((section, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-[16px] font-bold text-[#0B1521] mb-4 pb-2 border-b border-gray-100 uppercase tracking-wide">
                                                    {section.heading}
                                                </h4>
                                                <ul className="space-y-3">
                                                    {section.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex items-start text-[#5B5B5B] text-sm md:text-base">
                                                            <div className="w-2 h-2 rounded-full bg-[#1796CF] mt-2.5 mr-3 shrink-0" />
                                                            <span className="leading-tight">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
