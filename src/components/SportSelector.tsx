"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Activity, Target } from 'lucide-react';
import { Sport } from '@/types/game';
import { cn } from '@/lib/utils';

interface SportSelectorProps {
    onSelect: (sport: Sport) => void;
}

export default function SportSelector({ onSelect }: SportSelectorProps) {
    const sports = [
        {
            id: 'football' as Sport,
            title: 'Football Manager',
            icon: Trophy,
            description: 'Lead your club through league volatility. Manage talent, tactics, and transfer markets.',
            color: 'from-blue-600 to-blue-900'
        },
        {
            id: 'cricket' as Sport,
            title: 'Cricket Captain',
            icon: Activity,
            description: 'Master the long game. Balance aggression with preservation across changing conditions.',
            color: 'from-emerald-600 to-emerald-900'
        },
        {
            id: 'tennis' as Sport,
            title: 'Tennis Pro',
            icon: Target,
            description: 'Solo strategy execution. Adapt instantly to opponent weakness and surface speed.',
            color: 'from-amber-600 to-amber-900'
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
                    Choose Your Arena
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Select the sport that best matches your leadership context. The rules of the game will mirror your strategic reality.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sports.map((sport, index) => (
                    <motion.button
                        key={sport.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onSelect(sport.id)}
                        className="group relative h-96 w-full text-left"
                    >
                        <div className={cn(
                            "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20 transition-opacity duration-500 group-hover:opacity-30",
                            sport.color
                        )} />

                        <div className="absolute inset-0 rounded-2xl glass-card border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 group-hover:scale-[1.02] group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/50 transition-colors">
                                    <sport.icon className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                                    {sport.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {sport.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center text-sm font-medium text-gold opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                ENTER ARENA <span className="ml-2">→</span>
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
