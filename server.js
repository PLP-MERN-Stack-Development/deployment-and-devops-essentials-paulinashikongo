// src/server.js
require('dotenv').config();

const app = require('./app');
const { connectDB } = require('./db');

const PORT = process.env.PORT || 5001;

async function start() {
  try {
    // Connect to MongoDB (Atlas in production, local/in-memory in tests)
    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `✅ Server running on port ${PORT} (env: ${process.env.NODE_ENV || 'development'})`
      );
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

start();

