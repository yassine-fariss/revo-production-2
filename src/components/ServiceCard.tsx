import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    linkTo: string;
    delay?: number;
}

export default function ServiceCard({ title, description, icon, linkTo, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            className="group relative border border-white/10 bg-black/50 p-8 hover:border-brand-gold/50 transition-colors duration-500 overflow-hidden flex flex-col items-start h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-brand-gold mb-6">
                {icon}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-white/70 leading-relaxed mb-8 flex-grow">{description}</p>

            <Link
                to={linkTo}
                className="mt-auto inline-flex items-center text-sm font-medium tracking-wide text-white group-hover:text-brand-gold transition-colors"
            >
                <span>Découvrir</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
        </motion.div>
    );
}
