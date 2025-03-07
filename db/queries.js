const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE flagged = FALSE ORDER BY added DESC"
  );
  return rows;
}

async function insertMessage({ text, username, added }) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);",
    [text, username, added]
  );
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

async function flagMessageById(messageId) {
  await pool.query("UPDATE messages SET flagged = TRUE WHERE id = $1", [
    messageId,
  ]);
}

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );
  return rows;
}

async function filterMessages(keyword, flagged) {
  if (flagged) {
    // Get all messages included flagged
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE username LIKE '%' || $1 || '%'",
      [keyword]
    );
    return rows.length > 0
      ? rows
      : [`No messages found for keyword "${keyword}"`];
  } else {
    // Get only safe messages that are not flagged
    const { rows } = await pool.query(
      "SELECT * FROM messages WHERE username LIKE '%' || $1 || '%' AND flagged = FALSE",
      [keyword]
    );
    return rows.length > 0
      ? rows
      : [`No messages found for keyword "${keyword}"`];
  }
}

module.exports = {
  getMessages,
  insertMessage,
  getMessageById,
  flagMessageById,
  getAllMessages,
  filterMessages,
};
