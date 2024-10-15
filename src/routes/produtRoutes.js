// src/routes/produtRoutes.js
const express = require('express');
const router = express.Router();
const produtController = require('../controllers/produtController');

// Rota para buscar todos os produtos
router.get('/', produtController.getAllProducts);

// Rota para buscar um produto pelo ID
router.get('/:id', produtController.getProductById);

// Rota para criar um novo produto
router.post('/', produtController.createProduct);

// Rota para atualizar um produto pelo ID
router.put('/:id', produtController.updateProduct);

// Rota para realizar um "soft delete" de um produto
router.delete('/:id', produtController.deleteProduct);

// Rota para realizar um "hard delete" de um produto
router.delete('/hard/:id', produtController.hardDeleteProduct);

module.exports = router;
