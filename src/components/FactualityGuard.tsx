"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface FactualityGuardProps {
    isFactuallyCorrect: boolean;
    confidenceScore: number;
}

export default function FactualityGuard({ isFactuallyCorrect, confidenceScore }: FactualityGuardProps) {
    return (
        <AnimatePresence>
            {!isFactuallyCorrect && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3 mb-6"
                >
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-red-400 mb-1">
                            Factuality Warning
                        </h4>
                        <p className="text-sm text-gray-300">
                            "This is not Factually correct."
                        </p>
                        <p className="text-xs text-red-400/70 mt-1">
                            Confidence Score: {(confidenceScore * 100).toFixed(1)}%
                        </p>
                    </div>
                </motion.div>
            )}

            {isFactuallyCorrect && confidenceScore > 0.9 && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-2 mb-6"
                >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">
                        Verified by Gemini Factuality Engine
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
