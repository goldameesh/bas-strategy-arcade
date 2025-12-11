"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ArrowRight, Shield, Zap, Activity } from 'lucide-react';
import { Scenario, Sport, StrategyArchetype } from '@/types/game';
import { cn } from '@/lib/utils';

interface ScenarioSimulatorProps {
    scenario: Scenario;
    sport: Sport;
    strategy: StrategyArchetype;
    onDecision: (decisionId: string) => void;
}

export default function ScenarioSimulator({
    scenario,
    sport,
    strategy,
    onDecision
}: ScenarioSimulatorProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const getRiskIcon = (level: 'low' | 'medium' | 'high') => {
        switch (level) {
            case 'low': return <Shield className="w-4 h-4 text-emerald-400" />;
            case 'medium': return <Activity className="w-4 h-4 text-amber-400" />;
            case 'high': return <Zap className="w-4 h-4 text-red-400" />;
        }
    };

    const getRiskLabel = (level: 'low' | 'medium' | 'high') => {
        switch (level) {
            case 'low': return 'Conservative';
            case 'medium': return 'Balanced';
            case 'high': return 'Aggressive';
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                {/* Header */}
                <div className="relative z-10 mb-8">
                    <div className="flex items-center gap-3 mb-4 text-gold">
                        <AlertTriangle className="w-6 h-6" />
                        <span className="text-sm font-bold tracking-wider uppercase">Critical Incident</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {scenario.title}
                    </h2>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-6">
                        <p className="text-lg text-gray-200 leading-relaxed">
                            "{scenario.sportContext[sport]}"
                        </p>
                    </div>

                    <p className="text-gray-400 italic">
                        Strategic Context: {scenario.description}
                    </p>
                </div>

                {/* Options */}
                <div className="relative z-10 grid gap-4">
                    {scenario.options.map((option) => (
                        <motion.button
                            key={option.id}
                            onClick={() => setSelectedOption(option.id)}
                            className={cn(
                                "w-full p-6 rounded-xl text-left border transition-all duration-300",
                                selectedOption === option.id
                                    ? "bg-gold/10 border-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                            )}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-lg text-white">
                                    {option.label}
                                </span>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/10">
                                    {getRiskIcon(option.riskLevel)}
                                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                                        {getRiskLabel(option.riskLevel)}
                                    </span>
                                </div>
                            </div>

                            {option.archetypeAlignment.includes(strategy) && (
                                <div className="text-xs text-gold flex items-center gap-1 mt-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                                    Aligned with your strategy
                                </div>
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Action Button */}
                {selectedOption && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 flex justify-end"
                    >
                        <button
                            onClick={() => onDecision(selectedOption)}
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-black font-bold text-lg shadow-lg hover:shadow-gold/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            EXECUTE DECISION
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
