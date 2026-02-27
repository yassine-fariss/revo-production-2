import { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { Maximize2, X } from 'lucide-react';

import photo1 from '../../assets/portfolio/photo-1.jpg';
import photo2 from '../../assets/portfolio/photo-2.jpg';
import photo3 from '../../assets/portfolio/photo-3.jpg';
import photo4 from '../../assets/portfolio/photo-4.jpg';
import photo5 from '../../assets/portfolio/photo-5.jpg';

export default function Photography() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const photos = [photo1, photo2, photo3, photo4, photo5];

    return (
        <div className="min-h-screen bg-black pt-12 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16 pt-12 md:pt-24">
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
                    {photos.map((photo, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div
                                className="group relative cursor-pointer overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-colors break-inside-avoid"
                                onClick={() => setSelectedImage(photo)}
                            >
                                <img
                                    src={photo}
                                    alt={`Portfolio ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 rounded-full border border-brand-gold text-brand-gold flex items-center justify-center bg-black/50 backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Lightbox Viewer */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 transition-all duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer bg-black/50 rounded-full p-2 z-50" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
                        <X className="w-8 h-8" />
                    </div>
                    <img
                        src={selectedImage}
                        alt="Aperçu HD"
                        className="max-w-full max-h-full object-contain shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
