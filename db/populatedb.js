const { Client } = require("pg");
const { argv } = require("node:process");

const CREATE_SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR (500),
        username VARCHAR (15),
        added TIMESTAMPTZ DEFAULT now(),
        flagged BOOLEAN NOT NULL DEFAULT FALSE
    );
`;

const INSERT_SQL = `
    INSERT INTO messages (text, username, added) 
    VALUES
        ($1, $2, $3),
        ($4, $5, $6);
`;

const values = [
  "Hi there!",
  "Amando",
  new Date().toISOString(),
  "Hello World!",
  "Charles",
  new Date().toISOString(),
];

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  await client.query(CREATE_SQL);
  await client.query(INSERT_SQL, values);
  await client.end();
  console.log("Database populated!");
}

main();
