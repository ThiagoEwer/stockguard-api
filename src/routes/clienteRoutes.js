const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');

router.get('/', ClienteController.getAllClients);
router.get('/:id', ClienteController.getClientById);
router.post('/', ClienteController.createClient);
router.put('/:id', ClienteController.updateClient);
router.delete('/:id', ClienteController.softDeleteClient);
router.delete('/hard/:id', ClienteController.hardDeleteClient);

module.exports = router;
