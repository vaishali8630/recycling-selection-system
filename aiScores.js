export const aiScores = candidates => candidates.map(candidate => ({
  ...candidate,
  crisis: Math.floor(Math.random() * 10) + 1,
  sustainability: Math.floor(Math.random() * 10) + 1,
  motivation: Math.floor(Math.random() * 10) + 1,
}));
