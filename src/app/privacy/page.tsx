import React from 'react';
import { Shield, Lock, EyeOff } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-deep-bg text-foreground p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-400">
                        BAS Strategy Arcade™ - Version 1.0
                    </p>
                </div>

                <div className="glass-panel rounded-2xl p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <EyeOff className="w-6 h-6 text-gold" />
                            1. NO PERSONAL DATA
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We collect <strong>no personal information</strong>. You do not need to create an account, provide an email, or login to use this platform. Your session is entirely anonymous.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lock className="w-6 h-6 text-gold" />
                            2. WHAT WE PROCESS
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We only process anonymous gameplay data to generate the simulation:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Strategy choices (e.g., "Aggressive Growth")</li>
                            <li>Scenario responses</li>
                            <li>Non-identifiable analytics for system improvement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            3. COOKIES / LOCAL STORAGE
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We use local storage only to maintain your current game session state. This data resides on your device and is not permanently stored on our servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            4. THIRD-PARTY AI MODELS
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We use enterprise-grade AI models (Gemini, GPT, Claude) to generate scenarios. No personally identifiable information is ever sent to these providers.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
                        <p className="mb-2">Contact for Compliance Inquiries:</p>
                        <p className="text-gold">connect@bhramaastraadvisory.co</p>
                        <p>+971 50 409 0727</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
