import React from 'react';
import { Map, Target, Users, Lightbulb } from 'lucide-react';

export default function Vision() {
    return (
        <div className="min-h-screen bg-deep-bg text-foreground p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <Map className="w-16 h-16 text-gold mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
                        Vision Map
                    </h1>
                    <p className="text-xl text-gray-400">
                        Executive Strategy - BAS Strategy Arcade™
                    </p>
                </div>

                <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 grid gap-12">
                        <section className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Our Core Vision
                            </h2>
                            <p className="text-2xl text-gold font-light leading-relaxed">
                                "To democratize advanced strategy thinking for global leaders by turning it into a playable AI-powered simulation."
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-card p-6 rounded-xl border-t-4 border-gold">
                                <Target className="w-8 h-8 text-gold mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Why It Matters</h3>
                                <p className="text-gray-400">
                                    Leaders rarely get safe environments to test decisions. This platform gives them an unbiased, factual, AI-driven sandbox.
                                </p>
                            </div>

                            <div className="glass-card p-6 rounded-xl border-t-4 border-blue-500">
                                <Lightbulb className="w-8 h-8 text-blue-500 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Unique Value</h3>
                                <p className="text-gray-400">
                                    Sports metaphors + Strategy AI. Fully anonymous public access. Factuality-first engine.
                                </p>
                            </div>

                            <div className="glass-card p-6 rounded-xl border-t-4 border-emerald-500">
                                <Users className="w-8 h-8 text-emerald-500 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">User Benefit</h3>
                                <p className="text-gray-400">
                                    Learn strategy fast. Understand personal style. Explore alternatives safely.
                                </p>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-white/10">
                            <p className="text-gray-400">
                                Strengthens BAS's position as a global AI innovation advisory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
