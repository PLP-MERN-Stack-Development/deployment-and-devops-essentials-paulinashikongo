const mongoose = require('mongoose');

async function connectDB(uri) {
  const mongoUri = uri || process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('MONGO_URI not set');
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(mongoUri, {
    maxPoolSize: 10, // connection pooling for production
  });

  console.log('✅ MongoDB connected');
  return mongoose.connection;
}

module.exports = { connectDB };

