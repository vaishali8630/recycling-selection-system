import { Table } from '@mantine/core';

export default function Leaderboard({ candidates }) {
  const sorted = [...candidates].sort((a, b) => (b.crisis + b.sustainability + b.motivation) - (a.crisis + a.sustainability + a.motivation));
  const top10 = sorted.slice(0, 10);

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Crisis</th>
          <th>Sustainability</th>
          <th>Motivation</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {top10.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.crisis}</td>
            <td>{c.sustainability}</td>
            <td>{c.motivation}</td>
            <td>{c.crisis + c.sustainability + c.motivation}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
