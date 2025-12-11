import { Scenario } from '@/types/game';

export const scenarios: Scenario[] = [
    {
        id: 'market-shock',
        title: 'Market Shock: The Star Player Crisis',
        description: 'A key asset has suddenly become unavailable due to unforeseen circumstances. Competitors are circling.',
        sportContext: {
            football: 'Your star striker has demanded a transfer 2 days before the window closes. The press is leaking rumors.',
            cricket: 'Your captain has pulled out of the World Cup due to a "personal issue". The board is panicking.',
            tennis: 'You picked up a wrist injury in the semi-final warm-up. The Grand Slam final is tomorrow.'
        },
        options: [
            {
                id: 'aggressive',
                label: 'Attack the Narrative',
                riskLevel: 'high',
                archetypeAlignment: ['aggressive-growth', 'innovation-disruption'],
                analysis: {
                    what: "Seize control of the public narrative immediately.",
                    when: "Immediate action required (within 2 hours).",
                    why: "In a vacuum of information, rumors become facts. Aggressive transparency kills speculation.",
                    how: "Press conference + social media blitz. Frame the departure as a 'strategic refresh'.",
                    who: "CEO / Manager directly. No spokespersons."
                }
            },
            {
                id: 'defensive',
                label: 'Secure the Fort',
                riskLevel: 'low',
                archetypeAlignment: ['defensive-consolidation', 'cost-leadership'],
                analysis: {
                    what: "Internal stabilization and asset protection.",
                    when: "Over the next 48 hours.",
                    why: "Preserving team morale is more valuable than winning the PR war.",
                    how: "Closed-door meetings with key stakeholders. Secure backup options quietly.",
                    who: "HR Director / Team Captain."
                }
            },
            {
                id: 'pivot',
                label: 'Strategic Pivot',
                riskLevel: 'medium',
                archetypeAlignment: ['turnaround', 'market-expansion'],
                analysis: {
                    what: "Use the crisis to accelerate a tactical shift.",
                    when: "Immediate announcement of new direction.",
                    why: "A crisis is a terrible thing to waste. Use the disruption to break legacy patterns.",
                    how: "Announce a new 'Youth First' or 'Tech First' strategy that makes the lost asset irrelevant.",
                    who: "Strategy Director."
                }
            }
        ]
    },
    {
        id: 'regulatory-shift',
        title: 'Regulatory Shift: New Rules of Engagement',
        description: 'The governing body has introduced strict new compliance regulations effective immediately.',
        sportContext: {
            football: 'New Financial Fair Play rules cap your spending. You are currently 20% over budget.',
            cricket: 'ICC bans your team\'s primary bowling technique. You need a new strategy for the finals.',
            tennis: 'Tournament officials change the ball type to a slower, heavier variant that hurts your game.'
        },
        options: [
            {
                id: 'comply',
                label: 'Full Compliance & Adaptation',
                riskLevel: 'low',
                archetypeAlignment: ['sustainability-esg', 'defensive-consolidation'],
                analysis: {
                    what: "Immediate and total adherence to new standards.",
                    when: "Effective immediately.",
                    why: "Regulatory friction destroys long-term value. Compliance builds institutional trust.",
                    how: "Audit all systems. Retrain staff. Publicly endorse the new rules.",
                    who: "Compliance Officer."
                }
            },
            {
                id: 'innovate',
                label: 'Find the Loophole',
                riskLevel: 'high',
                archetypeAlignment: ['innovation-disruption', 'aggressive-growth'],
                analysis: {
                    what: "Exploit the grey areas of the new regulation.",
                    when: "During the transition period.",
                    why: "Rules are often imperfectly written. First-mover advantage goes to those who read the fine print.",
                    how: "Legal deep dive. Creative accounting / technical adjustments.",
                    who: "Legal Counsel / Technical Director."
                }
            },
            {
                id: 'transform',
                label: 'Rebuild the System',
                riskLevel: 'medium',
                archetypeAlignment: ['ai-transformation', 'turnaround'],
                analysis: {
                    what: "Overhaul the business model to make the regulation irrelevant.",
                    when: "Medium term (3-6 months).",
                    why: "Don't just survive the rule change; evolve beyond it.",
                    how: "Invest in automation or new revenue streams that aren't subject to the cap.",
                    who: "Chief Transformation Officer."
                }
            }
        ]
    },
    {
        id: 'tech-disruption',
        title: 'Tech Disruption: The Data Revolution',
        description: 'A competitor is using advanced AI analytics to predict your every move.',
        sportContext: {
            football: 'Opponents are using AI to decode your tactical setups. You are losing the midfield battle.',
            cricket: 'Rival teams have AI-driven field placements that neutralize your best batters.',
            tennis: 'Your opponent is using real-time biometric data to exploit your fatigue levels.'
        },
        options: [
            {
                id: 'adopt',
                label: 'Embrace the Tech',
                riskLevel: 'medium',
                archetypeAlignment: ['ai-transformation', 'innovation-disruption'],
                analysis: {
                    what: "Counter-invest in superior AI capabilities.",
                    when: "Immediate procurement.",
                    why: "In an arms race, parity is the minimum requirement for survival.",
                    how: "Partner with a tech firm. Hire data scientists.",
                    who: "CTO / Data Head."
                }
            },
            {
                id: 'human',
                label: 'Trust Instinct & Experience',
                riskLevel: 'high',
                archetypeAlignment: ['cost-leadership', 'turnaround'],
                analysis: {
                    what: "Double down on human intuition and unpredictability.",
                    when: "Ongoing.",
                    why: "AI models train on past data. They struggle with true novelty and chaos.",
                    how: "Encourage creative freedom. Remove rigid tactical structures.",
                    who: "Head Coach / Creative Director."
                }
            },
            {
                id: 'partner',
                label: 'Acquire Capability',
                riskLevel: 'low',
                archetypeAlignment: ['ma-alliance', 'market-expansion'],
                analysis: {
                    what: "Buy the competitor or a similar tech provider.",
                    when: "As soon as due diligence allows.",
                    why: "If you can't build it, buy it. Speed to market is critical.",
                    how: "M&A activity. Strategic alliance.",
                    who: "Head of M&A."
                }
            }
        ]
    }
];
