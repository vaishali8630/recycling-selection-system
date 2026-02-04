import { Card, Text, Badge, Group, Stack } from '@mantine/core';

export default function CandidateCard({ candidate }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
      <Stack spacing="xs">
        <Text fw={600} size="lg">
          {candidate.name}
        </Text>

        <Text size="sm" c="dimmed">
          Experience: {candidate.experience} years
        </Text>

        <Group spacing="xs">
          {candidate.skills.map((skill, index) => (
            <Badge key={index} color="green" variant="light">
              {skill}
            </Badge>
          ))}
        </Group>

        <Text size="sm">
          Crisis: {candidate.crisis} | Sustainability: {candidate.sustainability} | Motivation: {candidate.motivation}
        </Text>
      </Stack>
    </Card>
  );
}
