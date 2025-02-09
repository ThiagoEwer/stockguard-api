// src/routes/produtRoutes.js
const express = require('express');
const router = express.Router();
const produtController = require('../controllers/produtController');

router.get('/', produtController.getAllProducts);
router.get('/:id', produtController.getProductById);
router.post('/', produtController.createProduct);
router.put('/:id', produtController.updateProduct);
router.delete('/:id', produtController.deleteProduct);
router.delete('/hard/:id', produtController.hardDeleteProduct);

module.exports = router;
