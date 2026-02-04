// generateCandidates.js
import mysql from 'mysql2/promise';
import { faker } from '@faker-js/faker';

async function main() {
  // 1️⃣ Connect to MySQL
  const connection = await mysql.createConnection({
    host: 'localhost',       // your DB host
    user: 'root',            // your DB username
    password: '',            // your DB password
    database: 'recycling_selection'
  });

  // 2️⃣ Generate 40 candidates
  const candidates = [];
  for (let i = 0; i < 40; i++) {
    const name = faker.name.firstName() + ' ' + faker.name.lastName();
    const experience = faker.datatype.number({ min: 1, max: 10 });
    const skills = faker.helpers.arrayElements(
      ['Teamwork', 'Sustainability', 'Crisis Management', 'Leadership', 'Communication'],
      faker.datatype.number({ min: 2, max: 4 })
    ).join(', ');

    candidates.push({ name, experience, skills });
  }

  // 3️⃣ Insert candidates into DB
  for (const c of candidates) {
    const [result] = await connection.execute(
      'INSERT INTO candidates (name, experience, skills) VALUES (?, ?, ?)',
      [c.name, c.experience, c.skills]
    );
    const candidateId = result.insertId;

    // 4️⃣ Generate random AI evaluation scores (1-10)
    const crisis = faker.datatype.number({ min: 1, max: 10 });
    const sustainability = faker.datatype.number({ min: 1, max: 10 });
    const motivation = faker.datatype.number({ min: 1, max: 10 });

    await connection.execute(
      'INSERT INTO evaluations (candidate_id, crisis_management, sustainability, team_motivation) VALUES (?, ?, ?, ?)',
      [candidateId, crisis, sustainability, motivation]
    );
  }

  console.log('✅ 40 candidates and evaluations inserted successfully!');
  await connection.end();
}

main().catch(err => console.error(err));
