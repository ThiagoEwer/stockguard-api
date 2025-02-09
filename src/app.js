// src/app.js
const express = require('express');
const app = express();
const usuariRoutes = require('./routes/usuariRoutes');
const produtRoutes = require('./routes/produtRoutes');
const localRoutes = require('./routes/localRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');

// Middleware para parsing de JSON
app.use(express.json());

app.use('/api/usuari', usuariRoutes);
app.use('/api/produt', produtRoutes);
app.use('/api/locali', localRoutes);
app.use('/api/estoq', estoqueRoutes);
app.use('/api/movime', movimentacaoRoutes);
app.use('/api/pedido', pedidoRoutes);
app.use('/api/client', clienteRoutes);
app.use('/api/fornec', fornecedorRoutes);

module.exports = app;
