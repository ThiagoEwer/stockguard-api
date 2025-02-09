// src/routes/usuariRoutes.js
const express = require('express');
const router = express.Router();
const usuariController = require('../controllers/usuariController');

router.get('/', usuariController.getAllUsers);
router.get('/:id', usuariController.getUserById);
router.post('/', usuariController.createUser);
router.put('/:id', usuariController.updateUser);
router.delete('/:id', usuariController.deleteUser);
router.delete('/hard/:id', usuariController.hardDeleteUser);

module.exports = router;
