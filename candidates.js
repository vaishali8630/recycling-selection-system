// Mock 40 candidates
export const candidates = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  experience: Math.floor(Math.random() * 10) + 1, // 1-10 years
  skills: ['Teamwork', 'Sustainability', 'Crisis Management'].sort(() => 0.5 - Math.random()),
}));
