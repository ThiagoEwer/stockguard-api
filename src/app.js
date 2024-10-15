// src/app.js
const express = require('express');
const app = express();
const usuariRoutes = require('./routes/usuariRoutes');
const produtRoutes = require('./routes/produtRoutes'); // Importando as rotas de produtos

// Middleware para parsing de JSON
app.use(express.json());

app.use('/api/usuari', usuariRoutes);
app.use('/api/produt', produtRoutes);

module.exports = app;
