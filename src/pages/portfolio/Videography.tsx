import { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { Play, X } from 'lucide-react';

export default function Videography() {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-black pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Vidéographie</h1>
                        <div className="w-24 h-1 bg-brand-gold mb-6" />
                        <p className="text-xl text-white/60 leading-relaxed">
                            Découvrez nos dernières productions vidéo. Qualité cinématographique, storytelling percutant.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Video Grid */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div
                                className="group relative aspect-[16/9] bg-white/5 cursor-pointer overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-colors"
                                onClick={() => setSelectedVideo(i)}
                            >
                                {/* Simulated Thumbnail */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-16 h-16 rounded-full bg-brand-gold/90 text-black flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h3 className="text-white font-semibold text-lg">Projet Vidéo {i}</h3>
                                    <p className="text-brand-gold text-sm">Corporate / Événementiel</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Video Modal Player */}
            {selectedVideo !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-6 md:p-12">
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="w-full max-w-6xl aspect-[16/9] bg-black border border-white/10 relative shadow-2xl">
                        {/* The actual video player would go here, embedded from drive or self-hosted */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/30 flex-col space-y-4">
                            <Play className="w-16 h-16 opacity-50" />
                            <p>Lecteur vidéo pour le Projet {selectedVideo}</p>
                            <p className="text-xs text-brand-gold">(Simulation of Google Drive Video Player)</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
