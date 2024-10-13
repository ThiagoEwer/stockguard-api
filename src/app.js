// src/app.js
const express = require('express');
const app = express();
const usuariRoutes = require('./routes/usuariRoutes');

// Middleware para parsing de JSON
app.use(express.json());

// Rotas para a tabela USUARI
app.use('/api/usuari', usuariRoutes);

module.exports = app;
