"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart2, RefreshCw, Share2, Info } from 'lucide-react';
import { Sport, StrategyArchetype, GameEvent } from '@/types/game';
import ShareModal from './ShareModal';

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
    const [showShare, setShowShare] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-12">
            <ShareModal
                isOpen={showShare}
                onClose={() => setShowShare(false)}
                score={score}
                strategy={strategy}
            />

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

                    <div className="space-y-6">
                        {history.map((event, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">
                                            Scenario {index + 1}: {event.decision}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {event.outcome}
                                        </p>
                                    </div>
                                </div>

                                {/* Deep 5W Analysis */}
                                {event.analysis && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5 text-sm">
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                <span className="text-gold font-bold w-12">WHAT:</span>
                                                <span className="text-gray-300">{event.analysis.what}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-gold font-bold w-12">WHY:</span>
                                                <span className="text-gray-300">{event.analysis.why}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-gold font-bold w-12">WHO:</span>
                                                <span className="text-gray-300">{event.analysis.who}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                <span className="text-gold font-bold w-12">WHEN:</span>
                                                <span className="text-gray-300">{event.analysis.when}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-gold font-bold w-12">HOW:</span>
                                                <span className="text-gray-300">{event.analysis.how}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
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

                <button
                    onClick={() => setShowShare(true)}
                    className="px-8 py-3 rounded-xl bg-gold hover:bg-amber-400 text-black font-bold flex items-center gap-2 transition-all shadow-lg shadow-gold/20"
                >
                    <Share2 className="w-5 h-5" />
                    Share Results
                </button>
            </motion.div>
        </div>
    );
}
