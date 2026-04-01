
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require("./routes/userroutes");
const authroutes = require('./routes/authroutes')

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use user routes
app.use("/api",routes);
app.use('/api/auth', authroutes)

// PostgreSQL Connection Pool with dotfit schema
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Set search path to dotfit schema
pool.on('connect', async (client) => {
  await client.query('SET search_path TO dotfit');
});

// Test database connection
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
});

pool.connect()
  .then((client) => {
    client.query('SET search_path TO dotfit');
    client.release();
    console.log('✅ Database connected successfully to dotfit schema');
  })
  .catch(err => console.error('❌ Database connection failed:', err));


// GET - Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    schema: 'dotfit',
    timestamp: new Date().toISOString()
  });
});


// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

// Start server
const PORT = process.env.API_PORT || 5089;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Database: ${process.env.DB_NAME}`);
  console.log(`🔐 Schema: dotfit`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
