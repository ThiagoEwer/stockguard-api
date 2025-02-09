const express = require('express');
const router = express.Router();
const MovimentacaoController = require('../controllers/movimentacaoController');

router.get('/', MovimentacaoController.getAllMovements);
router.get('/:id', MovimentacaoController.getMovementById);
router.post('/', MovimentacaoController.createMovement);
router.put('/:id', MovimentacaoController.updateMovement);
router.delete('/:id', MovimentacaoController.softDeleteMovement);
router.delete('/hard/:id', MovimentacaoController.hardDeleteMovement);

module.exports = router;
