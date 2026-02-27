import AnimatedSection from '../components/AnimatedSection';
import { Video, Camera, Scissors, MonitorSmartphone } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: 'videography',
            title: 'Vidéographie',
            desc: "Nous produisons des vidéos d'une esthétique cinématographique pour répondre à tous vos besoins de communication : publicités, films d'entreprise, couverture d'événements et clips musicaux.",
            icon: <Video className="w-16 h-16 text-brand-gold" />
        },
        {
            id: 'photography',
            title: 'Photographie',
            desc: "Notre équipe de photographes capture l'essence de votre marque. Des portraits professionnels aux shootings produits, chaque cliché est pensé pour raconter votre histoire.",
            icon: <Camera className="w-16 h-16 text-brand-gold" />
        },
        {
            id: 'montage',
            title: 'Montage & Reels',
            desc: "L'art du montage donne le rythme à vos images. Nous créons des vidéos dynamiques optimisées spécialement pour les réseaux sociaux (Reels, TikTok) garantissant l'engagement de votre audience.",
            icon: <Scissors className="w-16 h-16 text-brand-gold" />
        },
        {
            id: 'web-design',
            title: 'Web Design',
            desc: "Un site web doit être rapide, beau et convaincant. Nous concevons et développons des plateformes web modernes et réactives, entièrement optimisées pour vos objectifs commerciaux.",
            icon: <MonitorSmartphone className="w-16 h-16 text-brand-gold" />
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] pt-12 pb-24">
            <section className="container mx-auto px-6 mb-24">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nos <span className="text-brand-gold">Services</span></h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Une gamme complète de solutions créatives pour propulser votre marque. De la conception à la réalisation, notre agence vous accompagne dans vos projets digitaux.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto px-6 space-y-32">
                {services.map((service, index) => (
                    <AnimatedSection key={service.id} delay={0.1}>
                        <div className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-black/50 border border-white/10 flex items-center justify-center transform hover:rotate-3 transition-transform duration-500">
                                    <div className="absolute inset-0 border border-brand-gold/30 rotate-6" />
                                    {service.icon}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="flex items-center space-x-4">
                                    <span className="text-brand-gold font-mono text-xl opacity-50">0{index + 1}</span>
                                    <div className="h-px bg-white/20 w-12" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                                <p className="text-lg text-white/70 leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
}
