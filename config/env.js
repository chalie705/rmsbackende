require('dotenv').config();
module.exports = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || '*',
  dbUrl: process.env.DATABASE_URL
};