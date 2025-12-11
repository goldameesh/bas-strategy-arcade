"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp, Shield, RefreshCcw, Lightbulb,
    Wallet, Globe, Cpu, Leaf, Handshake
} from 'lucide-react';
import { StrategyArchetype } from '@/types/game';
import { cn } from '@/lib/utils';

interface StrategyArchetypesProps {
    onSelect: (strategy: StrategyArchetype) => void;
}

export default function StrategyArchetypes({ onSelect }: StrategyArchetypesProps) {
    const strategies = [
        {
            id: 'aggressive-growth' as StrategyArchetype,
            title: 'Aggressive Growth',
            icon: TrendingUp,
            description: 'High risk, high reward. Prioritize market share and rapid expansion over profitability.',
            color: 'text-red-400',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20'
        },
        {
            id: 'defensive-consolidation' as StrategyArchetype,
            title: 'Defensive Consolidation',
            icon: Shield,
            description: 'Protect core assets. Optimize operations and build fortress balance sheets.',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20'
        },
        {
            id: 'turnaround' as StrategyArchetype,
            title: 'Turnaround',
            icon: RefreshCcw,
            description: 'Crisis management. Radical restructuring to save a failing entity.',
            color: 'text-orange-400',
            bg: 'bg-orange-500/10',
            border: 'border-orange-500/20'
        },
        {
            id: 'innovation-disruption' as StrategyArchetype,
            title: 'Innovation & Disruption',
            icon: Lightbulb,
            description: 'Change the game. Invest heavily in R&D to create new markets.',
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20'
        },
        {
            id: 'cost-leadership' as StrategyArchetype,
            title: 'Cost Leadership',
            icon: Wallet,
            description: 'Efficiency obsession. Win by being the lowest cost producer.',
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20'
        },
        {
            id: 'market-expansion' as StrategyArchetype,
            title: 'Market Expansion',
            icon: Globe,
            description: 'New frontiers. Enter new geographies and customer segments.',
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20'
        },
        {
            id: 'ai-transformation' as StrategyArchetype,
            title: 'AI-Led Transformation',
            icon: Cpu,
            description: 'Digital first. Rebuild the organization around AI and data.',
            color: 'text-indigo-400',
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/20'
        },
        {
            id: 'sustainability-esg' as StrategyArchetype,
            title: 'Sustainability & ESG',
            icon: Leaf,
            description: 'Long-term value. Win through ethical leadership and sustainability.',
            color: 'text-green-400',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20'
        },
        {
            id: 'ma-alliance' as StrategyArchetype,
            title: 'M&A / Alliance',
            icon: Handshake,
            description: 'Inorganic growth. Buy or partner to leapfrog competition.',
            color: 'text-pink-400',
            bg: 'bg-pink-500/10',
            border: 'border-pink-500/20'
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
                    Define Your Strategy
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Select the strategic archetype that defines your leadership style. This will shape how you respond to market shocks.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategies.map((strategy, index) => (
                    <motion.button
                        key={strategy.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => onSelect(strategy.id)}
                        className={cn(
                            "group relative p-6 rounded-xl text-left transition-all duration-300 hover:scale-[1.02]",
                            "glass-card border hover:shadow-lg",
                            strategy.border
                        )}
                    >
                        <div className={cn(
                            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                            strategy.bg,
                            strategy.color
                        )}>
                            <strategy.icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                            {strategy.title}
                        </h3>

                        <p className="text-sm text-gray-400 leading-relaxed">
                            {strategy.description}
                        </p>

                        <div className="absolute top-6 right-6 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                            <div className={cn("w-2 h-2 rounded-full", strategy.color.replace('text-', 'bg-'))} />
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
