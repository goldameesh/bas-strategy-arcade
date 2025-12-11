"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SportSelector from './SportSelector';
import StrategyArchetypes from './StrategyArchetypes';
import ScenarioSimulator from './ScenarioSimulator';
import DebriefPanel from './DebriefPanel';
import { Sport, StrategyArchetype, GameState, GameEvent } from '@/types/game';
import { scenarios } from '@/lib/scenarios';

export default function GameEngine() {
    const [gameState, setGameState] = useState<GameState>({
        sport: null,
        strategy: null,
        currentScenarioIndex: 0,
        score: 0,
        history: []
    });

    const handleSportSelect = (sport: Sport) => {
        setGameState(prev => ({ ...prev, sport }));
    };

    const handleStrategySelect = (strategy: StrategyArchetype) => {
        setGameState(prev => ({ ...prev, strategy }));
    };

    const handleScenarioDecision = (decisionId: string) => {
        const currentScenario = scenarios[gameState.currentScenarioIndex];
        const selectedOption = currentScenario.options.find(opt => opt.id === decisionId);

        if (!selectedOption || !gameState.strategy) return;

        // Calculate score impact based on alignment
        const isAligned = selectedOption.archetypeAlignment.includes(gameState.strategy);
        const scoreImpact = isAligned ? 20 : 5;

        const event: GameEvent = {
            scenarioId: currentScenario.id,
            decision: selectedOption.label,
            outcome: isAligned
                ? "Your strategic consistency paid off. Stakeholders are aligned."
                : "The decision caused friction with your stated strategy.",
            impact: {
                reputation: isAligned ? 10 : -5
            },
            timestamp: Date.now()
        };

        setGameState(prev => ({
            ...prev,
            score: prev.score + scoreImpact,
            history: [...prev.history, event],
            currentScenarioIndex: prev.currentScenarioIndex + 1
        }));
    };

    const handleRestart = () => {
        setGameState({
            sport: null,
            strategy: null,
            currentScenarioIndex: 0,
            score: 0,
            history: []
        });
    };

    // Render Logic
    return (
        <div className="min-h-screen w-full bg-deep-bg text-foreground relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-royal-blue/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                <AnimatePresence mode="wait">
                    {/* Step 1: Sport Selection */}
                    {!gameState.sport && (
                        <motion.div
                            key="sport-selector"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <SportSelector onSelect={handleSportSelect} />
                        </motion.div>
                    )}

                    {/* Step 2: Strategy Selection */}
                    {gameState.sport && !gameState.strategy && (
                        <motion.div
                            key="strategy-selector"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <StrategyArchetypes onSelect={handleStrategySelect} />
                        </motion.div>
                    )}

                    {/* Step 3: Simulation Loop */}
                    {gameState.sport && gameState.strategy && gameState.currentScenarioIndex < scenarios.length && (
                        <motion.div
                            key={`scenario-${gameState.currentScenarioIndex}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                        >
                            <ScenarioSimulator
                                scenario={scenarios[gameState.currentScenarioIndex]}
                                sport={gameState.sport}
                                strategy={gameState.strategy}
                                onDecision={handleScenarioDecision}
                            />
                        </motion.div>
                    )}

                    {/* Step 4: Debrief */}
                    {gameState.sport && gameState.strategy && gameState.currentScenarioIndex >= scenarios.length && (
                        <motion.div
                            key="debrief"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <DebriefPanel
                                sport={gameState.sport}
                                strategy={gameState.strategy}
                                history={gameState.history}
                                score={gameState.score}
                                onRestart={handleRestart}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
