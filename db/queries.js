const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE flagged = FALSE"
  );
  return rows;
}

async function insertMessage({ text, user, added }) {
  await pool.query(
    'INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3);',
    [text, user, added]
  );
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

module.exports = {
  getMessages,
  insertMessage,
  getMessageById,
};
