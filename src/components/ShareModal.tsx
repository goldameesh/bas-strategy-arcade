"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, Mail, FileText, Download, Check } from 'lucide-react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    score: number;
    strategy: string;
}

export default function ShareModal({ isOpen, onClose, score, strategy }: ShareModalProps) {
    const [copied, setCopied] = React.useState(false);

    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    const handleEmail = () => {
        const subject = `My Strategy Profile: ${strategy}`;
        const body = `I just scored ${score}% alignment with the ${strategy} archetype on the BAS Strategy Arcade.\n\nPlay now: https://bas-strategy-arcade.vercel.app`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#0f172a] border border-gold/20 rounded-2xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-white mb-2">Share Results</h2>
                <p className="text-gray-400 mb-8">
                    Export your strategic profile analysis.
                </p>

                <div className="space-y-4">
                    <button
                        onClick={handleEmail}
                        className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between group transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold">Send via Email</div>
                                <div className="text-xs text-gray-400">Share with your team</div>
                            </div>
                        </div>
                    </button>

                    <button
                        onClick={handlePrint}
                        className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between group transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gold/20 text-gold">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold">Download PDF Report</div>
                                <div className="text-xs text-gray-400">Professional format</div>
                            </div>
                        </div>
                        <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
