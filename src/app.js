const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();

app.use(cors({origin:'*'}));

app.use(express.json());


const usuariRoutes = require('./routes/usuariRoutes');
const produtRoutes = require('./routes/produtRoutes');
const localRoutes = require('./routes/localRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');

// Definição das rotas da API
app.use('/api/usuari', usuariRoutes);
app.use('/api/produt', produtRoutes);
app.use('/api/locali', localRoutes);
app.use('/api/estoq', estoqueRoutes);
app.use('/api/movime', movimentacaoRoutes);
app.use('/api/pedido', pedidoRoutes);
app.use('/api/client', clienteRoutes);
app.use('/api/fornec', fornecedorRoutes);

module.exports = app;