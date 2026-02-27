import AnimatedSection from '../../components/AnimatedSection';
import { ExternalLink, MonitorSmartphone } from 'lucide-react';

export default function WebDesign() {
    return (
        <div className="min-h-screen bg-[#050505] pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Web Design</h1>
                        <div className="w-24 h-1 bg-brand-gold mb-6" />
                        <p className="text-xl text-white/60 leading-relaxed">
                            Sites vitrines, e-commerce, portfolios. Des interfaces premium conçues pour convertir.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Web Design Grid */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[1, 2, 3, 4].map((i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="group relative">
                                {/* Mockup Container */}
                                <div className="relative aspect-[4/3] bg-neutral-900 rounded-t-xl overflow-hidden border border-white/10 mb-6 group-hover:border-brand-gold/30 transition-colors">
                                    <div className="absolute top-0 left-0 w-full h-8 bg-black border-b border-white/10 flex items-center px-4 space-x-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    </div>
                                    {/* Browser Content Simulated */}
                                    <div className="absolute inset-0 top-8 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center overflow-hidden">
                                        <MonitorSmartphone className="w-16 h-16 text-white/10 transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                            <a href="#" className="inline-flex items-center space-x-2 bg-brand-gold text-black px-6 py-3 font-medium hover:bg-white transition-colors">
                                                <span>Voir le projet</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">Projet Web {i}</h3>
                                    <div className="flex space-x-2">
                                        <span className="text-xs tracking-wider uppercase text-white/40 border border-white/10 px-3 py-1">React</span>
                                        <span className="text-xs tracking-wider uppercase text-white/40 border border-white/10 px-3 py-1">UI/UX</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </div>
    );
}
