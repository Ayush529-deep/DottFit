require('dotenv').config(); // Load environment variables

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Handle pool errors to prevent app crashes
pool.on('error', (err) => {
  console.error('Unexpected DB pool error:', err);
});

// Optional: Test DB connection on startup
(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
})();

module.exports = pool;
