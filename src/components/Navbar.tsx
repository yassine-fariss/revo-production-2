import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-widest text-white">
                    REVO<span className="text-brand-gold">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-sm uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.home')}</Link>
                    <Link to="/services" className="text-sm uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.services')}</Link>
                    <Link to="/about" className="text-sm uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.about')}</Link>
                    <Link to="/contact" className="text-sm uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.contact')}</Link>

                    {/* Language Switcher */}
                    <div className="relative group">
                        <button className="flex items-center space-x-1 text-sm hover:text-brand-gold transition-colors">
                            <Globe className="w-4 h-4" />
                            <span className="uppercase">{i18n.language}</span>
                        </button>
                        <div className="absolute right-0 mt-2 w-24 bg-black border border-brand-gold/30 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-gold/20 hover:text-brand-gold">FR</button>
                            <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-gold/20 hover:text-brand-gold">EN</button>
                            <button onClick={() => changeLanguage('ar')} className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-gold/20 hover:text-brand-gold">AR</button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white hover:text-brand-gold"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 py-6 px-6 flex flex-col space-y-6">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.home')}</Link>
                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.services')}</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.about')}</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-wide hover:text-brand-gold transition-colors">{t('nav.contact')}</Link>

                    <div className="flex space-x-4 pt-4 border-t border-white/10">
                        <button onClick={() => { changeLanguage('fr'); setIsMobileMenuOpen(false); }} className={`uppercase ${i18n.language === 'fr' ? 'text-brand-gold' : 'text-white'}`}>FR</button>
                        <button onClick={() => { changeLanguage('en'); setIsMobileMenuOpen(false); }} className={`uppercase ${i18n.language === 'en' ? 'text-brand-gold' : 'text-white'}`}>EN</button>
                        <button onClick={() => { changeLanguage('ar'); setIsMobileMenuOpen(false); }} className={`uppercase ${i18n.language === 'ar' ? 'text-brand-gold' : 'text-white'}`}>AR</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
