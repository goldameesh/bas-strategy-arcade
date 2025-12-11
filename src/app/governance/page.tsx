"use client";

import React from 'react';
import { ShieldCheck, AlertOctagon, Activity, Lock } from 'lucide-react';

export default function Governance() {
    return (
        <div className="min-h-screen bg-deep-bg text-foreground p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Governance Dashboard
                        </h1>
                        <p className="text-gray-400">
                            BAS Oversight & Compliance Center
                        </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-sm font-bold">SYSTEM SECURE</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="glass-card p-6 rounded-xl">
                        <div className="text-gray-400 text-sm mb-1">Factuality Score</div>
                        <div className="text-3xl font-bold text-white">99.8%</div>
                        <div className="text-emerald-400 text-xs mt-2">Target met</div>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                        <div className="text-gray-400 text-sm mb-1">Bias Incidents</div>
                        <div className="text-3xl font-bold text-white">0</div>
                        <div className="text-emerald-400 text-xs mt-2">Last 24h</div>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                        <div className="text-gray-400 text-sm mb-1">Active Sessions</div>
                        <div className="text-3xl font-bold text-white">Anonymized</div>
                        <div className="text-blue-400 text-xs mt-2">Privacy Active</div>
                    </div>
                    <div className="glass-card p-6 rounded-xl">
                        <div className="text-gray-400 text-sm mb-1">Confessions Logged</div>
                        <div className="text-3xl font-bold text-white">12</div>
                        <div className="text-amber-400 text-xs mt-2">Review Required</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Confession Log */}
                    <div className="glass-panel rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <AlertOctagon className="w-5 h-5 text-amber-400" />
                            AI Confession Log
                        </h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 rounded-lg bg-black/30 border border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-mono text-gray-500">LOG-ID-{1000 + i}</span>
                                        <span className="text-xs text-amber-400">Uncertainty Flag</span>
                                    </div>
                                    <p className="text-sm text-gray-300">
                                        "System could not verify historical market data for 2023 Q4 with 100% certainty. Flagged as 'Not Factually Correct'."
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* System Health */}
                    <div className="glass-panel rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-blue-400" />
                            System Health & Compliance
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-400">GDPR Compliance Check</span>
                                    <span className="text-emerald-400">Passing</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-emerald-500" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-400">Bias Filter Efficacy</span>
                                    <span className="text-emerald-400">99.9%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[99.9%] bg-emerald-500" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-400">API Latency (Gemini)</span>
                                    <span className="text-blue-400">45ms</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[80%] bg-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                            <Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-blue-400 mb-1">Admin Access Only</h4>
                                <p className="text-xs text-gray-400">
                                    This dashboard is restricted to BAS oversight committee members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
