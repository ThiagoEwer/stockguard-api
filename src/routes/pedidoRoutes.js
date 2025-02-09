const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedidoController');

router.get('/', PedidoController.getAllOrders);
router.get('/:id', PedidoController.getOrderById);
router.post('/', PedidoController.createOrder);
router.put('/:id', PedidoController.updateOrder);
router.delete('/:id', PedidoController.softDeleteOrder);
router.delete('/hard/:id', PedidoController.hardDeleteOrder);

module.exports = router;