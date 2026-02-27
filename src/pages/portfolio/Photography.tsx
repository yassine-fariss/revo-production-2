import { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { Camera, X } from 'lucide-react';

export default function Photography() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-black pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Photographie</h1>
                        <div className="w-24 h-1 bg-brand-gold mb-6" />
                        <p className="text-xl text-white/60 leading-relaxed">
                            Immortalisons vos moments. Portraits professionnels, architecture, et photographie de produits.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            {/* Masonry / Grid */}
            <section className="container mx-auto px-6">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <AnimatedSection key={i} delay={i * 0.05}>
                            <div
                                className="group relative bg-white/5 cursor-pointer overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-colors break-inside-avoid"
                                style={{ height: `${200 + (i % 3) * 100}px` }}
                                onClick={() => setSelectedImage(i)}
                            >
                                {/* Simulated Image Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center bg-black/50 backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                                        <Camera className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Auto Lightbox Viewer */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
                        <X className="w-8 h-8" />
                    </div>
                    <div
                        className="w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-white/10 relative shadow-2xl flex items-center justify-center flex-col text-white/40"
                        style={{ aspectRatio: '3/4' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Camera className="w-16 h-16 mb-4 opacity-30" />
                        <p>Aperçu HD - Photo {selectedImage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
