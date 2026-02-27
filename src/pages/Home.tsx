import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Video, Camera, Scissors, MonitorSmartphone, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-60" />

                <div className="container relative z-10 mx-auto px-6 text-center">
                    <AnimatedSection delay={0.2}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-8">
                            Production Vidéo <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">
                                & Création Digitale
                            </span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-12">
                            À Casablanca.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.6}>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link to="/portfolio/videography">
                                <Button variant="primary">
                                    {t('hero.btn.portfolio')}
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline">
                                    {t('hero.btn.contact')}
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nos Expertises</h2>
                            <div className="w-24 h-1 bg-brand-gold mx-auto" />
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            title="Vidéographie"
                            description="Des productions cinématographiques pour vos événements, publicités et communication d'entreprise."
                            icon={<Video className="w-10 h-10" />}
                            linkTo="/portfolio/videography"
                            delay={0.1}
                        />
                        <ServiceCard
                            title="Photographie"
                            description="Capturer l'essence de votre marque à travers des portraits, produits et reportages photo de haute qualité."
                            icon={<Camera className="w-10 h-10" />}
                            linkTo="/portfolio/photography"
                            delay={0.2}
                        />
                        <ServiceCard
                            title="Montage & Reels"
                            description="Montage dynamique et adapté aux formats courts pour les réseaux sociaux."
                            icon={<Scissors className="w-10 h-10" />}
                            linkTo="/portfolio/montage-reels"
                            delay={0.3}
                        />
                        <ServiceCard
                            title="Web Design"
                            description="Création de sites vitrines professionnels, élégants et performants."
                            icon={<MonitorSmartphone className="w-10 h-10" />}
                            linkTo="/portfolio/web-design"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Portfolio Preview Section */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Dernières Réalisations</h2>
                                <div className="w-24 h-1 bg-brand-gold" />
                            </div>
                            <Link to="/portfolio/videography" className="hidden md:inline-flex text-brand-gold hover:text-white transition-colors items-center space-x-2">
                                <span>Tout voir</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="group relative aspect-video bg-white/5 overflow-hidden cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 transform group-hover:scale-105 transition-transform duration-700">
                                        <Video className="w-16 h-16" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <h4 className="text-white font-semibold text-lg">Projet {i}</h4>
                                        <p className="text-brand-gold text-sm">Vidéographie</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <Link to="/portfolio/videography" className="inline-flex text-brand-gold hover:text-white transition-colors items-center space-x-2">
                            <span>Tout voir</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pourquoi Nous Choisir</h2>
                            <div className="w-24 h-1 bg-brand-gold mx-auto" />
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Qualité Cinématographique", desc: "Notre équipement nous permet de délivrer un rendu haut de gamme." },
                            { title: "Équipe Experte", desc: "Des professionnels passionnés par l'image et l'innovation digitale." },
                            { title: "Accompagnement Sur Mesure", desc: "Nous adaptons nos services à vos besoins spécifiques." }
                        ].map((feature, i) => (
                            <AnimatedSection key={i} delay={0.1 * i} className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-brand-gold" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
