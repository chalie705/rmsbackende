const { Pool } = require('pg');
const { dbUrl } = require('./env');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

module.exports = {
  db: pool,
  connectDB: async () => {
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    client.release();
  }
};