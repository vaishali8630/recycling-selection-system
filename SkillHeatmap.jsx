import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SkillHeatmap({ candidates }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={candidates}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="crisis" fill="#8884d8" />
        <Bar dataKey="sustainability" fill="#82ca9d" />
        <Bar dataKey="motivation" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}
