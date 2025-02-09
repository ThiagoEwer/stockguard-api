const express = require('express');
const router = express.Router();
const FornecedorController = require('../controllers/fornecedorController');

router.get('/', FornecedorController.getAllSuppliers);
router.get('/:id', FornecedorController.getSupplierById);
router.post('/', FornecedorController.createSupplier);
router.put('/:id', FornecedorController.updateSupplier);
router.delete('/:id', FornecedorController.softDeleteSupplier);
router.delete('/hard/:id', FornecedorController.hardDeleteSupplier);

module.exports = router;
