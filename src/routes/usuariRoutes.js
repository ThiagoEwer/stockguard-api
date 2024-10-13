// src/routes/usuariRoutes.js
const express = require('express');
const router = express.Router();
const usuariController = require('../controllers/usuariController');

// Rota para buscar todos os usuários
router.get('/', usuariController.getAllUsers);

// Rota para buscar um usuário pelo ID
router.get('/:id', usuariController.getUserById);

// Rota para criar um novo usuário
router.post('/', usuariController.createUser);

// Rota para atualizar um usuário pelo ID
router.put('/:id', usuariController.updateUser);

// Rota para realizar um "soft delete" de um usuário
router.delete('/:id', usuariController.deleteUser);

// Rota para realizar um "hard delete" de um usuário
router.delete('/hard/:id', usuariController.hardDeleteUser);

module.exports = router;
