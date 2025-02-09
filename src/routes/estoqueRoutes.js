const express = require('express');
const router = express.Router();
const EstoqueController = require('../controllers/estoqueController');

router.get('/', EstoqueController.getAllStock);
router.get('/:id', EstoqueController.getStockById);
router.post('/', EstoqueController.createStock);
router.put('/:id', EstoqueController.updateStock);
router.delete('/:id', EstoqueController.softDeleteStock);
router.delete('/hard/:id', EstoqueController.hardDeleteStock);

module.exports = router;