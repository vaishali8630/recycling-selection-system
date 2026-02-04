import { Container, Title } from '@mantine/core';
import Leaderboard from './components/Leaderboard';
import SkillHeatmap from './components/SkillHeatmap';
import CandidateCard from './components/CandidateCard';

import { candidates } from './data/candidates';
import { aiScores } from './data/aiScores';

const scoredCandidates = aiScores(candidates);

export default function App() {
  return (
    <Container size="lg">
      <Title order={2} mb="md">
        Recycling Production Line Manager Dashboard
      </Title>

      {/* Leaderboard */}
      <Leaderboard candidates={scoredCandidates} />

      {/* Heatmap */}
      <SkillHeatmap candidates={scoredCandidates} />

      {/* Candidate Cards */}
      <Title order={3} mt="xl" mb="sm">
        Candidate Profiles
      </Title>

      {scoredCandidates.map(candidate => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
        />
      ))}
    </Container>
  );
}
