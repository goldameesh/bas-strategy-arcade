"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';

interface HeroLandingProps {
    onStart: () => void;
}

export default function HeroLanding({ onStart }: HeroLandingProps) {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-bg text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-royal-blue/20 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] translate-y-1/2" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="text-sm font-medium text-gold tracking-wider uppercase">
                            Global Strategy Simulation
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        <span className="block text-white">Master the Art of</span>
                        <span className="text-gradient-gold">Strategic Leadership</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Where sports metaphors meet corporate strategy.
                        <br className="hidden md:block" />
                        Test your decision-making in a safe, AI-powered arena.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button
                            onClick={onStart}
                            className="group relative px-8 py-4 bg-gold hover:bg-amber-400 text-black font-bold text-lg rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center gap-3"
                        >
                            ENTER THE ARENA
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>

                        <a
                            href="/vision"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg rounded-xl transition-all flex items-center gap-3 backdrop-blur-sm"
                        >
                            Explore Vision
                        </a>
                    </div>
                </motion.div>

                {/* Feature Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20"
                >
                    <div className="glass-card p-6 rounded-xl text-left border-t-2 border-blue-500/50">
                        <Globe className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Global Context</h3>
                        <p className="text-gray-400 text-sm">
                            Scenarios adapted for international markets and diverse leadership challenges.
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-xl text-left border-t-2 border-gold/50">
                        <Zap className="w-8 h-8 text-gold mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">AI-Powered</h3>
                        <p className="text-gray-400 text-sm">
                            Dynamic simulations powered by Gemini & GPT-5 for realistic outcomes.
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-xl text-left border-t-2 border-emerald-500/50">
                        <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Safe Sandbox</h3>
                        <p className="text-gray-400 text-sm">
                            Experiment with high-stakes decisions without real-world risk.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
