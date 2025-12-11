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
                archetypeAlignment: ['aggressive-growth', 'innovation-disruption']
            },
            {
                id: 'defensive',
                label: 'Secure the Fort',
                riskLevel: 'low',
                archetypeAlignment: ['defensive-consolidation', 'cost-leadership']
            },
            {
                id: 'pivot',
                label: 'Strategic Pivot',
                riskLevel: 'medium',
                archetypeAlignment: ['turnaround', 'market-expansion']
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
                archetypeAlignment: ['sustainability-esg', 'defensive-consolidation']
            },
            {
                id: 'innovate',
                label: 'Find the Loophole',
                riskLevel: 'high',
                archetypeAlignment: ['innovation-disruption', 'aggressive-growth']
            },
            {
                id: 'transform',
                label: 'Rebuild the System',
                riskLevel: 'medium',
                archetypeAlignment: ['ai-transformation', 'turnaround']
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
                archetypeAlignment: ['ai-transformation', 'innovation-disruption']
            },
            {
                id: 'human',
                label: 'Trust Instinct & Experience',
                riskLevel: 'high',
                archetypeAlignment: ['cost-leadership', 'turnaround']
            },
            {
                id: 'partner',
                label: 'Acquire Capability',
                riskLevel: 'low',
                archetypeAlignment: ['ma-alliance', 'market-expansion']
            }
        ]
    }
];
