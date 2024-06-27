import { sql } from '@vercel/postgres';

import {
    Projects
} from './definitions'


export async function fetchProjects() {

    try {
        await new Promise ((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Projects>`SELECT * FROM projects`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
    throw new Error('Failed to fetch projects data.');
    }
    
}