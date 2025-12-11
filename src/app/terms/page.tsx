import React from 'react';
import { FileText, AlertTriangle, Info } from 'lucide-react';

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-deep-bg text-foreground p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <FileText className="w-16 h-16 text-gold mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
                        Terms of Use
                    </h1>
                    <p className="text-xl text-gray-400">
                        BAS Strategy Arcade™ - Version 1.0
                    </p>
                </div>

                <div className="glass-panel rounded-2xl p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Info className="w-6 h-6 text-gold" />
                            1. EDUCATIONAL PURPOSE
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            This platform is a strategy simulation game designed for educational and leadership development purposes only. It does not constitute legal, financial, or investment advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-gold" />
                            2. AI TRANSPARENCY
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We use advanced Artificial Intelligence to generate scenarios and feedback. While we strive for accuracy:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>The system may occasionally generate plausible but incorrect information.</li>
                            <li>Uncertain information will be flagged with: <span className="text-red-400 font-bold">"This is not Factually correct."</span></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            3. RESPONSIBILITY
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Users maintain full responsibility for any real-world decisions made based on insights gained from this simulation. Bhramaastra Advisory Services is not liable for any outcomes resulting from the use of this tool.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            4. INTELLECTUAL PROPERTY
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            All content, game mechanics, strategy archetypes, and underlying logic belong to <strong>Bhramaastra Advisory Services</strong>.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
                        <p className="mb-2">Bhramaastra Advisory Services</p>
                        <p className="text-gold">connect@bhramaastraadvisory.co</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
