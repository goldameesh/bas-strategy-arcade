"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart2, RefreshCw, Share2 } from 'lucide-react';
import { Sport, StrategyArchetype, GameEvent } from '@/types/game';

interface DebriefPanelProps {
    sport: Sport;
    strategy: StrategyArchetype;
    history: GameEvent[];
    score: number;
    onRestart: () => void;
}

export default function DebriefPanel({
    sport,
    strategy,
    history,
    score,
    onRestart
}: DebriefPanelProps) {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border border-gold mb-6">
                    <CheckCircle className="w-10 h-10 text-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Simulation Complete
                </h2>
                <p className="text-xl text-gray-400">
                    Here is your strategic performance report.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Score Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel rounded-xl p-8 flex flex-col items-center justify-center text-center"
                >
                    <h3 className="text-gray-400 uppercase tracking-wider text-sm font-bold mb-2">
                        Strategy Alignment
                    </h3>
                    <div className="text-6xl font-bold text-gold mb-2">
                        {score}%
                    </div>
                    <p className="text-sm text-gray-400">
                        Consistency with {strategy.replace('-', ' ')}
                    </p>
                </motion.div>

                {/* Strategy Profile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel rounded-xl p-8 md:col-span-2"
                >
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <BarChart2 className="w-5 h-5 text-gold" />
                        Decision Analysis
                    </h3>

                    <div className="space-y-4">
                        {history.map((event, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">
                                        Scenario {index + 1} Decision
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        You chose to <span className="text-gold">{event.decision}</span>.
                                        This resulted in <span className="text-white">{event.outcome}</span>.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4"
            >
                <button
                    onClick={onRestart}
                    className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-2 transition-all"
                >
                    <RefreshCw className="w-5 h-5" />
                    Play Again
                </button>

                <button className="px-8 py-3 rounded-xl bg-gold hover:bg-amber-400 text-black font-bold flex items-center gap-2 transition-all shadow-lg shadow-gold/20">
                    <Share2 className="w-5 h-5" />
                    Share Results
                </button>
            </motion.div>
        </div>
    );
}
