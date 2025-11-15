const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const bugRoutes = require('./routes/bugRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

// Security headers
app.use(helmet());

// CORS – allow local dev + deployed frontend
const allowedOrigins = [
  process.env.CLIENT_ORIGIN,    // e.g. https://your-frontend.netlify.app
  'http://localhost:5173',
  'http://127.0.0.1:5173',
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Logging – more detailed in production
const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

app.use(express.json());

// Health check (for uptime monitoring)
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Bug routes
app.use('/api/bugs', bugRoutes);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;

