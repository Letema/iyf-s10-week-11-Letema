const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const postsRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');

app.use('/api/posts', postsRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;