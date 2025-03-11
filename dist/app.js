"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const pg_1 = require("pg");
const client_1 = require("@apollo/client");
(0, dotenv_1.config)();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const pool = new pg_1.Pool({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: true,
    },
});
const gql = new client_1.ApolloClient({
    cache: new client_1.InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
});
async function getPgVersion() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT version()');
        console.log(result.rows[0]);
    }
    finally {
        client.release();
    }
}
getPgVersion();
//# sourceMappingURL=app.js.map