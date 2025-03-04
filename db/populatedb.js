const { Client } = require("pg");
require("dotenv").config();

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR (500),
        user VARCHAR (15),
        added TIMESTAMPTZ DEFAULT now()
    );
    
    INSERT INTO messages (text, user, added) 
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
    connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  });

  await client.connect();
  await client.query(SQL, values);
  await client.end();
  console.log("Database populated!");
}

main();
