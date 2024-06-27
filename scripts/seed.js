const { db } = require('@vercel/postgres');
const projectsData = require('../app/lib/placeholder-data');

async function seedProjects() {
    const client = await db.connect();
  
    try {
      await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS projects (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          description TEXT,
          image VARCHAR(255)
        );
      `;
      await client.query(createTableQuery);
      console.log(`Created "projects" table`);
  
      const insertProjectsQuery = `
        INSERT INTO projects (name, description, image)
        VALUES ($1, $2, $3)
        ON CONFLICT (id) DO NOTHING;
      `;
  
      for (const project of projectsData) {
        await client.query(insertProjectsQuery, [project.name, project.description, project.image]);
      }
  
      console.log(`Seeded ${projectsData.length} projects`);
    } catch (error) {
      console.error('Error seeding projects:', error);
      throw error;
    } finally {
      await client.end();
    }
  }
  
  seedProjects().catch(console.error);
  
