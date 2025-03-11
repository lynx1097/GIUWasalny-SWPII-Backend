import { config } from 'dotenv';
import { Pool, PoolClient } from 'pg';
import { ApolloClient, InMemoryCache } from '@apollo/client';
config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: true,
    },
});
const gql = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
});

async function getPgVersion(): Promise<void> {
    const client: PoolClient = await pool.connect();
    try {
        const result = await client.query('SELECT version()');
        console.log(result.rows[0]);
    } finally {
        client.release();
    }
}

getPgVersion();

