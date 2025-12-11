import React from 'react';
import { Server, Shield, Database, Cpu } from 'lucide-react';

export default function Architecture() {
    return (
        <div className="min-h-screen bg-deep-bg text-foreground p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <Server className="w-16 h-16 text-gold mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
                        Global Architecture
                    </h1>
                    <p className="text-xl text-gray-400">
                        System Blueprint - Version 1.0
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-blue-400" />
                            Frontend & AI Layer
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-gold">•</span>
                                Next.js 14 (React Server Components)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gold">•</span>
                                Gemini API (Factuality Engine)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gold">•</span>
                                Multi-Model Routing (GPT-5, Claude, Grok)
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card p-8 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-emerald-400" />
                            Security & Compliance
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-gold">•</span>
                                Anonymous Session Tokens
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gold">•</span>
                                No PII Collection (GDPR/PDPL Compliant)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-gold">•</span>
                                Factuality Guardrails
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="glass-panel rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Technical Specification
                    </h2>
                    <div className="prose prose-invert max-w-none">
                        <pre className="bg-black/30 p-6 rounded-xl overflow-x-auto text-sm text-gray-300 font-mono border border-white/10">
                            {`TITLE: Global Architecture Overview – BAS Strategy Arcade™
VERSION: 1.0
AUTHOR: Amish Shah – Bhramaastra Advisory Services

1. PLATFORM PURPOSE
Provide a safe, factual, AI-assisted strategy simulation environment without collecting personal data.

2. HIGH-LEVEL SYSTEM ARCHITECTURE
- Frontend: React/Next.js + Framer Motion
- Backend: Serverless, Stateless
- AI Layer: Gemini (factual), GPT/Claude (creative)
- Data Layer: No personal data, only anonymous events
- Security: WAF, rate limiting, no persistent identifiers

3. COMPLIANCE
- GDPR, UAE PDPL, CCPA
- EU AI Act transparency requirements
- ISO 42001 and NIST AI RMF principles

4. RISK MANAGEMENT
- Factuality guardrails
- "This is not Factually correct" enforcement
- Bias checks
- Explainability module`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
