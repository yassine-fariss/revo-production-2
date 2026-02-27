import { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { Play, X } from 'lucide-react';

export default function MontageReels() {
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-black pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Montage & Reels</h1>
                        <div className="w-24 h-1 bg-brand-gold mb-6" />
                        <p className="text-xl text-white/60 leading-relaxed">
                            Formats courts, dynamiques et optimisés. L'impact maximal pour vos réseaux sociaux.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Reels Grid (Vertical aspect ratios preferred) */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div
                                className="group relative aspect-[9/16] bg-white/5 cursor-pointer overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-colors"
                                onClick={() => setSelectedVideo(i)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center transform group-hover:scale-110 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-black transition-all">
                                        <Play className="w-5 h-5 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                    <p className="text-white font-medium text-sm md:text-base mb-1 truncate">Reel Social {i}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Video Modal Player - Mobile Optimized View */}
            {selectedVideo !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="w-full max-w-sm aspect-[9/16] bg-neutral-900 border border-white/10 relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                        <div className="absolute inset-0 flex items-center justify-center text-white/30 flex-col space-y-4">
                            <Play className="w-12 h-12 opacity-50" />
                            <p className="text-sm">Lecteur Reel {selectedVideo}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
