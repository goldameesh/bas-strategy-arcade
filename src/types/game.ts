export type Sport = 'football' | 'cricket' | 'tennis';

export type StrategyArchetype =
    | 'aggressive-growth'
    | 'defensive-consolidation'
    | 'turnaround'
    | 'innovation-disruption'
    | 'cost-leadership'
    | 'market-expansion'
    | 'ai-transformation'
    | 'sustainability-esg'
    | 'ma-alliance';

export interface GameState {
    sport: Sport | null;
    strategy: StrategyArchetype | null;
    currentScenarioIndex: number;
    score: number;
    history: GameEvent[];
}

export interface GameEvent {
    scenarioId: string;
    decision: string;
    outcome: string;
    impact: {
        marketShare?: number;
        revenue?: number;
        reputation?: number;
        teamMorale?: number;
    };
    timestamp: number;
}

export interface Scenario {
    id: string;
    title: string;
    description: string;
    sportContext: {
        football: string;
        cricket: string;
        tennis: string;
    };
    options: {
        id: string;
        label: string;
        riskLevel: 'low' | 'medium' | 'high';
        archetypeAlignment: StrategyArchetype[];
    }[];
}
